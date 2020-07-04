const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
//document.getElementById helps to access the elsemnt with the id name and thereafter modify it
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
//The addEventListener() method attaches an event handler to the specified element.
//element.addEventListener(event, function, useCapture)
btn.addEventListener('click', function(){
    //get random number betweek 0 and 3 
    const randomnumber = getrandomnum();
    document.body.style.backgroundColor = colors[randomnumber];
    //The textContent property sets or returns the text content of the specified node, and all its descendants.
    color.textContent = colors[randomnumber];
});
function getrandomnum(){
   return Math.floor(Math.random() * colors.length);
}