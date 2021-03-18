"use strict";
// import{Persona} from './persona'
var butadd = document.querySelector('#butadd');
var nombre = document.querySelector('#nombre');
var edad = document.querySelector('#edad');
// const sex       = document.querySelector('#sex')as HTMLSelectElement;
var persondata = new Persona();
butadd.addEventListener('click', function (e) {
    if (nombre.value != '' && edad.value != '' && !isNaN(parseFloat(edad.value))) {
        var nombres = nombre.value;
        var edades = parseFloat(edad.value);
        persondata.add({ _nombre: nombres, _edad: edades });
        render();
    }
    else {
        alert('falta algo');
    }
});
function render() {
    var html = '';
    persondata.getItems().forEach(function (item) {
        var _id = item._id, _nombre = item._nombre, _edad = item._edad;
        html += "\n        <div class=\"item\">\n            <div><span class=\"pdata\">" + _nombre + "</span></div>\n            <div>" + _nombre + "</div>\n            <div>" + _edad + "</div>\n            <div><button class=\"bEliminar\" data-id=\"" + _id + "\">Quitar</button><div>\n        </div>\n        ";
    });
    $('#items').innerHTML = html;
    // $('#display').textContent = persondata.getAll();
    $$('.bEliminar').forEach(function (bEliminar) {
        bEliminar.addEventListener('click', function (e) {
            var id = e.target.getAttribute('data-id');
            persondata.remove(parseInt(id));
            render();
        });
    });
}
function $(selector) {
    return document.querySelector(selector);
}
function $$(selector) {
    return document.querySelectorAll(selector);
}
