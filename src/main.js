var q1Div=document.getElementById("q1");
var q1Explanation=document.createElement('p');

let q1FormSubmitButton=document.getElementById("q1submitbut");

let question1=document.getElementsByName("1"); //getting the first question

let score=0;
var questions=[]; //an array of all our questations..the individual questions are an array of the radio buttons.
for (let j = 1; j <= 6; j++) {
 questions.push(document.getElementsByName(j.toString()))
}
var correctAnswers=["a","d","d","b","b",'c'];
function q1FormHandler () {
   for(let i=0;i<questions.length;i++){
    var num=i+1;
    var questnum="q"+num.toString();
    var qDiv=document.getElementById(questnum);
     if(mark(questions[i],i)){
      qDiv.classList.add("correctAnswer");
     }
     else{
      qDiv.classList.add("wrongAnswer");
     }
   }

}

q1Form.addEventListener("click", ($event)=>{
 $event.preventDefault();
 q1FormHandler();
});


//function to return the value of the checked radio group
function getCheckedRadio(radioGroup){
 for(let i=0;i<radioGroup.length;i++){
  if(radioGroup[i].checked)
  {
   return radioGroup[i].value;
  }
 }
}
//function to mark the answers return boolean, whther the question is correct or not
function mark(radioGroup,radioGroupIndex){
   if (getCheckedRadio(radioGroup)==correctAnswers[radioGroupIndex]){
       score=score+1;
       return true;
   }

}

