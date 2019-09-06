
// When the user clicks on div, open the popup
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

function myFunction1() {
  var popup1 = document.getElementById("myPopup1");
  popup1.classList.toggle("show1");
}


<!-- ;
// numberguess is by Lancer - written 4 Jan 1999
// lancer@kp.planet.gen.nz

var guessme=Math.round(Math.random()*(99)+1);
var speech='Guess my number (from 1 to 100)';

function process(mystery) {
var guess=document.forms.guessquiz.guess.value;
var speech='"'+guess+ '" does not make sense to me.';
document.forms.guessquiz.guess.value='';

if (guess==mystery)
{
document.forms.guessquiz.prompt.value='Congratulations! '+mystery+' is correct!';
alert ('Well done - the mystery number is '+mystery+'! \n\nPress this button to reload the page for another game.');
speech='';
document.location=document.location;
}

if (mystery<guess)
{
speech='Less than '+ guess;
}

if (mystery>guess)
{
speech='Greater than '+ guess;
}

if (guess=='')
{
speech='You didn\'t guess anything!'
}

document.forms.guessquiz.prompt.value=speech; document.forms.guessquiz.guess.focus();

}

// end hide -->



function lifetimer(){

        today = new Date()

        BirthDay = new Date(document.live.age.value)

        timeold = (today.getTime() - BirthDay.getTime());

        sectimeold = timeold / 1000;

        secondsold = Math.floor(sectimeold);

        msPerDay = 24 * 60 * 60 * 1000 ;

        timeold = (today.getTime() - BirthDay.getTime());

        e_daysold = timeold / msPerDay;

        daysold = Math.floor(e_daysold);

        e_hrsold = (e_daysold - daysold)*24;

        hrsold = Math.floor(e_hrsold);

        minsold = Math.floor((e_hrsold - hrsold)*60);

        document.live.time1.value = daysold

        document.live.time2.value = hrsold

        document.live.time3.value = minsold

        window.status = "Well at the moment you are " + secondsold + "............ seconds old.";

        timerID = setTimeout("lifetimer()",1000)

}
// -- done hiding from old browsers -->
