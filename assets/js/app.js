const heuresId = document.querySelector("#heuresId");
const minutesId = document.querySelector("#minutesId");
const secondesId = document.querySelector("#secondesId");
const msecondesId = document.querySelector("#msecondesId");
const startId = document.querySelector("#startId");
const stopId = document.querySelector("#stopId");
const resetId = document.querySelector("#resetId");

let timerId; //stoker l'Id du timer
let heures = 0;
let minutes = 0;
let secondes = 0;
let msecondes = 0;

//fonction pour afficher 2 chiffres lorsqu'on a 1 seul chiffre
function formatNumber(nbr){
    return nbr.toString().padStart(2, "0");
}
//console.log(formatNumber(2)); 

/**
 * declenchement de l'elevenement de demarrage
 */
startId.addEventListener("click", startChrono);
function startChrono(){
    timerId=setInterval(() => {
        heuresId.textContent =  formatNumber(heures);
        minutesId.textContent = formatNumber(minutes);
        secondesId.textContent = formatNumber(secondes);
        msecondesId.textContent = formatNumber(msecondes);

        // logique du traitement
     //traitement de msecondes et de secondes
        msecondes +=1;
        if (msecondes >= 10) {
            secondes+=1;
            msecondes=0;
        }
     //traitement de secondes et de minutes
        if (secondes>=60) {
                minutes+=1;
                secondes=0;
        }
     //traitement de minutes et de heure
        if (minutes>=60) {
                hours+=1;
                minutes=0;
        }
     
    }, 100);

    //desactivation du bouton start en ajoutant l'attribut diseabled
    startId.setAttribute('disabled', 'true');
    
}

/**
 * declenchement de l'elevenement de stop
 */
stopId.addEventListener("click", stopChrono);
function stopChrono() {
    // arrêter le timer
    clearInterval(timerId);
    //reactivation du bouton  start en supprimant l'attribut disabled 
    stopId.removeAttribute('disabled');
    
}

// declenchement de l'evenement reset
resetId.addEventListener("click", resetChrono);
function resetChrono(){
   //remettre a zero les variables de temps
    heures = 0;
    minutes = 0;
    secondes = 0;
    msecondes = 0;

    clearInterval(timerId);

    //affichage du chrono
    heuresId.textContent = "00";
    minutesId.textContent = "00";
    secondesId.textContent = "00";
    msecondesId.textContent = "00";

    //reactivation du bouton start en supprimant  l'attribut disabled 
    startId.removeAttribute('disabled');
}
