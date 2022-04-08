let punkimage = document.getElementById("mainimage");

let punkname = document.getElementById("punkname");

let punkid = document.getElementById("punkindex");

let psym = document.getElementsByClassName("symbol");

let ins = document.getElementById("insta");

let price = document.getElementById("num");

function punk1() {
  punkimage.src = "assets/punks/5.jpg";
  punkname.innerText = "Bandana Punk";
  punkid.innerText = "#0";
  psym[0].style.backgroundColor = " rgb(255, 1, 43)";
  ins.style.color = " rgb(255, 1, 43)";
  price.innerText = "8";
}

function punk2() {
  punkimage.src = "assets/punks/1.jpg";
  punkname.innerText = "Cigar hat Punk";
  punkid.innerText = "#8";
  psym[0].style.backgroundColor = " #66cd70";
  ins.style.color = "#66cd70";
  price.innerText = "9";
}

function punk3() {
  punkimage.src = "assets/punks/3.jpg";
  punkname.innerText = "Pirate King Punk";
  punkid.innerText = "#2";
  psym[0].style.backgroundColor = " #aed580";
  ins.style.color = "#aed580";
  price.innerText = "37";
}

function punk4() {
  punkimage.src = "assets/punks/4.jpg";
  punkname.innerText = "Cyber Ghost Punk";
  punkid.innerText = "#9";
  psym[0].style.backgroundColor = " #8c92ac";
  ins.style.color = "#8c92ac";
  price.innerText = "13";
}

function punk5() {
  punkimage.src = "assets/punks/6.jpg";
  punkname.innerText = "Cool Sneaker Punk";
  punkid.innerText = "#4";
  psym[0].style.backgroundColor = " aqua";
  ins.style.color = "aqua";
  price.innerText = "17";
}

function punk6() {
  punkimage.src = "assets/punks/2.jpg";
  punkname.innerText = "Green Tennis Punk";
  punkid.innerText = "#5";
  psym[0].style.backgroundColor = " #89cff0";
  ins.style.color = "#89cff0";
  price.innerText = "18";
}

function punk7() {
  punkimage.src = "assets/punks/7.jpg";
  punkname.innerText = "Sun Yellow Punk";
  punkid.innerText = "#3";
  psym[0].style.backgroundColor = " yellow";
  ins.style.color = "yellow";
  price.innerText = "22";
}

function punk8() {
  punkimage.src = "assets/punks/8.jpg";
  punkname.innerText = "Toy Boy Punk";
  punkid.innerText = "#6";
  psym[0].style.backgroundColor = " 	#FF69B4";
  ins.style.color = "	#FF69B4";
  price.innerText = "14";
}

function punk9() {
  punkimage.src = "assets/punks/9.jpg";
  punkname.innerText = "Terminator Punk";
  punkid.innerText = "#1";
  psym[0].style.backgroundColor = " #8c92ac";
  ins.style.color = "#8c92ac";
  price.innerText = "38";
}

function punk10() {
  punkimage.src = "assets/punks/10.jpg";
  punkname.innerText = "Sprinter Punk";
  punkid.innerText = "#7";
  psym[0].style.backgroundColor = "#8c92ac";
  ins.style.color = "#8c92ac";
  price.innerText = "29";
}
// theme switch function

let wid = document.getElementById("wallet");
let insid = document.getElementById("insta");
let smed = document.getElementsByClassName("s");
let main = document.getElementsByClassName("mainbody");
let oth = document.getElementsByClassName("navv");
let temp = document.getElementsByClassName("temp");
let hon = document.getElementsByClassName("hon");
let post = document.getElementsByClassName("post");
let themeimg = document.getElementsByClassName("themeimg");
let barinput = document.getElementsByClassName("searchbar");
let bartext = document.getElementsByClassName("bartext");

let p = document.getElementsByClassName("p");

// function call

function theme() {
  if (document.body.style.backgroundColor != "white") {
    // light theme mode
    document.body.style.transition = "background-color 0.5s ease-in-out";

    //main body
    document.body.style.backgroundColor = "white";
    themeimg[0].src = "assets/light-mode (1).svg";
    themeimg[0].style.boxShadow = "0px 0px 10px black";
    punkname.style.color = "black";
    punkindex.style.color = "black";
    price.style.color = "black";
    wid.style.color = "black";
    insid.style.color = "black";
    smed[0].style.backgroundColor = "black";
    smed[1].style.backgroundColor = "black";
    smed[2].style.backgroundColor = "black";
    smed[0].style.border = "2px solid #8c92ac";
    smed[1].style.border = "2px solid #8c92ac";
    smed[2].style.border = "2px solid #8c92ac";

    psym[0].style.borderColor = "black";
    p[0].style.boxShadow = "0px 0px 10px black";

    // footer
    temp[0].style.borderColor = "black";
    hon[0].style.color = "black";
    post[0].style.color = "black";

    barinput[0].style.backgroundColor = "#f2f0e4";
    barinput[0].style.border = "1px solid #1c1c1e";
    barinput[0].style.boxShadow = "0px 0px 10px black";
    bartext[0].style.color = "black";
  } else {
    // dark theme mode

    document.body.style.transition = "background-color 0.5s ease-in-out";
    document.body.style.backgroundColor = "#15202b";

    themeimg[0].src = "assets/dark-mode.svg";

    punkname.style.color = "white";
    punkindex.style.color = "gray";
    price.style.color = "gray";
    wid.style.color = "white";
    insid.style.color = "white";
    smed[0].style.backgroundColor = "black";
    smed[1].style.backgroundColor = "black";
    smed[2].style.backgroundColor = "black";

    psym[0].style.borderColor = "white";

    // footer
    temp[0].style.borderColor = "white";
    hon[0].style.color = "#808080";
    post[0].style.color = "#808080";

    barinput[0].style.backgroundColor = "#1c1c1e";
    barinput[0].style.border = "2px solid black";
    barinput[0].style.boxShadow = "0px 0px 10px white";
    bartext[0].style.color = "white";
  }
}

// taking input from search barinput

function saved(event) {
  event.preventDefault();

  let text = document.getElementById("bartext");

  console.log(text.value);

  text.value = "";
}

// Links to connect

const instalink = () => {
  window.open(" https://www.instagram.com/faizanbhagat_/", (target = "_main"));
};

const tweetlink = () => {
  window.open("https://twitter.com/faizanbhagat_", (target = "_main"));
};

const github = () => {
  window.open("https://github.com/faizanbhagat7", (target = "_main"));
};
