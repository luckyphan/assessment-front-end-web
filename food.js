console.log("hello world");



const choose = () => {
	// evt.preventDefault();
	const messages = ["Great Chow","Applebees","Truetts","VN Pho","Cracker Barrel","IHOP","Papa Johns","Wok"]
	let compliment= messages[Math.floor(Math.random() * messages.length)];
	alert("You should eat "+ compliment);
}

let genFood = document.querySelector('.restaurants')

genFood.addEventListener('click', choose);