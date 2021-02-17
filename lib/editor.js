import {EditorState, basicSetup} from "@codemirror/basic-setup";
import {EditorView} from "@codemirror/view";
import {Transaction, Annotation} from "@codemirror/state";

let startState = EditorState.create({
  extensions: basicSetup
})

let views = [];

let syncAnnotation = Annotation.define();
function syncDispatch(from, to) {
    return  (tr, Transaction) => {
        views[from].update([tr]);
        if (!tr.changes.empty && !tr.annotation(syncAnnotation))
            views[to].dispatch({ changes: tr.changes,
                annotations: syncAnnotation.of(true) });
    };
}

views.push(
  new EditorView({
    state: startState,
    parent: document.querySelector('#editorRow'),
    //dispatch: syncDispatch(0, 1)
  }),
  new EditorView({
    state: startState,
    parent: document.querySelector('#editorTransformed'),
    //dispatch: syncDispatch(1, 0)
  })
)