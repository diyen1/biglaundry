import { WoocomerceModule } from './woocomerce.module';

describe('WoocomerceModule', () => {
  let woocomerceModule: WoocomerceModule;

  beforeEach(() => {
    woocomerceModule = new WoocomerceModule();
  });

  it('should create an instance', () => {
    expect(woocomerceModule).toBeTruthy();
  });
});
