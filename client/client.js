'use strict';


const editorRawEl = document.getElementById('js-editor-raw');
const editorTransformedEl = document.getElementById('js-editor-transformed');
const button = document.getElementById('transform');

window.addEventListener('DOMContentLoaded', main);

async function main() {
    const [editorRaw, editorTransformed] = await getEditors();

    editorRaw.setModeForPath('hello.js');
    editorTransformed.setModeForPath('hello.js');

    button.addEventListener('click', async () => {
         const valueEditorRaw = editorRaw.getValue();
        // editorTransformed.setValue(valueEditorRaw);
         //editorTransformed.setValue(data);

        const {code, places} = await request('http://localhost:4030/transform', 'POST', valueEditorRaw);
        editorTransformed.setValue(code);
        console.log(places);
        
        // request('http://localhost:4030/transform', 'GET')
        // .then((data) => console.log(data));
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

async function request (url, method, data = null) {
  const response = await fetch(url, {
    method: method,
    headers: {'Content-Type': 'application/json'},
    body: data
  })

  return await response.json();
}


