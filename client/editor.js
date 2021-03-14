import {EditorState, basicSetup} from "@codemirror/basic-setup";
import {EditorView} from "@codemirror/view";
import {Transaction, Annotation} from "@codemirror/state";
import {Text} from "@codemirror/text";

const form = document.querySelector('#form');
const button1 = document.querySelector('#button1');
const editorTransformedEl = document.querySelector('#editor-transformed');
const editorRowEl = document.querySelector('#editor-raw');

const startState = EditorState.create({
  extensions: basicSetup
})

let editorRow = new EditorView({
  state: startState,
  parent: editorRowEl,
})

let editorTransformed = new EditorView({
  state: startState,
  parent: editorTransformedEl,
})

button1.addEventListener('click', () => {
  let valueOfeditorRow = editorRow.state.doc.text.toString();
  let valueOfeditorTransformed = editorTransformed.state.doc.text.toString();
  //let transaction = editorTransformed.state.update({changes: {from: 0, insert: valueOfeditorRow}});
  console.log(editorTransformed.state);
  let transaction = editorTransformed.state.update({newDoc: Text.of(valueOfeditorRow.split('\n'))});
  //et transaction = editorTransformed.state.update({doc: {text:editorRow.state.doc.text}});
  editorTransformed.dispatch(transaction);
  console.log(editorTransformed.state);
})



