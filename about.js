console.log("hello world");

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("You have submitted the form!")
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

const picHover = () => {
	// evt.preventDefault();
	const messages = ["You've got a nice bill","Your Quack is Contagious",
	"You're Quacklarious"]
	let compliment= messages[Math.floor(Math.random() * messages.length)];
	alert(compliment);
}

let pic = document.querySelector('#ducky')

pic.addEventListener('mouseover', picHover);