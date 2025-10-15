//your code here!
const list = document.getElementById("infi-list");

let count = 0;

function addItems(n) {
	for(let i=0;i<n; i++){
		const li = document.createElement("li");
		li.textContent = `Item ${++count}`;
		list.appendChild(li);
	}
}

addItems(10);

window.addEventListener("scroll", ()=>{
	if(window.innerHeight  + window.scrolly >= document.body.offsetHeight){
		addItems(2);
	}
})