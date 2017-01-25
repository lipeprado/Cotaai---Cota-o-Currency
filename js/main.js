var inPut = document.querySelector("#inputCota"); // Pega a div onde será dados a entrada
var outPut = document.querySelector("#string");  // Pega a div onde sairá os dados


var textIn = document.querySelector("#text-in");
var textOut = document.querySelector("#text-out");

var legendaInput = document.querySelector(".text--legenda--input");
var legendaOutput = document.querySelector("#text--legenda--output");


textIn.innerHTML = "R$0.00";
textOut.innerHTML = "$0.00"


	
	



var xmlhttp = new XMLHttpRequest();
	
	
	
	xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
           if (xmlhttp.status == 200) {
               var dados = JSON.parse(xmlhttp.responseText);
               usTobrl = dados.rates.BRL;
               // console.log(usTobrl);
               
           }
           else if (xmlhttp.status == 400) {
              console.log('There was an error 400')
           }
           else {
              console.log('something else other than 200 was returned')
           }
        }
    };

    xmlhttp.open("GET", "http://api.fixer.io/latest?base=USD", true);
    // console.log(xmlhttp)
    xmlhttp.send();


function calcula() { 	

	

	var real = this.value; // variavel com o dado vindo do input
	var dolar =  usTobrl; // valor do Dolar ( dado local )
	var realToDolar = real / dolar; // variavel com a matematica para a funçao


	if (real <= 1) {
		legendaInput.innerHTML = "Real";
		legendaOutput.innerHTML = "Dolar";
	} else {
		legendaInput.innerHTML = "Reais"
		legendaOutput.innerHTML = "Dolares";
	}


	var moneyBr = new Intl.NumberFormat('pt-BR', {
	  style: 'currency',
	  currency: 'BRL',
	  minimumFractionDigits: 2,
	});


	var realBr = moneyBr.format(real);

	var moneyUs = new Intl.NumberFormat('us-EN', {
	  style: 'currency',
	  currency: 'USD',
	  minimumFractionDigits: 2,
	});

	var dolarUs = moneyUs.format(realToDolar);

	
	
	textIn.innerHTML = realBr;
	textOut.innerHTML = dolarUs;


	
	
}


inPut.addEventListener('keyup', calcula);

// inPut.value = " teste";
