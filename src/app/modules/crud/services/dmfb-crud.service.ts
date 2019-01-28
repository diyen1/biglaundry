import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DmfbCrudService {

  searchKey = '';
  services: any[];
  loading = false;
  PER_PAGE = 12;

  constructor() {
    // this.initializeServicesList();
  }

  initializeItemsList(collectionPath: string, user = null) {

    // let itemsListener;
    // if (user && user != null) {
    //   itemsListener = this.getUserItems(collectionPath, user);
    // } else {
    //   itemsListener = this.getItems(collectionPath);
    // }
    // itemsListener.subscribe((res) => {
    //     console.log('success', res);
    //     this.services = res.data;
    //     this.loading = false;
    //   },
    //   (error) => {
    //     console.log('error', error);
    //     this.loading = false;
    //   });
  }

  // getUserItems(collectionPath: string, user = null, lastItem = null): Observable<any> {
  //   this.loading = true;
  //   let i = 0;
  //   let ref: any = firebase.firestore().collection(collectionPath).where('uid', '==', user.uid)
  //     .orderBy('time', 'desc').limit(this.PER_PAGE + 1);
  //   if (lastItem != null) {
  //     ref = ref.startAt(lastItem.service).limit(this.PER_PAGE + 1);
  //   }
  //
  //   return new Observable((observer) => {
  //     ref.onSnapshot((querySnapshot) => {
  //       const items = [];
  //       const fetchDataLength = querySnapshot.size;
  //       querySnapshot.forEach((doc: any) => {
  //         const data = doc.data();
  //         let newLastItem = null;
  //         if (i < this.PER_PAGE) {
  //           items.push({
  //             imagesUrl: data.imagesUrl,
  //             latestUpdateTimestamp: data.latestUpdateTimestamp,
  //             price: data.price,
  //             sid: data.sid,
  //             time: data.time,
  //             uid: data.uid,
  //             description: data.description,
  //             service: data.service,
  //             mainPhotoUrl: data.mainPhotoUrl,
  //           });
  //         } else {
  //           newLastItem = {
  //             imagesUrl: data.imagesUrl,
  //             latestUpdateTimestamp: data.latestUpdateTimestamp,
  //             price: data.price,
  //             sid: data.sid,
  //             time: data.time,
  //             uid: data.uid,
  //             description: data.description,
  //             service: data.service,
  //             mainPhotoUrl: data.mainPhotoUrl,
  //           };
  //         }
  //         i++;
  //         if (i === fetchDataLength) {
  //           const isLastPage = (i !== this.PER_PAGE + 1);
  //           observer.next({data: items, isLastPage: isLastPage, lastItem: newLastItem});
  //           observer.complete();
  //         }
  //       });
  //     });
  //   });
  // }
  //
  // getItems(collectionPath: string, lastItem = null): Observable<any> {
  //
  //   this.loading = true;
  //   let i = 0;
  //   // const ref: any = firebase.firestore().collection(collectionPath).orderBy('time').startAt(offset).limit(this.PER_PAGE + 1);
  //   let ref: any;
  //   if (lastItem != null) {
  //     ref = firebase.firestore().collection(collectionPath).orderBy('time', 'desc')
  //       .startAt(lastItem.service).limit(this.PER_PAGE + 1);
  //   } else {
  //     ref = firebase.firestore().collection(collectionPath).orderBy('time', 'desc').limit(this.PER_PAGE + 1);
  //   }
  //   if (this.searchKey && this.searchKey !== '') {
  //     return this.getItemsSearch(collectionPath);
  //   } else {
  //     return new Observable((observer) => {
  //       ref.onSnapshot((querySnapshot) => {
  //         const items = [];
  //         const fetchDataLength = querySnapshot.size;
  //         querySnapshot.forEach((doc: any) => {
  //           const data = doc.data();
  //           let newLastItem = null;
  //
  //           if (i < this.PER_PAGE) {
  //             items.push({
  //               imagesUrl: data.imagesUrl,
  //               latestUpdateTimestamp: data.latestUpdateTimestamp,
  //               price: data.price,
  //               sid: data.sid,
  //               time: data.time,
  //               uid: data.uid,
  //               description: data.description,
  //               service: data.service,
  //               mainPhotoUrl: data.mainPhotoUrl,
  //             });
  //           } else {
  //             newLastItem = {
  //               imagesUrl: data.imagesUrl,
  //               latestUpdateTimestamp: data.latestUpdateTimestamp,
  //               price: data.price,
  //               sid: data.sid,
  //               time: data.time,
  //               uid: data.uid,
  //               description: data.description,
  //               service: data.service,
  //               mainPhotoUrl: data.mainPhotoUrl,
  //             };
  //           }
  //           i++;
  //           if (i === fetchDataLength) {
  //             const isLastPage = (i !== this.PER_PAGE + 1);
  //             observer.next({data: items, isLastPage: isLastPage, lastItem: newLastItem});
  //             observer.complete();
  //           }
  //         });
  //       });
  //     });
  //   }
  // }
  //
  //
  // getItemsSearch(collectionPath: string): Observable<any> {
  //
  //   this.loading = true;
  //   let i = 0;
  //   /*
  //   // const ref: any = firebase.firestore().collection(collectionPath).orderBy('time').startAt(offset).limit(this.PER_PAGE + 1);
  //   let ref: any;
  //   if (lastItem != null) {
  //     console.log('lastItem.service', lastItem.service);
  //     ref = firebase.firestore().collection(collectionPath).orderBy('service')
  //       .startAt(lastItem.service).limit(this.PER_PAGE + 1);
  //   } else {
  //     ref = firebase.firestore().collection(collectionPath).orderBy('service').limit(this.PER_PAGE + 1);
  //   }*/
  //
  //   return new Observable((observer) => {
  //
  //     const ref: any = firebase.firestore().collection(collectionPath).orderBy('time', 'desc');
  //
  //     ref.onSnapshot((querySnapshot) => {
  //       const items = [];
  //       const fetchDataLength = querySnapshot.size;
  //
  //       let searchResulCount = 0;
  //
  //       querySnapshot.forEach((doc: any) => {
  //         const data = doc.data();
  //         let newLastItem = null;
  //
  //         if (i < this.PER_PAGE) {
  //           if (
  //             (data.service && data.service.toLowerCase().includes(this.searchKey.toLowerCase()))
  //             || (data.price && data.price.toLowerCase().includes(this.searchKey.toLowerCase()))
  //             || (data.description && data.description.toLowerCase().includes(this.searchKey.toLowerCase()))
  //           ) {
  //             items.push({
  //               imagesUrl: data.imagesUrl,
  //               latestUpdateTimestamp: data.latestUpdateTimestamp,
  //               price: data.price,
  //               sid: data.sid,
  //               time: data.time,
  //               uid: data.uid,
  //               description: data.description,
  //               service: data.service,
  //               mainPhotoUrl: data.mainPhotoUrl,
  //             });
  //             searchResulCount++;
  //           }
  //         } else {
  //           newLastItem = {
  //             imagesUrl: data.imagesUrl,
  //             latestUpdateTimestamp: data.latestUpdateTimestamp,
  //             price: data.price,
  //             sid: data.sid,
  //             time: data.time,
  //             uid: data.uid,
  //             description: data.description,
  //             service: data.service,
  //             mainPhotoUrl: data.mainPhotoUrl,
  //           };
  //         }
  //         i++;
  //
  //         if (i === fetchDataLength) {
  //           const isLastPage = (i !== this.PER_PAGE + 1);
  //           observer.next({data: items, isLastPage: isLastPage, lastItem: newLastItem});
  //           observer.complete();
  //         } else {
  //
  //         }
  //       });
  //     });
  //   });
  // }

  // getItem(collectionPath: string, id: string): Observable<any> {
  //   const ref = firebase.firestore().collection(collectionPath);
  //   return new Observable((observer) => {
  //     ref.doc(id).get().then((doc: any) => {
  //       const data = doc.data();
  //       observer.next({
  //         imagesUrl: data.imagesUrl,
  //         latestUpdateTimestamp: data.latestUpdateTimestamp,
  //         price: data.price,
  //         sid: data.sid,
  //         time: data.time,
  //         uid: data.uid,
  //         service: data.service,
  //         description: data.description,
  //         mainPhotoUrl: data.mainPhotoUrl,
  //       });
  //     });
  //   });
  // }
  //
  // postItem(collectionPath: string, data): Observable<any> {
  //   const ref = firebase.firestore().collection(collectionPath);
  //   return new Observable((observer) => {
  //     /*ref.add(data).then((doc) => {
  //       observer.next(doc.id);
  //     });*/
  //     ref.doc(data.sid).set(data).then(() => {
  //       observer.next();
  //     }).catch(error => console.log(error));
  //   });
  // }
  //
  // updateItem(collectionPath: string, id: string, data): Observable<any> {
  //   const ref = firebase.firestore().collection(collectionPath);
  //   return new Observable((observer) => {
  //     ref.doc(id).set(data).then(() => {
  //       observer.next();
  //     });
  //   });
  // }
  //
  // deleteItem(collectionPath: string, id: string): Observable<{}> {
  //   const ref = firebase.firestore().collection(collectionPath);
  //   return new Observable((observer) => {
  //     ref.doc(id).delete().then(() => {
  //       observer.next();
  //     });
  //   });
  // }
}
