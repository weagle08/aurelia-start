import { Router, RouterConfiguration } from 'aurelia-router';

export class App {
  private _router: Router;

  public constructor() {

  }

  public configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Janus';

    this._router = router;
  }
}
