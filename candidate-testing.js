const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = '';

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //

let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = '';
let questions = [
  '1) Who was the first American woman in space? ', 
  '2) True or False: 5 kilometer === 5000 meters? ', 
  '3) (5+3)/2*10 = ? ', 
  '4) Given the array [8, "Orbit", "Trajectory", 45,], what entry is at index 2? ', 
  '5) What is the minimum crew size for the ISS? '];
let correctAnswers = [
  'Sally Ride', 
  'true', 
  '40', 
  'Trajectory', 
  '3'];
let candidateAnswers = []; 

function askForName() { 
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Please enter your name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

//   let candidateAnswer = input.question(question); 
//   if (correctAnswer === candidateAnswer) {
//       console.log("Your answer is correct.");
//   } else {
//     console.log("Your answer is incorrect.");
// }
let questArr = "";
  for (let i = 0; i < questions.length; i++) {
    questArr = input.question(questions[i]);
    candidateAnswers.push(questArr);
  }
}

function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

 let grade = 0;
 let numCorrectAns = 0
   for (let i = 0; i < questions.length; i++) {
   
    if (candidateAnswers[i].toUpperCase() === correctAnswers[i].toUpperCase()) {    
      
      numCorrectAns += 1; 
      }
      
      grade = ((numCorrectAns / questions.length) * 100);
    // }
    }
    console.log('\n')
console.log("Candidate Name: " + candidateName);
for (let i = 0; i < questions.length; i++) {
  console.log(questions[i]);
  console.log("Your Answer: " + candidateAnswers[i]);
  console.log("Correct Answer: "+ correctAnswers[i] + '\n'); }
console.log(`>>> Overall Grade: ${grade} (${numCorrectAns} of ${questions.length} responses correct) <<<`);
if (grade >= 80){
  console.log(">>> Status: PASSED <<<")   
} else {
  console.log(">>> Status: FAILED<<<")
}
  return grade;
}


function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}
// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};