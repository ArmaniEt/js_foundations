const question = () => {
	answer = prompt("У квадратного стола отпилили один угол, сколько теперь у него углов?");
	if (answer == 5 || answer.toLowerCase() === 'пять') {
		alert('Ответ верный');
	} 
	else {
		alert('Ответ неверный');
	}
}

question();