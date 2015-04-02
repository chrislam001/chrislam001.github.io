//Assign Variables
var skipStory=0;
var skillPoint=25;
var charismaCount = 0;
var healthCount = 0;
var attackCount = 0;
var defenceCount = 0;
var agilityCount = 0;

while(healthCount > 0){//Start
var age = prompt("What's your age");

if ( age < 10 ){ 
	alert("You can't play my game");
}


alert("Welcome to A Journey to Antarctica");
var yesNo = prompt("Do you want to hear the lore about a Canadian Seal-Clubber? YES or NO").toUpperCase();

if (yesNo === "YES") {
    alert("A long time ago, in some maple syrup producing colony, their lived a lonely Canadian Seal-Clubber journeying to Antarctica. 'Today's the Day!' He  reminds himself. 'I will kill all those innocent fat juicy seals!' Together with his old medieval armor and his grand sword (which was made in China). A skill keeper you meets you along the way.");
    skipStory = 1;
} else {
    skipStory = 1;
}

if (skipStory === 1) {
	var name = prompt("What's your name laddy/lady?").toUpperCase();
	var classGame = prompt("Hello, " + name +"I've heard that these lands filled with heroes as well as monsters. There are 5 classes: Red Ranger, Brawler, Theif, Battle Mage and Dragon Knight. What kind of hero are you?").toUpperCase();
	
	if(classGame === "RED RANGER"){
		agility += 3;
		attack += 2;
		health += 4;
		defence += 1;
		charisma += 0;
	}
	else if(classGame === "BATTLE MAGE"){
		agility += 2;
		attack += 1;
		health += 5;
		defence += 2;
		charisma += 0;
	}
	else if(classGame === "DRAGON KNIGHT"){
		agility += 1;
		attack += 3;
		health += 4;
		defence += 1;
		charisma += 1;
	}
	else if(classGame === "BRAWLER"){
		agility += 3;
		attack += 1;
		health += 2;
		defence += 2;
		charisma += 2;
	}
	else if(classGame === "THEIF"){
		agility += 4;
		attack += 2;
		health += 3;
		defence += 1;
		charisma += 0;
	}
	else{
		alert("There's no such class good man. Whatever, you might be a regular hero then.");
		agility ++;
		attack ++;
		health ++;
		defence ++;
		charisma ++;
	}

	
    alert("I'm selling skills right now, you can have " + skillPoint + " skill points for free!");
    //Prompts to add skillpoints CHARISMA
    alert("skillpoints is "+ skillPoint);
    var charismaCount = parseInt( prompt('How many points for CHARISMA', '') );
    while(charismaCount > skillPoint){
    	alert("charisma now is "+ charismaCount);
    	alert("skillpoints is "+ skillPoint);
	    var charismaCount = parseInt( prompt('You should use less than skillPoint', '') );
	    alert("charisma now is "+ charismaCount);
    	alert("skillpoints is "+ skillPoint);
    }
    skillPoint -= charismaCount;


    //Prompts to add skillpoints ATTACK
    alert("skillpoints is "+ skillPoint);
    var attackCount = parseInt( prompt('How many points for ATTACK', '') );
    while(attackCount > skillPoint){
    	alert("attack now is "+ attackCount);
    	alert("skillpoints is "+ skillPoint);
	    var attackCount = parseInt( prompt('You should use less than skillPoint', '') );
	    alert("attack now is "+ attackCount);
    	alert("skillpoints is "+ skillPoint);
    }
    skillPoint -= attackCount;


    //Prompts to add skillpoints DEFENCE
    alert("skillpoints is "+ skillPoint);
    var defenceCount = parseInt( prompt('How many points for DEFENCE', '') );
    while(defenceCount > skillPoint){
    	alert("defence now is "+ defenceCount);
    	alert("skillpoints is "+ skillPoint);
	    var attackCount = parseInt( prompt('You should use less than skillPoint', '') );
	    alert("defence now is "+ defenceCount);
    	alert("skillpoints is "+ skillPoint);
    }
    skillPoint -= defenceCount;

    //Prompts to add skillpoints DEFENCE
    alert("skillpoints is "+ skillPoint);
    var healthCount = parseInt( prompt('How many points for HEALTH', '') );
    while(healthCount > skillPoint){
    	alert("health now is "+ healthCount);
    	alert("skillpoints is "+ skillPoint);
	    var attackCount = parseInt( prompt('You should use less than skillPoint', '') );
	    alert("health now is "+ healthCount);
    	alert("skillpoints is "+ skillPoint);
    }
    skillPoint -= healthCount;

        //Prompts to add skillpoints DEFENCE
    alert("skillpoints is "+ skillPoint);
    var agilityCount = parseInt( prompt('How many points for AGILITY', '') );
    while(agilityCount > skillPoint){
    	alert("agility now is "+ agilityCount);
    	alert("skillpoints is "+ skillPoint);
	    var attackCount = parseInt( prompt('You should use less than skillPoint', '') );
	    alert("agility now is "+ agilityCount);
    	alert("skillpoints is "+ skillPoint);
    }
    skillPoint -= agilityCount;

	alert("You start on your journey to Antarctica for the main event, seal clubbing");
}
var path = prompt("Choose from two paths. Type number 1 or number 2");
switch(path){
  case '1':
   alert("There is a bog on the left side of the road. Shifty folks say it's a common short-cut that they always use in the morning");
   alert("You find yourself in a strange dilemma");
   var choice9 = prompt("FIND a inn to stay in and wait until it's morning (You will need 6 charisma). or TRAVEL under the cover of the night into the bog.").toUpperCase();
    if(choice9 === "FIND" && charismaCount >= 6){
      alert("You find a cozy inn but you will need a charisma level of 6 to stay");
    else{
      alert("you can stay in the inn");
      alert("The inn keeper looks vile and suspicious as he asks you for all your money");
var choice10 = prompt("You GIVE some of your possessions or OBLIGE and give him your possesions or ATTACK him with your weapon (attack has to be at least 8)").toUpperCase();
if (choice10 === "GIVE" && attackCount < 7 && agilityCount < 7){
  alert("You give him some of your possesions");
  alert("But he discovers that you have more possesions, he stares at you and fanaticaly stabs you to death");
  healthCount = 0;
  }
  else{
    alert("You give hime some of your possesions, but during your sleep, he sneaks up to you and tries to assassinate you");
    alert("Luckly with your speed and strength, you kill him!")
    alert("You finish resting in the inn and continue your journey. It's morning now.");
    alert("You need to fight with the folks that tricked you into the bog!");
  }
} 
          
    else if(choice10 === "ATTACK" && attackCount >= 8){
      alert("You get a bow and a stash of arrows! You gain attack and loose defence to use this");
      var randomattackDefence = [1,2];
      attackCount -= randomattackDefence;
      defenceCount -= randomattackDefence;
       alert("You finish resting in the inn and continue your journey. It's morning now.");
      alert("You finish resting in the inn and continue your journey. It's morning now.");
      alert("You need to fight with the folks that tricked you into the bog!");
    }
      else(choice10 === "OBLIGE"){
      var randomdefenceHealth = [1,2,3];
      alert("You loose some defense and health");
      defenceCount -= randomdefenceHealth;
      healthCount -= randomdefenceHealth;
        alert("You finish resting in the inn and continue your journey. It's morning now.");
        alert("You need to fight with the folks that tricked you into the bog!");
    }
    } 
    else if(choice9 === "TRAVEL"){
      alert("You fight with a bog monster");
      var randomDamage = [9,10,11,12];
      var damageDefence = randomDamage*10
      healthCount -= damageDefence/defence
      alert("You now have: " + healthCount);
      }
      else if(healthCount < 1){
      	alert("The monster smashes your head in your helmet. You feel yourself slowly fading.....fading......Game over....You DIE");
        alert("You finish resting in the inn and continue your journey. It's morning now.");
      }
    else {
      alert("Didn't understand your choice, Try Again");
      
      
      }
    }
}
break;
  
  case '2':
	alert("Continue along the stone paved road");
	var choice = prompt("You see a big piece of bread with drinks and seafood around it. You realise that this may be another person's food and think about whether you should eat it (You require 8 agility to steal it). Your grumbling stomach reminds you that you will need to eat soon.? EAT or LEAVE").toUpperCase();
	if(choice==="EAT" && agilityCount >= 8) {
        alert("You enjoy the meal and you are full of strength, you are ready for the day. +5 health. You now have; " + healthCount);	
        healthCount += 5;
        alert("You see the owner of the food come. He wonders where the food went");
    }
    
    var choice3 = prompt("You tell him the TRUTH (You will need 10 charisma). The owner glares at you. or You LIE and say that an animal ate the food. The owner is suspicious at you.").toUpperCase();
    if(choice3==='TRUTH' && charismaCount >= 10){
        alert("The owner says that you can eat more food if you go to his house.");
    }
    else if (choice 3 ==='LIE') {
               alert("After some further questioning, the owner believes in you, he leaves and you continue on your journey.").toUpperCase();
		       alert("Continue on your journey");
		       alert("You feel a loud grumble in your stomach and feel very hungry");
		       alert("You are so hungry that iF you don't eat you are going to die");
		       alert("You see a mushroom and wonder whether it's poisonous or not");
    }
	else {
               alert("Didn't understand your choice, Try Again");
         }
    
   var choice9 = prompt("EAT the mushroom or LEAVE it");
	        if (choice9 === 'EAT'){
		        alert("You eat it and die because the plant was indeed poisonous");
		        healthCount = 0;
            }
               else if(choice9 ==='LEAVE'){
                 alert("You don't eat it and starve to death");
                 healthCount = 0;
               }
               
              
    var choice4 = prompt("You REJECT the offer. or You ACCEPT the invitation and thank the owner for his generosity, althought he asks you to help him bring a stack of bread for him if you want to go to his house. (You require 8 strength for that).").toUpperCase();
              
              if(choice4==='REJECT'){
                 else if (choice4==='ACCEPT' && strengthCount >= 8){
                    var choice5 = prompt ("You love the food but you are SUSPICIOUS at the owner. or You love the food and THANK the owner again for the wonderful meal (You require 2 charisma to do this).");}
                        if(choice5==='THANK' && charismaCount >= 2);
                          alert("The owner wanted to poison you but decided not to at the last momment.");
                          alert("You continue on your journey.+5 health, you now have: " + healthCount);
                          healthCount += 5;
                          alert("You succesfully reach Antarctica to do seal-clubbing");
                        else if(choice5==='SUSPICIOUS')}}}
              var choice6 = prompt("You think he might have poisoned you, you KILL (You require 9 strength and 5 defence to do this) him or You leave and think that the owner is providing you food because of his GENEROSITY(You require 2 charisma).");
                            if(choice6 === 'KILL' && strengthCount === 9 && defenceCount === 5){
                            alert("You succesfully reach Antarctica to go seal-clubbing");
                            else if(choice 6 ==='GENEROSITY');
                             alert("The owner poisons you and you die a horrible death.");
                             healthCount = 0;
                              else{
                              alert("Didn't understand what you typed. Try Again");
                              }}}
                               }
    
	 else if(choice==='LEAVE') {
		alert("You don't eat the meal but see another bypasser enjoy the meal. However, he quickly runs away").toUpperCase();
		alert("Continue on your journey");
		alert("You feel a loud grumble in your stomach and feel very hungry");
		alert("You are so hungry that iF you don't eat you are going to die");
		alert("You see a mushroom and wonder whether it's poisonous or not");
          }
	      }
         else{
         alert("Didn't understand your choice, Try Again");
          }
         var choice8 = prompt("EAT the mushroom or LEAVE it");
	        if (choice8 === 'EAT'){
		    alert("You eat it and die because the plant was indeed poisonous");}
		    healthCount = 0;
               else if(choice8 ==='LEAVE')
                 alert("You don't eat it and starve to death");
             healthCount = 0;
                 }
                 break;
}

