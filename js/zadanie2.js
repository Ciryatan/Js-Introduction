'use strict' ;

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