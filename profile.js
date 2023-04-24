console.log("profile world");

const clrAlert = () => {
	
	alert("Lucky says: mauvelous");
}

let clr  = document.querySelector('#color');

clr.addEventListener('click', clrAlert);

const plcAlert = () => {
	
	alert("Lucky says: a tea shop or somewhere near a waterfall");
}

let plc = document.querySelector('#place');

plc.addEventListener('click', plcAlert);

const rtlAlert = () => {
	
	alert("Lucky says: completing challenging exercises and staying healthy");
}

let rtl  = document.querySelector('#ritual')

rtl.addEventListener('click', rtlAlert);