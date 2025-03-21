
/*
async function regis(){
    //const response = fetch('localhost:8081/patient', method:'POST')
    document.getElementById("form1").innerHTML = "<p>Thank you for registering. To log in now, <br> <a href='patientlogin.html' target='_self'>Click Here</a></p>";
}
*/

//Function to switch between tabs
/*
function tabswitch(id) {
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tab");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    
    document.getElementById(id).style.display = "block";
  }

  document.getElementById('home').click() */

const urlweather = 'http://worldtimeapi.org/api/timezone/America/New_York'
const url = "https://catfact.ninja/fact";

console.log(fetch(urlweather))
//getfact()