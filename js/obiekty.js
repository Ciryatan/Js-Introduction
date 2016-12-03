'use strict' ;


function Osoba(imie,nazwisko) {
	this.imie = imie;
	this.naziwsko = nazwisko;
	this.wzrost;
	this.oczy;
	this.wyswietlInfo = function () {
		console.log("Imię: " + this.imie + "\n" 
					+ "Nazwisko: " + this.nazwisko +"\n"
				   	+ "Wzrost: " + this.wzrost + "\n"
					+ "Oczy: " + this.oczy);
	}
}

var pawel = new Osoba ('Pawel', 'Fijak');
pawel.wzrost = 180;
pawel.oczy = "niebieskie";

pawel.wyswietlInfo();

var kasia = new osoba('Kasia', 'Zając');

kasia.wyswietlInfo();



function Firma(nazwa,adres) {
	this.nazwa = nazwa;
	this.adres = adres;
	this.wyswietlWynik = function () {
		console.log("Nazwa: " + this.nazwa + "\n"
				   + "Adres: " + this.adres);
	}
}

var hcl = new Firma ('hcl', 'krakowska 280');

hcl.kraj = "Polska";

hcl.wyswietlWynik();

var nokia = new Firma ('nokia', 'swietego jana 125');

nokia.kraj = "Polska";
nokia.wyswietlWynik();


//var Osoba =  {
	//imie: "Marcin",
	//nazwisko: "Fijak",
	//wzrost: 180,
	//wysietlDetale: function() {
//		console.log ( this.imie + " " + this.wzrost );
////	}
//}



//Osoba.imie = "Kasia";
//Osoba.wzrost = 170;

//Osoba.imie = "Paweł";
//Osoba.wzrost = 178;
//Osoba.oczy = "niebieskie";

//Osoba.wysietlDetale = function () {
//	console.log (this.imie + " " + this.wzrost + " " + this.oczy);
//
//Osoba.wysietlDetale ();


