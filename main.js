
const apiButton = document.getElementById('apiButton');

const apiData = document.getElementById('apiData')

const sats = document.getElementById('sats')

const texto = document.getElementById('texto')

const callAPI = () =>{
 fetch('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD').then(res => res.json())
   .then(data => {
     apiData.innerText = `Cada BTC equivale a $ ${JSON.stringify(data.BTC.USD)
      } dolares`
     sats.innerText = `Cada sat equivale a $ ${JSON.stringify(data.BTC.USD/100000000)
} de dolar`
var entrada = (document.getElementById('texto').value);
  
var btc = (data.BTC.USD/100000000);
var suma = entrada*btc;
document.getElementById('resultado').innerHTML = `Total: $ ${suma}`
}
   )
   
  .catch(e => console.error(new Error(e)));
    
}
/*
apiButton.addEventListener('click', callAPI);
*/


/*
setTimeout(function(sats) { window.location=window.location;},1000);*/
  

setInterval(callAPI, 500);
