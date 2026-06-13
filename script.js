
const slider=document.getElementById('slider');
const result=document.getElementById('result');
if(slider){slider.addEventListener('input',()=>{
let v=slider.value;
result.textContent=v<30?'Low Friction':v<70?'Medium Friction':'High Friction';
});}
function checkAnswer(c){document.getElementById('answer').textContent=c?'Correct!':'Wrong!';}
