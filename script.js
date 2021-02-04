function calculate() {
	fetch('items.json')
		.then((res) => res.json())
		.then((data) => console.log(data));
	//    (document.body.innerHTML=data[0].text)
}

calculate();
