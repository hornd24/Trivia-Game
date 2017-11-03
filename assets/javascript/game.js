var countDown;
var number = 50;
questionsRight = 0

$(document).ready(function () {

});




function run() {
    if (countDown) {
        return;
    }
    countDown = setInterval(hotdog, 1000);
}


function hotdog() {
    number--;
    $("#timer").html('Secounds Remaning: ' + number);
    if (number === 0) {


        stop();


        alert("Time Up!");
    }
}

function stop() {
    clearInterval(countDown);
    countDown = null
}
run();



var correct = 0
var wrong = 0
var q1 = {
    question: 'What is the highest grossing Marvel film in the Marvel Cinematic Universe?',
    possibleAnswers: ['A. Iron Man 3', 'B. Avengers', ' C. Avengers: Age of Ultron', 'D. Guardians of the Galaxy'],

    answer: 'B. Avengers'
};
var q2 = {
    question2: 'What year did the movie Iron Man Debut?',
    possibleAnswers: ['A. 2007', 'B. 2010 ', ' C. 2008', 'D. 2009'],
    answer2: 'C. 2008'
};
var q3 = {
    question3: 'Which actor plays the Falcon in the Marvel Cinematic Universe ?',
    possibleAnswer3: ['A. Terrance Howard', 'B. Anthony Mackie', 'C. Chadwick Boseman', 'D. Don Cheadle'],
    answer3: 'B. Anthony Mackie',
};
var q4 = {
    question4: 'Why does Groot stop dancing when Drax looks at him in Gardians of the Galxay',
    possibleAnswers4: ['A. He Respect Drax, and because Drax and his Wife hated dancing', 'B. Groot dislikes Drax', 'C. Groot likes to be funny', 'D. Groot and Drax hate each other'],
    answer4: 'A. He Respect Drax, and because Drax and his Wife hated dancing',
};

q1.question
q2.question
q3.question
q4.question

console.log(q1.question)

for (i = 0; i < q1.possibleAnswers.length; i++) {
    
    if (q1.possibleAnswers[i] === q1.answer) { }

};
for (i = 0; i < q2.possibleAnswers.length; i++) {
    
    if (q2.possibleAnswers[i] === q2.answer) { }
console.log(q2.answer)
};
console.log(q2.question)
for (i = 0; i < q2.possibleAnswers.length; i++) {
    
    if (q3.possibleAnswers[i] === q3.answer) { }
console.log(q3.answer)
};
for (i = 0; i < q4.possibleAnswers.length; i++) {
    
    if (q4.possibleAnswers[i] === q4.answer) { }
console.log(q4.answer)


// function valueChanged() {
//     if (document.getElementById("possible1").checked == true) {
//         document.getElementById("possible1");
//         document.getElementById("possible2");

//     }
//     else {
//         document.getElementById("possible1");
//         document.getElementById("possible2");
//     }
//     console.log(document.getElementById("possible1"));
//     console.log(document.getElementById("possible2"))
// }