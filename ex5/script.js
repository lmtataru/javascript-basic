function myFunction() {
   var exam_note = parseFloat(prompt("Insert the exam note:"));

   if (isNaN(exam_note)) {
        alert("Insert a number");
   } else if (exam_note >= 0 && exam_note < 5) {
        alert("Ouch you failed the exam with: " + exam_note);
   } else if (exam_note <= 10) {
        alert("Yey, you passed the exam with: " + exam_note);
   } else {
        alert("Insert your correct note!");
   }
}

        