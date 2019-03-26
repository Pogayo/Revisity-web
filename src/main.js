
var q1Explanation=document.createElement('p');

let q1FormSubmitButton=document.getElementById("q1submitbut");
const progressDiv=document.getElementById("progress"); //will be used later to display the score


let score=0;
var questions=[]; //an array of all our questions..the individual questions are an array of the radio buttons.
for (let j = 1; j <= 6; j++) {
 questions.push(document.getElementsByName(j.toString()))
}
var correctAnswers=["a","d","d","b","b",'c'];

function q1FormHandler () {
   for(let i=0;i<questions.length;i++){
    var num=i+1;
    var questnum="q"+num.toString();
    var qDiv=document.getElementById(questnum);
    var correctPrefix="Correct Answer: ";
    var correctNode=document.createElement("p");
     if(mark(questions[i],i)){
      qDiv.classList.add("correctAnswer");

     }
     else{
      qDiv.classList.add("wrongAnswer");
     }
     correctNode.innerHTML=correctPrefix+correctAnswers[i]+" (Label the answers a,b c,d inorder of their appearance)";
     qDiv.appendChild(correctNode);
   }
   let scoreParagraph=document.createElement("h2");
     scoreParagraph.innerHTML="Score: "+ score+"/6";
     if(progressDiv.childElementCount==1){
     progressDiv.appendChild(scoreParagraph);}

     document.getElementById("progress-container").style.display="none";

}

const q1Form = document.getElementById("q1Form");
let formSubmitCount=0;  //will help to check if somebody is resubmiting.
q1Form.addEventListener("submit", ($event)=>{
 $event.preventDefault();
 if(formSubmitCount==1){
  let action=confirm("You have already submitted the form. Do you want to reset? ")
  if(action){
   window.location.reload()
  }
 }
 formSubmitCount=1;
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
//function to mark the answers return boolean, whether the question is correct or not
function mark(radioGroup,radioGroupIndex){
   if (getCheckedRadio(radioGroup)==correctAnswers[radioGroupIndex]){
       score=score+1;
       return true;
   }

}

//codes specific for quiz1 loops
let correctAnswersQ1Loops=["b"]
let explanationsQ1Loops=["A while loop implements indefinite iteration, where the number of times the loop will be executed is not specified explicitly in advance. (Indeterminate would probably be an apt description of this type of iteration as well, but not the term that is typically used.)\n" +
"\n" +
"Definite iteration is implemented with the for loop in Python (which is covered in the next tutorial in the series).\n" +
"\n" +
"Discriminant isn’t even an adjective, much less a description of any type of iteration.\n" +
"\n" +
"All right, that was easy. We’re just getting warmed up …"]

