export function addParamsToUrl(url, params) {
  if (params.length > 0) {
    const constructedParamArray = [];
    for (let i = 0; i < params.length; i++) {
      const param = params[i];
      constructedParamArray.push(param.key + '=' + param.value);
    }
    const constructedParamString = constructedParamArray.join('&');
    url = url + '?' + constructedParamString;
  }
  return url;
}
