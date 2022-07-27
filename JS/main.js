const mobileNavbar = document.querySelector(".navbar__mobile");
const backdrop = document.querySelector(".backdrop");
const serviceDetails = document.querySelector(".services__details");
const serviceDetailsBackdrop = document.querySelector(".services__backdrop");

//Navigation
const openNavbar = () => {
  mobileNavbar.style.transform = "scale(1)";
  mobileNavbar.style.opacity = "1";
  backdrop.style.display = "block";
};

const closeNavbar = () => {
  mobileNavbar.style.transform = "scale(0)";
  mobileNavbar.style.opacity = "0";
  backdrop.style.display = "none";
};

const bobular = document.getElementById("bobular");

const github = () => {
  bobular.style.transform = "translate(-50%, -50%) scale(1)";

  setTimeout(() => {
    window.open("https://github.com/csr15");
    bobular.style.transform = "translate(-50%, -50%) scale(0)";
  }, 300);
};
//Scroll Trigger
