export class CrudField {
  key: number;
  name: string;
  type: string;
  value: any;
  private _image_count = 1;


  get image_count(): number {
    if (this._image_count && this._image_count > 0) {
      return this._image_count;
    }
    return 1;
  }
}
