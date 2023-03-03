import {preloadPrimer, Primer} from "@primer-io/checkout-web";

export class PrimerPayments {
  private readonly selector: string;

  constructor(selector: string) {
    this.selector = selector;
  }

  public async preload() {
    try {
      await preloadPrimer()
    } catch (e) {
      throw e;
    }
  }

  public async render() {
    try {
      const clientToken = '';
      await Primer.showUniversalCheckout(clientToken, {container: this.selector})
    } catch (e) {
      throw e;
    }
  }
}
