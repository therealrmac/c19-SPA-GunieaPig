const articleSection= document.getElementsByClassName('article-section');
const output= document.getElementById('output-target');
const pageTitle= document.getElementById('page-title');
const input= document.getElementById('keypress-input');
const addButton= document.getElementById('add-color');
const bigButton= document.getElementById('make-large');
const borderButton= document.getElementById('add-border');
const roundButton= document.getElementById('add-rounding');
const victim= document.getElementById('guinea-pig');

for(var i=0;i<articleSection.length; i++){
	articleSection.item(i).addEventListener('click', eventClick);
}
function eventClick(event){
	var eleText= event.target.innerHTML;
	output.innerHTML="You cliked on "+ eleText+ " section";
}
pageTitle.addEventListener('mouseover', function(event){
	output.innerHTML= "You moved your mouse over the header.";
});
pageTitle.addEventListener('mouseout', function(event){
	output.innerHTML= "You left me!";
});
input.addEventListener('keyup', function(event){
	output.innerHTML= event.target.value;
});

addButton.addEventListener('click', () =>{
	victim.classList.toggle('blue');
});
bigButton.addEventListener('click', () =>{
	victim.classList.toggle('larger');
});
borderButton.addEventListener('click', () =>{
	victim.classList.toggle('capture');
});
roundButton.addEventListener('click', () =>{
	victim.classList.toggle('rounded');
});