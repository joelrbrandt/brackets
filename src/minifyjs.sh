#! /bin/bash

r.js -o brackets.build.js

cat thirdparty/jquery-1.7.js \
    thirdparty/CodeMirror2/lib/codemirror.js \
    thirdparty/CodeMirror2/lib/util/dialog.js \
    thirdparty/CodeMirror2/lib/util/searchcursor.js \
    thirdparty/CodeMirror2/lib/util/search.js \
    brackets.built.js \
 | uglifyjs > brackets.min.js
