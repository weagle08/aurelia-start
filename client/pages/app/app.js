export class App {
    configureRouter(config, router) {
        config.title = 'Aurelia Start';
        config.map([
            {route: ['', '/'], name: 'home', moduleId: 'pages/page1/page1', title: 'Page 1'},
            {route: ['names'], name: 'names', moduleId: 'pages/page2/page2', title: 'Names'}
        ]);
    }
}