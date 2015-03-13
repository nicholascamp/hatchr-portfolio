SASS_DIR = sass
CSS_DIR	 = css
JS_DIR = js

SASS_FILES  = $(shell find $(SASS_DIR) -type f -name *.scss)
SASS_GLOBAL	= $(SASS_DIR)/global.scss
SASS_TARGET = $(CSS_DIR)/global.css

JS_SOURCE = $(JS_DIR)/main.js
JS_TARGET = $(JS_DIR)/main.min.js

all: sass js

$(SASS_TARGET): $(SASS_FILES)
	sass 			$(SASS_GLOBAL) $@
	autoprefixer 	$@ -o $@
	cleancss 		$@ -o $@ --source-map

$(JS_TARGET): $(JS_SOURCE)
	uglifyjs $^ -o $@

sass: $(SASS_TARGET)

js: $(JS_TARGET)

clean:
	rm $(SASS_TARGET)
	rm $(JS_TARGET)
