//'use strict';

//let editorRaw = document.querySelector('#editor-raw');

// window.addEventListener('DOMContentLoaded', function () {
//     let editor = new Copenhagen.Editor({language: 'javascript'});

//     editor.open(this.selector('.some-selector'), false);

//     editor.setValue('var message = `hello world`;');
// })
let editorRawEl = document.getElementsByClassName('editor-raw');
let editorTransformedEl = document.getElementsByClassName('editor-transformed');

window.addEventListener('DOMContentLoaded', function () {
    let editorRaw = Copenhagen.initSelectorAll('.editor-raw');
    let editorTransformed = Copenhagen.initSelectorAll('.editor-transformed');
    let editorRawValue = editorRaw[0].value;
    let editorTransformedValue = editorTransformed[0].value;
    

  });

  editorRawEl[0].addEventListener('keyup', () => {
      console.log(editorRawEl[0]);
  })
