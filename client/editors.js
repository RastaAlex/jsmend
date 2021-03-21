'use strict';

let editorRawEl = document.getElementsByClassName('editor-raw');
let editorTransformedEl = document.getElementsByClassName('editor-transformed');
let editorRaw = new Copenhagen.Editor({language: 'javascript'});
let editorTransformed = new Copenhagen.Editor({language: 'javascript'});

editorRaw.open(editorRaw.selector('.editor-raw'), false);
editorTransformed.open(editorTransformed.selector('.editor-transformed'), false);
editorRaw.setValue('var message = `hello world`;');
