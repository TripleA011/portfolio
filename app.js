const en_array = [
  "About",
  "Projects",
  "Skills",
  "Contact",
  "I'm Alaa Abou Arraj",
  "a Software developer",
  "These are some of my projects",
  "My Skills",
  "Let's work together...",
  "How do you take your coffee?",
];

const ar_array = [
  "الرئيسية",
  "المشاريع",
  "المهارات",
  "تواصل",
  "علاء أبو عراج",
  "مطور برامج",
  "هذه بعض مشاريعي",
  "مهاراتي",
  "...دعنا نعمل سويةً",
  "كيف تشرب قهوتك؟",
];

const links = [
  "https://paper-money-invest-app.netlify.app",
  "https://paper-money-invest-app.netlify.app",
];

var en = document.getElementById("en"),
  ar = document.getElementById("ar"),
  lang = document.getElementsByClassName("langu"),
  rotat = document.getElementsByClassName("rotate");

en.addEventListener("click", function () {
  change_txt(en_array, "0");
});

ar.addEventListener("click", function () {
  change_txt(ar_array, "180");
  return;
});

function change_txt(arr, deg) {
  for (let i in lang) {
    lang[i].textContent = arr[i];
  }
  for (let i in rotat) {
    rotate(rotat[i], deg);
  }
  return;
}

function rotate(x, deg) {
  x.style.transform = `rotateY(${deg}deg)`;
  return;
}

function wakeupTheServer(linksArr) {
  for (let i in linksArr) {
    fetch(linksArr[i], { mode: "no-cors" }).then((data) =>
      console.log(data, "called")
    );
  }
  return;
}

wakeupTheServer(links);
console.log("server is called");
