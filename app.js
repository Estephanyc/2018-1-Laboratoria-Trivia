var processName = function()
{
     var userName =  document.getElementById("lname").value;
    document.getElementById('spanName').textContent = 'Bienvenid@, ' + userName;
    document.getElementById('box-name').style.display = 'none';
     document.getElementById('box-answers').style.display = 'inline-block';
     document.getElementById('scoreBoard').style.visibility = 'inherit';
}

 function question() 
 {
 
       
        var answer1 = document.quiz.question1.value;
        if (answer1 == "No")
         {
            document.getElementById("rightAnswersText").innerHTML =
                document.getElementById("rightAnswersText").innerHTML +
                "<div class='answer'>" +
                "<p>No han egresado hombres</p>"
            "</div>";
        } 
        else 
        {
            document.getElementById("wrongAnswersText").innerHTML =
                document.getElementById("wrongAnswersText").innerHTML +
                "<div class='answer'>" +
                "<p>No han egresado hombres</p>"
            "</div>";
        }

        var answer2 = document.quiz.question2.value;
        if (answer2 == "No")
         {
            document.getElementById("rightAnswersText").innerHTML =
                document.getElementById("rightAnswersText").innerHTML +
                "<div class='answer'>" +
                "<p>No hay laboratoria en concepción</p>"
            "</div>";
        }
         else
          {
            document.getElementById("wrongAnswersText").innerHTML =
                document.getElementById("wrongAnswersText").innerHTML +
                "<div class='answer'>" +
                "<p>No hay laboratoria en concepción</p>"
            "</div>";
          }
      }