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
    console.log("I have reached here");
    return getCheckedRadio(radioGroup) == correctArray[correctIndex];


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

//variables

let q1LoopsButtons=document.getElementsByClassName("loopsquiz1-sub");  //list of all of the buttons
let q1LoopsButtonsStates=[false,false,false,false,false,false]; //checking whethr the buttons have been clicked or not
let q1LoopscorrectValues=['b',"b","c","b","d","a"];  //list of all the correct values
let q1LoopsAnswerDiv=document.getElementsByClassName("quiz-div");//al the divs that we will have to append the explanations to
let q1LoopsExplanation=["A while loop implements indefinite iteration, where the number of times the loop will be executed is not specified explicitly in advance. (Indeterminate would probably be an apt description of this type of iteration as well, but not the term that is typically used.) <br/>Definite iteration is implemented with the for loop in Python (which is covered in the next tutorial in the series)<br/>Discriminant isn’t even an adjective, much less a description of any type of iteration."];
q1LoopsExplanation.push("All the three are not true about iteration apart from the correct answer");
q1LoopsExplanation.push("IF and ELSE are used to implement iteration<br/>THEN is wrong.");
q1LoopsExplanation.push("enhanced for loops has the signature:<br/>  for num in numbers.");
q1LoopsExplanation.push("A while loop has an extra line where the loop variable is being increment.<br/>The loop variable is incremented in the for loop signaature");
q1LoopsExplanation.push("When you don't know in advance");


//adding the onclick of each button
 for(let i=0;i<q1LoopsButtons.length;i++){
     q1LoopsButtons[i].addEventListener("click",()=>{
         handleQ1Buttons(i);
     });
 }

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