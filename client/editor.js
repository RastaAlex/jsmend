import {EditorState, basicSetup} from "@codemirror/basic-setup";
import {EditorView} from "@codemirror/view";
import {Transaction, Annotation} from "@codemirror/state";

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
  dispatch: syncDispatch()
})

let editorTransformed = new EditorView({
  state: startState,
  parent: editorTransformedEl,
  dispatch: syncDispatch()
})

function syncDispatch(from, to) {
  let syncAnnotation = Annotation.define();
    //     if (changes.empty && !annotation(syncAnnotation)) {
    //       editorTransformed.dispatch({
    //         changes,
    //         annotations: syncAnnotation.of(true),
    //   })
    // }

}


// editorRow.addEventListener('keyup', (evt) => {
//   evt.preventDefault();
//   const data = editorRow.value;
// })

// editorTransformed.addEventListener('change', (evt) => {
//   evt.preventDefault();
//   if (editorRow.value) {
//     editorTransformed.value = editorRow.value;
//   }
  
//   })

