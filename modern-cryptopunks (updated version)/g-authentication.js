let others = document.getElementsByClassName("others");
let wallet = document.getElementById("wallet");
let insta = document.getElementById("insta");
let maincontainer = document.getElementById("maincontainer");
let logoutpage = document.getElementsByClassName("logoutpage");
let logoutinfo = document.getElementsByClassName("logoutinfo");

function onSignIn(googleUser) {
  logoutpage[0].style.display = "none";

  document.body.style.transition = "background-color 0.7s ease-in-out";

  maincontainer.style.display = "block";

  const profile = googleUser.getBasicProfile();
  others[0].innerHTML = "";

  let image = document.createElement("img");

  image.src = profile.getImageUrl();

  image.style.boxShadow = "0px 0px 20px gray";

  image.style.cursor = "pointer";

  others[0].appendChild(image);

  wallet.innerHTML = profile.getEmail();
  insta.innerHTML = ` ${profile.getName()}`;

  console.log("user is " + profile.getName());
  console.log("image is " + profile.getImageUrl());
  console.log("mail is " + profile.getEmail());
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log("User signed out.");

    document.body.style.transition = "background-color 0.5s ease-in-out";

    maincontainer.style.display = "none";

    logoutpage[0].style.display = "block";
    logoutinfo[0].style.display = "block";
  });
}
