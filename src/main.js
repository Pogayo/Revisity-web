
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
     if(mark1(questions[i],i,correctAnswers)){
      qDiv.classList.add("correctAnswer");
      score=score+1;

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

// const q1Form = document.getElementById("q1Form");
let formSubmitCount=0;  //will help to check if somebody is resubmiting.
// q1Form.addEventListener("submit", ($event)=>{
//  $event.preventDefault();

// });

function fnc(){
   //  $event.preventDefault();
   if(formSubmitCount==1){
      let action=confirm("You have already submitted the form. Do you want to reset? ")
      if(action){
       window.location.reload()
      }
     }
     formSubmitCount=1;
     q1FormHandler();
}


//function to mark the answers return boolean, whether the question is correct or not
function mark1(radioGroup,correctIndex,correctArray){
   if (getCheckedRadio(radioGroup)==correctAnswers[correctIndex]){

       return true;
   }

}
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
function mark(radioGroup,correctIndex,correctArray){
   return getCheckedRadio(radioGroup) == correctArray[correctIndex];


}
//quiz 2
//variables

let q1LoopsButtons=document.getElementsByClassName("loopsquiz1-sub");  //list of all of the buttons
let q1LoopsButtonsStates=[false,false,false,false,false,false]; //checking whethr the buttons have been clicked or not
let q1LoopscorrectValues=['b',"b","c","b","d","a"];  //list of all the correct values
let q1LoopsAnswerDiv=document.getElementsByClassName("quiz-div");//al the divs that we will have to append the explanations to
let q1LoopsExplanation=["A while loop implements indefinite iteration, where the number of times the loop will be executed is not specified explicitly in advance. (Indeterminate would probably be an apt description of this type of iteration as well, but not the term that is typically used.) <br/>Definite iteration is implemented with the for loop in Python (which is covered in the next tutorial in the series)<br/>Discriminant isn’t even an adjective, much less a description of any type of iteration."];
q1LoopsExplanation.push("All the three are not true about iteration apart from the correct answer");
q1LoopsExplanation.push("IF and ELSE are used to implement selection/conditions<br/>THEN is wrong.");
q1LoopsExplanation.push("enhanced for loops has the signature:<br/>  for num in numbers.");
q1LoopsExplanation.push("A while loop has an extra line where the loop variable is being increment.<br/>The loop variable is incremented in the for loop signaature");
q1LoopsExplanation.push("When you don't know in advance");

function handleQ1Buttons(index){
   if(!(q1LoopsButtonsStates[index])){ //if the button has not been clicked; proceed
       let name=(index+1).toString()+ "Loops-quiz1";

       let radioGroup=document.getElementsByName(name);  //getting the radioGroup
       if(mark(radioGroup,index,q1LoopscorrectValues)){  //if the answer is correct
           //Making the div to be green
           q1LoopsAnswerDiv[index].classList.add("correctAnswer");
           q1LoopsAnswerDiv[index].appendChild(addCongratulations());
       }
       else{  //if the answer is wrong
           q1LoopsAnswerDiv[index].classList.add("wrongAnswer");
           q1LoopsAnswerDiv[index].appendChild(addSorry());
           createExplanationNode( q1LoopsExplanation,index,q1LoopsAnswerDiv[index],q1LoopscorrectValues[index]);//adding the explanation

       }

       q1LoopsButtonsStates[index]=true;
   }else{alert("You already attempted this quiz. Reload to restart");}

}


//quiz 3
let scoreStrings=0
var explanationsStrings=["The right answer is len()"];
explanationsStrings.push("Indexes start from the 0. They count till the length of the string -1");
explanationsStrings.push("<p>It raises an exception</p>The ord() function returns the integer value for a given character. But you can only specify a single character (a string of length 1)");
explanationsStrings.push("TypeError: Strings are immutable in python");
explanationsStrings.push("The last 's' is at index 6.rfind() method returns the highest index of the substring if found in given string. If not found then it returns -1. Parameters : sub : It's the substring which needs to be searched in the given string.");
explanationsStrings.push("The two arguments are concatenated to one string without a space between them.");


var correcStrings=["len()",1,"c",'d','b','c'];  //variable that holds correct answers

const q1FormStrings = document.getElementById("q1FormStrings");
let formSubmitCountStrings=0;  //will help to check if somebody is resubmiting.

  function quiz3(){
   if(formSubmitCountStrings==1){
      let action=confirm("You have already submitted the form. Do you want to reset? ")
      if(action){
       window.location.reload()
      }
     }else{
     formSubmitCountStrings=1;
     q1FormHandlerStrings();}
    
}
function q1FormHandlerStrings(){
   var answerDiv1=["q1s","q2s","q3s","q4s","q5s","q6s"];
   var answerDiv=[];
   for (let i=0;i<answerDiv1.length;i++){
        
          answerDiv.push(document.getElementById(answerDiv1[i]));
   }
   q1=document.getElementById("1s");
   q2=document.getElementById("2s");
   q3=document.getElementById("q3Select");

   //name
   let values=[q1.value,q2.value,q3.value];

   for(let i=4;i<=6;i++){
      let group=document.getElementsByName(i+"");
      for(j=0;j<group.length;j++){
         if(group[j].checked){
           values.push(group[j].value);
           break;
         }
      }
   }

   for(let k=0;k<6;k++){
      markStrings(values[k],k,answerDiv)
   }
   let scoreParagraph=document.createElement("h2");
     scoreParagraph.innerHTML="Score: "+ scoreStrings+"/6";
     if(progressDiv.childElementCount==1){
     progressDiv.appendChild(scoreParagraph);}

     document.getElementById("progress-container").style.display="none";
     window.scrollTo(0, 0);
  
}
function markStrings(userAnswer, index,answerDiv){

   if (userAnswer==correcStrings[index]){
      answerDiv[index].classList.add("correctAnswer");
      answerDiv[index].appendChild(addCongratulations());
      scoreStrings++;

   }
   else{
      answerDiv[index].classList.add("wrongAnswer");
      answerDiv[index].appendChild(addSorry());
      createExplanationNode( explanationsStrings,index,answerDiv[index],correcStrings[index]);//adding the explanation


      
   }
   
}


function addCongratulations(){  //returning a congratulatory  message
   let message =document.createElement("h3");
   message.innerHTML="Congratulations! You got it right!";
   message.classList.add("congratulate");
   return message;
}
function addSorry(){//returning a sorry message
   let message =document.createElement("h3");
   message.innerHTML="Sorry! You missed it!";
   message.classList.add("uncongratulate");
   return message;
}

function createExplanationNode(explanationArray,explanationIndex,answerDiv,correctValue){ //create and add to the dom the explanation
   let eParagraph=document.createElement("p");
   eParagraph.classList.add("codesnippet");
   let answer=document.createElement("h4");
   answer.innerHTML="Correct answer is : "+correctValue;
   eParagraph.innerHTML=explanationArray[explanationIndex];
   answerDiv.appendChild(answer);
   answerDiv.appendChild(eParagraph);
}

//script for the question..on submit
let contactForm=document.getElementById("contact-form");
  console.log(contactForm)
console.log("I have reached here 0")
function contactFormHandler($event) {

   let  messageDiv=document.getElementById("message");
    if(messageDiv.childElementCount==0){
        messageDiv.innerHTML="Thank you for your inquiry<br/>You  will be contacted within three working days.";
        messageDiv.style.padding="20px";
        messageDiv.classList.add("correctAnswer","center-text")
    }
    return false;
}

contactForm.addEventListener("submit",($event)=>{
    console.log("I have reached here 1")
      $event.preventDefault();
      contactFormHandler();
    contactForm.reset();
  });