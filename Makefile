LESSW      = ./node_modules/.bin/watch-less
WATCHIFY   = ./node_modules/.bin/watchify
WATCH      = ./node_modules/.bin/watch
LESS       = ./node_modules/.bin/lessc
BROWSERIFY = ./node_modules/.bin/browserify
UGLIFY     = ./node_modules/.bin/uglifyjs
NAME       = $(shell node -e "console.log(require('./package.json').name)")

watch-js:
	${MAKE} build-js
	${WATCHIFY} -e  --standalone $(NAME) ./src/js/index.js -o public/js/bundle.js -d -v

watch-css:
	${MAKE} build-css
	${WATCH} "${MAKE} build-css" src/style

watch:
	${MAKE} watch-js & ${MAKE} watch-css

build-js:
	${BROWSERIFY} -e --standalone $(NAME) ./src/js/index.js | ${UGLIFY} - > public/js/bundle.js

# Use less on index style.
build-css:
	${LESS} src/style/{{name}}.less > public/css/bundle.css

build:
	${MAKE} build-js
	${MAKE} build-css