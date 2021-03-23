'use strict';

let editorRawEl = document.getElementById('js-editor-raw');
let editorTransformedEl = document.getElementById('js-editor-transformed');

window.addEventListener('DOMContentLoaded', async () => {
    const [editorRaw, editorTransformed] = await getEditors();

    editorRaw.setModeForPath('hello.js');
    editorTransformed.setModeForPath('hello.js');

    editorRawEl.addEventListener('keyup', () => {
        console.log(editorRaw.getValue());
    })

    editorTransformedEl.addEventListener('keyup', () => {
        console.log(editorTransformed.getValue());
    })

});

function getEditors() {
    let editorRaw;
    let editorTransformed;

    return new Promise((resolve) => {
        dword('#js-editor-raw', (editor) => {
            editorRaw = editor;

            dword('#js-editor-transformed', (editor) => {
                editorTransformed = editor;

                resolve([
                    editorRaw,
                    editorTransformed,
                ]);
            });
        });
    })

}

