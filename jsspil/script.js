window.addEventListener("load", showTitle);

let points;
let lives;

function showTitle() {
  console.log("showTitle");

  //Skjul alle skærme
  hideAll();
  //Vis aktuel skærm (Titel)
  document.querySelector("#startskaerm").classList.remove("hide");

  document.querySelector("#moent1_container").classList.add("fall");
    document.querySelector("#moent2_container").classList.add("fall");
    document.querySelector("#moent3_container").classList.add("fall");
    document.querySelector("#moent4_container").classList.add("fall");
    document.querySelector("#moent5_container").classList.add("fall");
    document.querySelector("#moent6_container").classList.add("fall");

    //find et tilfældigt tal mellem 1 og 7
    let rand = randomNumber(7);
    //giv elementet "good" den tilfældige position (pos1 - pos7)
    document.querySelector("#moent1_container").classList.add("pos" + rand);
    rand = randomNumber(7);
    document.querySelector("#moent2_container").classList.add("pos" + rand);
    rand = randomNumber(7);
    
    document.querySelector("#moent3_container").classList.add("pos" + rand);
    rand = randomNumber(7);
    document.querySelector("#moent4_container").classList.add("pos" + rand);
    rand = randomNumber(7);
    
    document.querySelector("#moent5_container").classList.add("pos" + rand);
    rand = randomNumber(7);
    document.querySelector("#moent6_container").classList.add("pos" + rand);
    
    rand = randomNumber(4);
    document.querySelector("#moent1_container").classList.add("delay" + rand);
    rand = randomNumber(4);
    document.querySelector("#moent2_container").classList.add("delay" + rand);
    rand = randomNumber(4);
    document.querySelector("#moent3_container").classList.add("delay" + rand);
    rand = randomNumber(4);
    document.querySelector("#moent4_container").classList.add("delay" + rand);
    rand = randomNumber(4);
    document.querySelector("#moent5_container").classList.add("delay" + rand);
    rand = randomNumber(4);
    document.querySelector("#moent6_container").classList.add("delay" + rand);
    

    document.querySelector("#moent1_container").addEventListener("animationiteration", goodResetmoent1);
    document.querySelector("#moent2_container").addEventListener("animationiteration", goodResetmoent2);
    document.querySelector("#moent3_container").addEventListener("animationiteration", goodResetmoent3);
    document.querySelector("#moent4_container").addEventListener("animationiteration", goodResetmoent4);
    document.querySelector("#moent5_container").addEventListener("animationiteration", goodResetmoent5);
    document.querySelector("#moent6_container").addEventListener("animationiteration", goodResetmoent6);
  
  //lyt efter om der bliver klikket på Play knappen
  document.querySelector("#startknap").addEventListener("click", startGame);

  

}

function goodResetmoent1() {
  console.log("goodResetmoent1");
   
     //Fjern de eventlistnere der fører til funktionen
     document.querySelector("#moent1_sprite").removeEventListener("animationend", goodResetmoent1);
     document.querySelector("#moent1_container").removeEventListener("animationiteration", goodResetmoent1);

     //fjern alle klasser fra containeren
     document.querySelector("#moent1_container").classList = "";
   
     //fjern alle klasser fra spriten
     document.querySelector("#moent1_sprite").classList = "";
 
   
     //find et tilfældigt tal mellem 1 og 7
     let rand = randomNumber(7);
     //giv elementet den nye tilfældige position (pos1 - pos7)
     document.querySelector("#moent1_container").classList.add("pos" + rand);
   
   
     //sørg for at klassen fall kan sættes på igen
     document.querySelector("#moent1_container").offsetHeight;
     //sæt klassen fall på igen
     document.querySelector("#moent1_container").classList.add("fall");
   
     //lyt igen efter click og animationiteration
    
     document.querySelector("#moent1_container").addEventListener("animationiteration", goodResetmoent1);

} 
function goodResetmoent2() {
  console.log("goodResetmoent2");
   
     //Fjern de eventlistnere der fører til funktionen
     document.querySelector("#moent2_sprite").removeEventListener("animationend", goodResetmoent2);
     document.querySelector("#moent2_container").removeEventListener("animationiteration", goodResetmoent2);

     //fjern alle klasser fra containeren
     document.querySelector("#moent2_container").classList = "";
   
     //fjern alle klasser fra spriten
     document.querySelector("#moent2_sprite").classList = "";
 
   
     //find et tilfældigt tal mellem 1 og 7
     let rand = randomNumber(7);
     //giv elementet den nye tilfældige position (pos1 - pos7)
     document.querySelector("#moent2_container").classList.add("pos" + rand);
   
   
     //sørg for at klassen fall kan sættes på igen
     document.querySelector("#moent2_container").offsetHeight;
     //sæt klassen fall på igen
     document.querySelector("#moent2_container").classList.add("fall");
   
     //lyt igen efter click og animationiteration
    
     document.querySelector("#moent2_container").addEventListener("animationiteration", goodResetmoent2);

} 
function goodResetmoent3() {
  console.log("goodResetmoent3");
   
     //Fjern de eventlistnere der fører til funktionen
     document.querySelector("#moent3_sprite").removeEventListener("animationend", goodResetmoent3);
     document.querySelector("#moent3_container").removeEventListener("animationiteration", goodResetmoent3);

     //fjern alle klasser fra containeren
     document.querySelector("#moent3_container").classList = "";
   
     //fjern alle klasser fra spriten
     document.querySelector("#moent3_sprite").classList = "";
 
   
     //find et tilfældigt tal mellem 1 og 7
     let rand = randomNumber(7);
     //giv elementet den nye tilfældige position (pos1 - pos7)
     document.querySelector("#moent3_container").classList.add("pos" + rand);
   
   
     //sørg for at klassen fall kan sættes på igen
     document.querySelector("#moent3_container").offsetHeight;
     //sæt klassen fall på igen
     document.querySelector("#moent3_container").classList.add("fall");
   
     //lyt igen efter click og animationiteration
    
     document.querySelector("#moent3_container").addEventListener("animationiteration", goodResetmoent3);

} 
function goodResetmoent4() {
  console.log("goodResetmoent4");
   
     //Fjern de eventlistnere der fører til funktionen
     document.querySelector("#moent4_sprite").removeEventListener("animationend", goodResetmoent4);
     document.querySelector("#moent4_container").removeEventListener("animationiteration", goodResetmoent4);

     //fjern alle klasser fra containeren
     document.querySelector("#moent4_container").classList = "";
   
     //fjern alle klasser fra spriten
     document.querySelector("#moent4_sprite").classList = "";
 
   
     //find et tilfældigt tal mellem 1 og 7
     let rand = randomNumber(7);
     //giv elementet den nye tilfældige position (pos1 - pos7)
     document.querySelector("#moent4_container").classList.add("pos" + rand);
   
   
     //sørg for at klassen fall kan sættes på igen
     document.querySelector("#moent4_container").offsetHeight;
     //sæt klassen fall på igen
     document.querySelector("#moent4_container").classList.add("fall");
   
     //lyt igen efter click og animationiteration
    
     document.querySelector("#moent4_container").addEventListener("animationiteration", goodResetmoent4);

} 
function goodResetmoent5() {
  console.log("goodResetmoent5");
   
     //Fjern de eventlistnere der fører til funktionen
     document.querySelector("#moent5_sprite").removeEventListener("animationend", goodResetmoent5);
     document.querySelector("#moent5_container").removeEventListener("animationiteration", goodResetmoent5);

     //fjern alle klasser fra containeren
     document.querySelector("#moent5_container").classList = "";
   
     //fjern alle klasser fra spriten
     document.querySelector("#moent5_sprite").classList = "";
 
   
     //find et tilfældigt tal mellem 1 og 7
     let rand = randomNumber(7);
     //giv elementet den nye tilfældige position (pos1 - pos7)
     document.querySelector("#moent5_container").classList.add("pos" + rand);
   
   
     //sørg for at klassen fall kan sættes på igen
     document.querySelector("#moent5_container").offsetHeight;
     //sæt klassen fall på igen
     document.querySelector("#moent5_container").classList.add("fall");
   
     //lyt igen efter click og animationiteration
    
     document.querySelector("#moent5_container").addEventListener("animationiteration", goodResetmoent5);

} 
function goodResetmoent6() {
  console.log("goodResetmoent6");
   
     //Fjern de eventlistnere der fører til funktionen
     document.querySelector("#moent6_sprite").removeEventListener("animationend", goodResetmoent6);
     document.querySelector("#moent6_container").removeEventListener("animationiteration", goodResetmoent6);

     //fjern alle klasser fra containeren
     document.querySelector("#moent6_container").classList = "";
   
     //fjern alle klasser fra spriten
     document.querySelector("#moent6_sprite").classList = "";
 
   
     //find et tilfældigt tal mellem 1 og 7
     let rand = randomNumber(7);
     //giv elementet den nye tilfældige position (pos1 - pos7)
     document.querySelector("#moent6_container").classList.add("pos" + rand);
   
   
     //sørg for at klassen fall kan sættes på igen
     document.querySelector("#moent6_container").offsetHeight;
     //sæt klassen fall på igen
     document.querySelector("#moent6_container").classList.add("fall");
   
     //lyt igen efter click og animationiteration
    
     document.querySelector("#moent6_container").addEventListener("animationiteration", goodResetmoent6);

} 

function startGame() {
  console.log("startGame");

  hideAll();
  document.querySelector("#spilskaerm").classList.remove("hide");

    //Nulstil Point og liv
    points = 0;
    lives = 3;

    //Udskriv point og liv på skærmen
    updatePoint();
    updateLives();

    //Start timeranimationen
    document.querySelector("#time_sprite").classList.add("skrump");
    //lyt efter om timer-animationen er færdig (om tiden er gået)
    document.querySelector("#time_sprite").addEventListener("animationend", endGame);

    //Start fall animation på de to elementer
    document.querySelector("#moent_container").classList.add("fall");
    document.querySelector("#banan_container").classList.add("fall");
    document.querySelector("#chokolade_container").classList.add("fall");

    //find et tilfældigt tal mellem 1 og 7
    let rand = randomNumber(7);
    //giv elementet "good" den tilfældige position (pos1 - pos7)
    document.querySelector("#moent_container").classList.add("pos" + rand);
    rand = randomNumber(7);
    document.querySelector("#banan_container").classList.add("pos" + rand);
    //find et nyt tilfældigt tal mellem 1 og 7
    rand = randomNumber(7);
    //giv elementet "bad# den tilfældige position (pos1 - pos7)
    document.querySelector("#chokolade_container").classList.add("pos" + rand);

    //giv de to elementer en random delay klasse (delay1 - delay4)
    //find et tilfældigt tal mellem 1 og 4
    
    rand = randomNumber(4);
    document.querySelector("#moent_container").classList.add("delay" + rand);
    rand = randomNumber(4);
    document.querySelector("#banan_container").classList.add("delay" + rand);
    //find et tilfældigt tal mellem 1 og 4
    rand = randomNumber(4);
    document.querySelector("#chokolade_container").classList.add("delay" + rand);

    //lyt efter om der bliver klikket på good elementet
    document.querySelector("#moent_container").addEventListener("mousedown", goodClickmoent);
    document.querySelector("#banan_container").addEventListener("mousedown", goodClickbanan);
    //lyt efter om der bliver klikket på bad elementet
    document.querySelector("#chokolade_container").addEventListener("mousedown", badClick);

    //lyt efter om faldeanimationen på ""good" er færdig (om den har nået bunden)
    document.querySelector("#moent_container").addEventListener("animationiteration", goodResetmoent);
    document.querySelector("#banan_container").addEventListener("animationiteration", goodResetbanan);
    //lyt efter om faldeanimationen på "bad" er færdig (om den har nået bunden)
    document.querySelector("#chokolade_container").addEventListener("animationiteration", badReset);
}
//moent goodclick
function goodClickmoent() {
      console.log("goodClickmoent");
    
      //fjern eventlistneren for mousedown så man ikke kan klikke flere gange
      document.querySelector("#moent_container").removeEventListener("mousedown", goodClickmoent);
    
      
      addPoint();
      addPoint();
    
      updatePoint();
    
      //stop containeren (freeze)
      document.querySelector("#moent_container").classList.add("freeze");
      
      //få spriten til at forsvinde (fade)
      document.querySelector("#moent_sprite").classList.add("spin");
      
    
      //lyt efter om fade-animationen på spriten er færdig
      document.querySelector("#moent_sprite").addEventListener("animationend", goodResetmoent);
}
//banan goodclick
function goodClickbanan() {
  console.log("goodClickbanan");

  //fjern eventlistneren for mousedown så man ikke kan klikke flere gange

  document.querySelector("#banan_container").removeEventListener("mousedown", goodClickbanan);

  
  addPoint();

  updatePoint();

  //stop containeren (freeze)
  document.querySelector("#banan_container").classList.add("freeze");
  //få spriten til at forsvinde (fade)

  document.querySelector("#banan_sprite").classList.add("spin");

  //lyt efter om fade-animationen på spriten er færdig
  
  document.querySelector("#banan_sprite").addEventListener("animationend", goodResetbanan);
}
//moent goodreset
function goodResetmoent() {
   console.log("goodResetmoent");
    
      //Fjern de eventlistnere der fører til funktionen
      document.querySelector("#moent_sprite").removeEventListener("animationend", goodResetmoent);
      document.querySelector("#moent_container").removeEventListener("animationiteration", goodResetmoent);

      //fjern alle klasser fra containeren
      document.querySelector("#moent_container").classList = "";
    
      //fjern alle klasser fra spriten
      document.querySelector("#moent_sprite").classList = "";
  
    
      //find et tilfældigt tal mellem 1 og 7
      let rand = randomNumber(7);
      //giv elementet den nye tilfældige position (pos1 - pos7)
      document.querySelector("#moent_container").classList.add("pos" + rand);
    
    
      //sørg for at klassen fall kan sættes på igen
      document.querySelector("#moent_container").offsetHeight;
      //sæt klassen fall på igen
      document.querySelector("#moent_container").classList.add("fall");
    
      //lyt igen efter click og animationiteration
      document.querySelector("#moent_container").addEventListener("mousedown", goodClickmoent);
      document.querySelector("#moent_container").addEventListener("animationiteration", goodResetmoent);

} 
//banan goodreset
function goodResetbanan() {
  console.log("goodReset");
   
     //Fjern de eventlistnere der fører til funktionen
  
     document.querySelector("#banan_sprite").removeEventListener("animationend", goodResetbanan);
     document.querySelector("#banan_container").removeEventListener("animationiteration", goodResetbanan);
   
     //fjern alle klasser fra containeren
     document.querySelector("#banan_container").classList = "";
     //fjern alle klasser fra spriten
     document.querySelector("#banan_sprite").classList = "";
   
     //find et tilfældigt tal mellem 1 og 7
     let rand = randomNumber(7);
     //giv elementet den nye tilfældige position (pos1 - pos7)
   
     document.querySelector("#banan_container").classList.add("pos" + rand);
   
     //sørg for at klassen fall kan sættes på igen
     document.querySelector("#banan_container").offsetHeight;
     //sæt klassen fall på igen
     document.querySelector("#banan_container").classList.add("fall");
   
     //lyt igen efter click og animationiteration

     document.querySelector("#banan_container").addEventListener("mousedown", goodClickbanan);
     document.querySelector("#banan_container").addEventListener("animationiteration", goodResetbanan);
} 
    
function badClick() {
      console.log("badClick");
      //fjern eventlistneren for mousedown så man ikke kan klikke flere gange
      document.querySelector("#chokolade_container").removeEventListener("mousedown", badClick);
    

    
      //tjek om der er flere liv tilbage, og hvis der ikke er, så gå til endGame
      if (lives <= 1) {
        endGame();
      } else {
        
        subtractLives();
        
        updateLives();
    
      
      //stop containeren (freeze)
      document.querySelector("#chokolade_container").classList.add("freeze");
      //få spriten til at forsvinde (spin)
      document.querySelector("#chokolade_sprite").classList.add("spin");
    
      //lyt efter om spin-animationen på spriten er færdig
      document.querySelector("#chokolade_sprite").addEventListener("animationend", badReset);}

}
    
function badReset() {
      console.log("badReset");
    
      //Fjern de eventlistnere der fører til funktionen
      document.querySelector("#chokolade_sprite").removeEventListener("animationend", badReset);
      document.querySelector("#chokolade_container").removeEventListener("animationiteration", badReset);
    
      //fjern alle klasser fra containeren
      document.querySelector("#chokolade_container").classList = "";
      //fjern alle klasser fra containeren
      document.querySelector("#chokolade_sprite").classList = "";
    
      //find et tilfældigt tal mellem 1 og 7
      let rand = randomNumber(7);
      //giv elementet den nye tilfældige position (pos1 - pos7)
      document.querySelector("#chokolade_container").classList.add("pos" + rand);
    
      //sørg for at klassen fall kan sættes på igen
      document.querySelector("#chokolade_container").offsetHeight;
      //sæt klassen fall på igen
      document.querySelector("#chokolade_container").classList.add("fall");
    
      //sætter eventlistenerne på igen for click og animationiteration
      document.querySelector("#chokolade_container").addEventListener("mousedown", badClick);
      document.querySelector("#chokolade_container").addEventListener("animationiteration", badReset);
}
    
function endGame() {
      
      console.log("endGame");
      // fjern timer animation (så den kan sættes på igen)
      document.querySelector("#time_sprite").classList.remove("skrump");
      document.querySelector("#time_sprite").removeEventListener("animationend", endGame);
      // stop alle animationer
      stopAll();
      // find ud af om vi har vundet eller tabt
      if (lives <= 0) {
        gameOver();
      } else if (points > 25) {
        levelComplete();
      } else {
        gameOver();
      }
      // find ud af om vi har vundet eller tabt
}
    
function gameOver() {
      console.log("gameOver");
     
      hideAll();
      //Vis aktuel skærm (Titel)
      document.querySelector("#slutskaermkomigen").classList.remove("hide");
      //lyt efter om der bliver klikket på Play knappen
      document.querySelector("#spiligen2").addEventListener("click", startGame);
}
    
function levelComplete() {
      console.log("levelComplete");

      hideAll();
      //Vis aktuel skærm (Titel)
      document.querySelector("#slutskaermgod").classList.remove("hide");
      //lyt efter om der bliver klikket på Play knappen
      document.querySelector("#spiligen").addEventListener("click", startGame);
      //skjul alle skærme
      //vis levelcomplete skærmen
   //lyt efter om der bliver klikket på spil-igen knappen
}

// HJÆLPEFUNKTIONER

// lægger et point til
function addPoint() {
  points++;
  // Kan også skrives:
  // points = points + 1;
}
// udskriver point på siden
function updatePoint() {
  document.querySelector("#myPoints").textContent = points;
}
// trækker et liv fra
function subtractLives() {
  lives = lives -1;
  
}
// udskriver liv på siden
function updateLives() {
  document.querySelector("#myLives").textContent = lives;
}
// returnerer et random tal mellem 1 og rand
function randomNumber(rand) {
  return Math.floor(Math.random() * rand) + 1;
}
// skjuler skærme
function hideAll() {
  document.querySelector("#startskaerm").classList.add("hide");
  document.querySelector("#spilskaerm").classList.add("hide");
  document.querySelector("#slutskaermgod").classList.add("hide");
  document.querySelector("#slutskaermkomigen").classList.add("hide");
}
// stopper animationer og eventlistnere
function stopAll() {
  document.querySelector("#moent_container").classList = "";
  document.querySelector("#banan_container").classList = "";
  document.querySelector("#chokolade_container").classList = "";

  document.querySelector("#moent_sprite").classList = "";
  document.querySelector("#banan_sprite").classList = "";
  document.querySelector("#chokolade_sprite").classList = "";

  document.querySelector("#moent_container").removeEventListener("mousedown", goodClickmoent);
  document.querySelector("#banan_container").removeEventListener("mousedown", goodClickbanan);
  document.querySelector("#chokolade_container").removeEventListener("mousedown", badClick);

  document.querySelector("#moent_sprite").removeEventListener("animationend", goodResetmoent);
  document.querySelector("#banan_sprite").removeEventListener("animationend", goodResetbanan);
  document.querySelector("#chokolade_sprite").removeEventListener("animationend", badReset);

  document.querySelector("#moent_container").removeEventListener("animationiteration", goodResetmoent);
  document.querySelector("#banan_container").removeEventListener("animationiteration", goodResetbanan);
  document.querySelector("#chokolade_container").removeEventListener("animationiteration", badReset);
}
