var input = document.querySelector('#find-by-this-cep');
var searchButton = document.querySelector('#search-btn');
var headerAddNumber = document.querySelector('.address-cep');

function findingByCEP(postalCode){
    let url = `https://viacep.com.br/ws/${postalCode}/json/unicode/`;
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';
    request.send();
    request.onload = function () {  
        let address = request.response;
        if(address["cep"] == undefined){
            alert("CEP não encontrado!");
        } else{
            formattingOutput(address);
        }
        
    }
    input.value = '';
}

function formattingOutput(address) {
    
    let cep = document.querySelector('#postal-code');
    let street = document.querySelector('#street');
    let neighborhood = document.querySelector('#neighborhood');
    let city = document.querySelector('#city');
    let state = document.querySelector('#state');

        cep.textContent = address['cep'];
        street.textContent = address['logradouro'];
        neighborhood.textContent = address['bairro'];
        city.textContent = address['localidade'];
        state.textContent = address['uf'];

}

searchButton.addEventListener('click', findingByCEP);
input.addEventListener('keydown', function(event){
    if((event.keyCode || event.wich) == 13){
        if(input.value === null){
            alert("Preencha com o CEP para consultar o endereço!");
        } else{
            findingByCEP(input.value);
        }
    }
});


