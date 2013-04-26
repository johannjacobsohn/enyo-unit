test: 
	@node_modules/.bin/mocha-phantomjs test.html

lint: 
	@node_modules/.bin/jshint source

coverage: mk-cov test-cov clean

mk-cov:
	@jscoverage source source-cov

# mocha-phantomjs' html-cov output is broken; use json2htmlcov in the meantime
test-cov:
	node_modules/.bin/mocha-phantomjs coverage-runner.html -R json-cov | node_modules/.bin/json2htmlcov > coverage.html

clean:
	@rm -r source-cov

.PHONY: test
