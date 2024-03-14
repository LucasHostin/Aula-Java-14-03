
const idade = 12;

if (idade >= 18){
    console.log("Voce é maior de idade")
} else  {
    console.log("Voce é menor de idade")
}

// voce é crianca 
// voce é adolecente 
// voce tem 18 anos 
// voce é adulto 
// voce é idoso 
// idade invalida. 

const idade1 = prompt("idade")
if (idade >= 0, idade < 12) {
    console.log("Você é uma criança.");
} else if (idade >= 12, idade < 18) {
    console.log("Você é um adolescente.");
} else if (idade == 18) {
    console.log("Você tem 18 anos.");
} else if (idade > 18, idade < 60) {
    console.log("Você é um adulto.");
} else if (idade >= 60) {
    console.log("Você é um idoso.");
} else {
    console.log("Idade inválida.");
}
