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