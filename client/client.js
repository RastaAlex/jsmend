'use strict';

const editorRawEl = document.getElementById('js-editor-raw');
const editorTransformedEl = document.getElementById('js-editor-transformed');
const button = document.getElementById('transform');
let rule = document.getElementById('rule');
let message = document.getElementById('message');
let line = document.getElementById('line');

window.addEventListener('DOMContentLoaded', main);

async function main() {
    const [editorRaw, editorTransformed] = await getEditors();

    editorRaw.setModeForPath('hello.js');
    editorTransformed.setModeForPath('hello.js');
    editorRaw.setValue("const a = 'hello';\r\nconst a = 5;");

    button.addEventListener('click', async () => {
        const valueEditorRaw = editorRaw.getValue();

        const {
            code,
            places
        } = await request('http://localhost:4030/transform', 'POST', valueEditorRaw);
        editorTransformed.setValue(code);
        rule.textContent = places[0].rule;
        message.textContent = places[0].message;
        line.textContent = JSON.stringify(places[0].position).replaceAll(/[{}"]/g, '');
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

async function request(url, method, data = null) {
    const response = await fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    })

    return await response.json();
}
