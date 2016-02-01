BABEL      = ./node_modules/.bin/babel-node
WATCHIFY   = ./node_modules/.bin/watchify
WATCH      = ./node_modules/.bin/watch
LESS       = ./node_modules/.bin/lessc
BROWSERIFY = ./node_modules/.bin/browserify
UGLIFY     = ./node_modules/.bin/uglifyjs
MOCHA      = ./node_modules/.bin/mocha
NAME       = $(shell node -e "console.log(require('./package.json').name)")

start:
	${BABEL} server/index.js

watch-js:
	${MAKE} build-js
	${WATCHIFY} -e -s $(NAME) ./client/js/index.jsx -t babelify -o server/public/js/bundle.js -d -v

watch-css:
	${MAKE} build-css
	${WATCH} "${MAKE} build-css" client/less

watch:
	${MAKE} watch-js & ${MAKE} watch-css

build-js:
	${BROWSERIFY} -e -s $(NAME) ./client/js/index.jsx -t babelify | ${UGLIFY} - > server/public/js/bundle.js

build-css:
	${LESS} client/less/app.less > server/public/css/bundle.css

build:
	${MAKE} build-js
	${MAKE} build-css

test:
	${MOCHA} --compilers js:babel/register --ui exports --timeout 5000 --bail --reporter spec

.PHONY: test