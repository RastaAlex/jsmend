import {EditorState, basicSetup} from "@codemirror/basic-setup";
import {EditorView} from "@codemirror/view";
import {Transaction, Annotation} from "@codemirror/state";

const startState = EditorState.create({
  extensions: basicSetup
})

let editorRow = new EditorView({
  state: startState,
  parent: document.querySelector('#editor-raw'),
  dispatch: syncDispatch()
})

let editorTransformed = new EditorView({
  state: startState,
  parent: document.querySelector('#editor-transformed'),
  dispatch: syncDispatch()
})
//const {changes, annotations} = transactions;
//console.log(transaction);

function syncDispatch(from, to) {
  let syncAnnotation = Annotation.define();
  console.log(transaction);
        if (changes.empty && !annotation(syncAnnotation)) {
          editorTransformed.dispatch({
            changes,
            annotations: syncAnnotation.of(true),
      })
      console.log(transaction);
    }
    return transaction;

}

//const socket = io();  

const form = document.querySelector('#form');
const button1 = document.querySelector('#button1');
const editorRow = document.querySelector('#editor-raw');
const editorTransformed = document.querySelector('#editor-transformed');

editorRow.addEventListener('keyup', (evt) => {
  evt.preventDefault();
  const data = editorRow.value;
})

editorTransformed.addEventListener('change', (evt) => {
  evt.preventDefault();
  if (editorRow.value) {
    editorTransformed.value = editorRow.value;
  })
