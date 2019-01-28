import {
  Injectable,
  // Injector
} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
// import { Router } from '@angular/router';
import {catchError} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {environment} from '../../../../environments/environment';

import hmacSHA1 from 'crypto-js/hmac-sha1';
import Base64 from 'crypto-js/enc-base64';

// import { AuthService } from './auth.service';

declare var oauthSignature: any;

@Injectable()
export class DmWoocommerceInterceptor implements HttpInterceptor {

  constructor(
    // private injector: Injector,
    // private router: Router
  ) {
  }

  private includeWooAuth(url, method) {

    // let hasQuery = false;
    const params = {};
    const urlParts = url.split('?');

    if (urlParts.length === 2) {
      url = urlParts[0];
      const paramsParts = urlParts[1].split('&');

      console.log('paramsParts', paramsParts);

      for (let i = 0; i < paramsParts.length; i++) {
        const paramsKeyValue = paramsParts[i].split('=');
        params[paramsKeyValue[0]] = paramsKeyValue[1];
      }
    }

    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let nonce = '';
    for (let i = 0; i < 6; i++) {
      nonce += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    const currentTimestamp = Math.floor(new Date().getTime() / 1000);

    const authParam = {
      oauth_consumer_key: environment.woocommerce.consumer_key,
      oauth_nonce: nonce,
      oauth_signature_method: 'HMAC-SHA1',
      oauth_timestamp: currentTimestamp,
      oauth_version: '1.0',
    };
    const parameters = Object.assign({}, authParam, params);
    let signatureStr = '';
    Object.keys(parameters).sort().forEach(function (key) {
      if (signatureStr === '') {
        signatureStr += key + '=' + parameters[key];
      } else {
        signatureStr += '&' + key + '=' + parameters[key];
      }
    });
    let paramStr = '';
    Object.keys(params).sort().forEach(function (key) {

      paramStr += '&' + key + '=' + parameters[key];
    });

    // return url+
    //   '?oauth_consumer_key='+this.customer_key+
    //   '&oauth_nonce='+nonce+
    //   '&oauth_signature_method=HMAC-SHA1' +
    //   '&oauth_timestamp='+this.currentTimestamp+'' +
    //   '&oauth_version=1.0' +
    //   '&oauth_signature='+Base64.stringify(hmacSHA1(method+'&'+encodeURIComponent(url)+
    //     '&'+encodeURIComponent(signatureStr),this.customer_secret+'&'))+paramStr;


    const wooAuth = `oauth_consumer_key=${authParam.oauth_consumer_key}`
      + `&oauth_nonce=${authParam.oauth_nonce}`
      + `&oauth_signature_method=${authParam.oauth_signature_method}`
      + `&oauth_timestamp=${authParam.oauth_timestamp}`
      + `&oauth_version=${authParam.oauth_version}`
      + `&oauth_signature=${Base64.stringify(hmacSHA1(
        method + '&' + encodeURIComponent(url) + '&' + encodeURIComponent(signatureStr), environment.woocommerce.consumer_secret + '&'
      ))}` + paramStr
    ;
    const hasQuery = url.includes('?');
    let return_url = '';
    if (hasQuery) {
      return_url = url + '&' + wooAuth;
    } else {
      return_url = url + '?' + wooAuth;
    }
    return return_url;
  }

  private getAuthSignature(url, method, parameters) {

    let signatureStr = '';

    Object.keys(parameters).sort().forEach(function (key) {
      if (signatureStr === '') {
        signatureStr += key + '=' + parameters[key];
      } else {
        signatureStr += '&' + key + '=' + parameters[key];
      }
    });

    return Base64.stringify(
      hmacSHA1(
        method + '&' + encodeURIComponent(url) + '&' + encodeURIComponent(signatureStr),
        environment.woocommerce.consumer_secret + '&'
      )
    );
  }

  private getParameters() {
    return {
      oauth_consumer_key: environment.woocommerce.consumer_key,
      // oauth_token : 'nnch734d00sl2jdk',
      oauth_nonce: 'kllo9940pd9333jh',
      oauth_timestamp: '1191242096',
      oauth_signature_method: 'HMAC-SHA1',
      /*oauth_version : '1.0',
      file : 'vacation.jpg',
      size : 'original'*/
    };
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authRequest;
    // const auth = this.injector.get(AuthService);
    let requestUrl = '';
    if (request.url.includes('/wp-json/wc/v3/')) {
      requestUrl = `${this.includeWooAuth(request.url, request.method)}`;
    } else {
      requestUrl = `${request.url}`;
    }

    authRequest = request.clone({
      url: requestUrl
    });

    return next.handle(authRequest)
      .pipe(
        catchError(err => {
          if (err instanceof HttpErrorResponse && err.status === 0) {
            console.log('Check Your Internet Connection And Try again Later');
          } else if (err instanceof HttpErrorResponse && err.status === 401) {
            // auth.setToken(null);
            // this.router.navigate(['/', 'login']);
          }
          return throwError(err);
        })
      );
  }
}

