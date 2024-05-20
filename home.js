// Placeholder for if I get any ideas.
let SplashT = [
  "meti muti goated",
  "Made by @Diddledid on Github",
  "Check out my friend's link! (https://crater.cc)",
  "Is it gae to breathe air? I mean, some air has touched men, and you are possibly inhaling that air." 
]

let SplashI = Math.floor(Math.random() * SplashT.length)
const SplashE = document.getElementById("splash")

function US() {
  SplashI = (SplashI + 1) % SplashT.length
  SplashE.innerText = SplashT[SplashI]
}

SplashE.innerText = SplashT[SplashI]

SplashE.addEventListener("click", US)
