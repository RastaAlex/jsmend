'use strict';

const {
    EditorState,
    basicSetup,
} = require('@codemirror/basic-setup');
const {EditorView} = require('@codemirror/view');
const {
    Transaction,
    Annotation,
} = require('@codemirror/state');
const {Text} = require('@codemirror/text');

const form = document.querySelector('#form');
const button1 = document.querySelector('#button1');
const editorTransformedEl = document.querySelector('#editor-transformed');
const editorRowEl = document.querySelector('#editor-raw');

const startState = EditorState.create({
    extensions: basicSetup,
});

const editorRow = new EditorView({
    state: startState,
    parent: editorRowEl,
});

const editorTransformed = new EditorView({
    state: startState,
    parent: editorTransformedEl,
});

button1.addEventListener('click', () => {
    const valueOfeditorRow = editorRow.state.doc.text.toString();
    const valueOfeditorTransformed = editorTransformed.state.doc.text.toString();
    //let transaction = editorTransformed.state.update({changes: {from: 0, insert: valueOfeditorRow}});
    const transaction = editorTransformed.state.update({newDoc: Text.of(valueOfeditorRow.split('\n'))});
    editorTransformed.dispatch(transaction);
    console.log(editorTransformed.state);
});
