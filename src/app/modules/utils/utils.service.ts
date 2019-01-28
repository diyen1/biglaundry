import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {

  constructor() { }

  getTransClass(transparent) {
    return (transparent === true)
      ? 'mdl-layout__header--transparent'
      : 'mdl-color--primary';
  }
}
