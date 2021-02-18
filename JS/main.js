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

//Service Section
const openDetails = () => {
  serviceDetails.style.transform = "translate(-50%, -50%)";
  serviceDetailsBackdrop.style.display = "block";
};

const closeDetails = () => {
  serviceDetails.style.transform = "translate(-50%, 100%)";
  serviceDetailsBackdrop.style.display = "none";
};

//Scroll Trigger
window.onscroll = () => {
  document.querySelector(".project__wave").style.transform = `translateX(-${
    window.scrollY / 10
  }%)`;
  document.querySelector(
    ".stats__bobular__image"
  ).style.transform = `translate( -${window.scrollY / 40}%, -50%)`;
};
