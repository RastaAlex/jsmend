import {EditorState, basicSetup} from "@codemirror/basic-setup";
import {EditorView} from "@codemirror/view";
import {Transaction, Annotation} from "@codemirror/state";

let startState = EditorState.create({
  doc: "The document\nis\nshared",
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
    parent: document.querySelector("#editor1"),
    dispatch: syncDispatch(0, 1)
  }),
  new EditorView({
    state: startState,
    parent: document.querySelector("#editor2"),
    dispatch: syncDispatch(1, 0)
  })
)