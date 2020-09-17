// variables for home index page
let factShow = document.querySelector(".facts");
let factBtn = document.querySelector(".facts-btn");
let factsArr = ["I was a big athlete in highschool and went to college to run!",
"I almost went pro in Overwatch!",
"I've moved a total of 8 times in my lifetime, also lived in 3 different states.",
"I had a chance to be a manager of my own ThunderCloud Subs store",
"I still have yet to break a bone in my body, knock on wood...",
"I have been to a total of 15 states in America",
"I'm double joined in both of my thumbs."]
countArr = 0;

factBtn.addEventListener("click", (event) => {
    event.preventDefault();
    // for (var i = 0; i < factsArr.length; i++) {
    
    if (countArr < factsArr.length) {
      
       let currentFact = document.createElement("li");
       currentFact.className = 'list';

       currentFact.innerHTML = "<p>" + factsArr[countArr] + "</p>";
       factShow.appendChild(currentFact);
       countArr++;
    } 
});
