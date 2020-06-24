export class LongLatPoint {

  coordinate = new Array<number>();

  constructor(long: number, lat: number) {
    this.coordinate = [long, lat];
  }

  public getLatitude(): number {
    return this.coordinate[1];
  }

  public getLongitude(): number {
    return this.coordinate[0];
  }
}
