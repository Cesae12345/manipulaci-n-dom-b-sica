
const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', sumarInputValues );


function sumarInputValues(event){
   // console.log(event);
    //event.preventDefault();
    const sumaInput = input1.value + input2.value;
    pResult.innerText = "Resultado:" + sumaInput;

}