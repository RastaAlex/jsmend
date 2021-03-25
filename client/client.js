'use strict';

const editorRawEl = document.getElementById('js-editor-raw');
const editorTransformedEl = document.getElementById('js-editor-transformed');
const button = document.getElementById('transform');

window.addEventListener('DOMContentLoaded', main);

async function main() {
    const [editorRaw, editorTransformed] = await getEditors();

    editorRaw.setModeForPath('hello.js');
    editorTransformed.setModeForPath('hello.js');

    button.addEventListener('click', () => {
        const valueEditorRaw = editorRaw.getValue();
        editorTransformed.setValue(valueEditorRaw);
        console.log(valueEditorRaw);
    }); 
}

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
    });
}

