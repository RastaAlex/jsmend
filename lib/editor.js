import {EditorState, basicSetup} from "@codemirror/basic-setup";
import {EditorView} from "@codemirror/view";
import {Transaction, Annotation} from "@codemirror/state";

let startState = EditorState.create({
  extensions: basicSetup
})



let syncAnnotation = Annotation.define();
const {changes, annotations} = transactions;
console.log(transaction);

function syncDispatch(from, to) {
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

  let editorRow = new EditorView({
    state: startState,
    parent: document.querySelector('#editorRow'),
    dispatch: syncDispatch()
  })

  let editorTransformed = new EditorView({
    state: startState,
    parent: document.querySelector('#editorTransformed'),
    dispatch: syncDispatch()
  })
