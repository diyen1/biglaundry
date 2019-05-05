export class DateHandler {
  public static convertToDate(str) {
    const date = new Date(str),
      month = ('0' + (date.getMonth() + 1)).slice(-2),
      day  = ('0' + date.getDate()).slice(-2);
    return [ date.getFullYear(), month, day ].join('-');
  }
}
