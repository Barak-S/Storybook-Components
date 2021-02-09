default: dist

dist: FORCE
	yarn install
	yarn dist
	chmod +x ./dist/index.js
	yarn run link

FORCE: ;