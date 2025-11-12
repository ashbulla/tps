
let studenti = [];


function caricaDati() {
let richiesta = new XMLHttpRequest();
richiesta.open("GET", "studente.json", true);
richiesta.send();


richiesta.onload = function() {
if (richiesta.status === 200) {
studenti = JSON.parse(richiesta.responseText);
mostraTabella(studenti);
} else {
document.getElementById("tabella").innerHTML = "<p>Errore nel caricamento dei dati.</p>";
}
}
}


function mostraTabella(listaStudenti) {
if (listaStudenti.length === 0) {
document.getElementById("tabella").innerHTML = "<p>Nessun risultato trovato.</p>";
return;
}


let tab = "<table><tr><th>Nome</th><th>Cognome</th><th>Data di nascita</th></tr>";


for (let studente of listaStudenti) {
tab += "<tr><td>" + studente.nome + "</td><td>" + studente.cognome + "</td><td>" + studente.data_di_nascita + "</td></tr>";
}


tab += "</table>";


document.getElementById("tabella").innerHTML = tab;
}


function filtraPerIniziale() {
const iniziale = document.getElementById("filtro").value.toUpperCase();


if (iniziale === "") {
mostraTabella(studenti);
return;
}


const filtrati = studenti.filter(s => s.cognome.toUpperCase().startsWith(iniziale));


mostraTabella(filtrati);
}


function calcolaEta(studente) {
if (!studente.data_di_nascita) return 0;


const parti = studente.data_di_nascita.split("/");
if (parti.length !== 3) return 0;


const dataNascita = new Date(parti[2], parti[1] - 1, parti[0]);
const oggi = new Date();


let eta = oggi.getFullYear() - dataNascita.getFullYear();


const meseDiff = oggi.getMonth() - dataNascita.getMonth();
if (meseDiff < 0 || (meseDiff === 0 && oggi.getDate() < dataNascita.getDate())) {
eta--;
}


return eta;
}


function mostraSoloMaggiorenni() {
const maggiorenni = studenti.filter(s => calcolaEta(s) >= 18);


mostraTabella(maggiorenni);
}
