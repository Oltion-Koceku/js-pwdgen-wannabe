const nome = prompt("Come ti chiami?");
const cognome = prompt("Qual è il tuo cognome?");
const colore = prompt("Il tuo colore preferito?");
const nomeCognome = nome + " " + cognome;
const coloreNumero = colore + 24;
console.log(nome, cognome, colore, nomeCognome, coloreNumero);
document.getElementById("password").innerHTML =
`
<p> 
  Ciao <strong>${nomeCognome}</strong>,<br>
  Questa è la tua Password: <strong >${nome + cognome + coloreNumero}</strong>
</p>
`;