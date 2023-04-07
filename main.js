const apiButton = document.getElementById('apiButton');
const apiData = document.getElementById('apiData');

const sats = document.getElementById('sats');
const texto = document.getElementById('texto');



const callApi = () =>{
    fetch('https://api.yadio.io/exrates/BTC').then(res => res.json())
    .then(data => {
        //dolar
        apiData.innerText = `= $ ${JSON.stringify(data.BTC.USD)}`
        sats.innerText = ` Buy $ ${JSON.parse(data.BTC.USD/100000000).toFixed(6)}`

        fetch('https://api.yadio.io/convert/1/USD/BTC').then(res => res.json())
        .then(data => {
            valor.innerText =`Buy ${JSON.parse(data.result)}`
         } )
        
        //euro
        euData.innerText = `= € ${JSON.stringify(data.BTC.EUR)}`
        eusats.innerText = `Buy € ${JSON.parse(data.BTC.EUR/100000000).toFixed(6)}`

        fetch('https://api.yadio.io/convert/1/EUR/BTC').then(res => res.json())
        .then(data => {
            euvalor.innerText =`Buy ${JSON.parse(data.result)}`

    })
    
 /*
    var entrada = (document.getElementById('texto').value);
 */
   
    
    var btc = (data.BTC.USD/100000000);
    var suma = entrada*btc;
    
    document.getElementById('resultado').innerHTML = `Total: $ ${suma}`
}
    
    
       ) 
    //    .cacth(e => console.error(new Error(e)));

}

setInterval(callApi,1000);

/*Api original:
https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD
*/

// Barra de busqueda
function search_animal() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('box');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}

