install: install-deps install-flow-typed

run:
	npx babel-node -- src/bin/index.js 12.12.12.12

install-deps:
	npm install

install-flow-typed:
	npx flow-typed install

build:
	rm -rf dist
	npm run build

test:
	npm test

check-types:
	npx flow

lint:
	npx eslint .

publish:
	npm publish

.PHONY: test
