// import{Persona} from './persona'
const butadd    = document.querySelector('#butadd') as HTMLButtonElement;
const nombre    = document.querySelector('#nombre') as HTMLInputElement;
const edad  = document.querySelector('#edad')as HTMLInputElement;
// const sex       = document.querySelector('#sex')as HTMLSelectElement;


const persondata = new Persona();

butadd!.addEventListener('click', e =>{
    if( nombre!.value != '' && edad!.value != '' && !isNaN(parseFloat(edad.value))){
        const nombres = nombre!.value;
        const edades:number =parseFloat(edad!.value) ;
        
        persondata.add({ _nombre: nombres, _edad: edades});
        
        render();
    }else{
        alert('falta algo');
    }
});

function render(){
    let html = '';
    persondata.getItems().forEach(item =>{
        const {_id, _nombre, _edad } = item;
        html +=`
        <div class="item">
            <div><span class="pdata">${_nombre}</span></div>
            <div>${_nombre}</div>
            <div>${_edad}</div>
            <div><button class="bEliminar" data-id="${_id}">Quitar</button><div>
        </div>
        `;
    });

    $('#items').innerHTML = html;
    // $('#display').textContent = persondata.getAll();
    $$('.bEliminar').forEach(bEliminar => {
        bEliminar.addEventListener('click', e =>{
            const id = (e.target as HTMLButtonElement).getAttribute('data-id');
            persondata.remove(parseInt(id!));
            render();
        });
    })
}

function $(selector:string): HTMLElement{
    return document.querySelector(selector) as HTMLElement;

}

function $$(selector:string): NodeListOf<HTMLElement>{
    return document.querySelectorAll(selector) as NodeListOf<HTMLElement>;

}