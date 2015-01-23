#{{name}}

A [React](http://facebook.github.io/react/) app utilizing a [Flux](http://facebook.github.io/flux/)-like architecture using vanilla libraries.

The main app store/nested model is found in `src/js/App/State.js`. It extends an observable, which you can use for app-wide or component-private data in `src/js/App/Observable.js`. You call actions and listen to events in `src/js/App/App.js` with example actions being found in `src/js/App/Actions.js`.

The blog component in `src/js/Blog/components/Blog.jsx` syncs its own state with that of the app state on its change. You can observe the whole store or just parts of it using the wildcard `*` syntax.

##Quickstart

```bash
$ nvm use
$ npm install
$ make watch-js
$ npm start
```