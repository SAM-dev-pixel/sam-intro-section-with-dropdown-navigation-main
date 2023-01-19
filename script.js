const burgerBtn = document.querySelector(".burger-btn");
const navLinksWrapper = document.querySelector(".nav-links-wrapper");
// tombol burger di klik -> tampilkan navbar
document.querySelector(".burger-btn").onclick = () => {
  burgerBtn.classList.toggle("active");
  navLinksWrapper.classList.toggle("show");
  document.body.classList.toggle("no-scroll");
};
// klik selain tombol burger -> hilangkan navbar
document.body.addEventListener("click", (e) => {
  if (!burgerBtn.contains(e.target) && !navLinksWrapper.contains(e.target)) {
    burgerBtn.classList.remove("active");
    navLinksWrapper.classList.remove("show");
    document.body.classList.remove("no-scroll");
  }
});

const featuresWrapper = document.querySelector(".features-wrapper");
const companyWrapper = document.querySelector(".company-wrapper");
const featureChildWrapper = document.querySelector(".feature-child-wrapper");
const companyChildWrapper = document.querySelector(".company-child-wrapper");
const featureArrowIcon = document.querySelector(".features-wrapper p img");
const companyArrowIcon = document.querySelector(".company-wrapper p img");
// features link diklik -> tampil/hilangkan dropdown
featuresWrapper.addEventListener("click", () => {
  featuresWrapper.classList.toggle("active");
  featureChildWrapper.classList.toggle("show");
  featureArrowIcon.classList.toggle("up");
});
// company link diklik -> tampil/hilangkan dropdown
companyWrapper.addEventListener("click", () => {
  companyWrapper.classList.toggle("active");
  companyArrowIcon.classList.toggle("up");
  companyChildWrapper.classList.toggle("show");
});
// ketika features atau company link di klik -> hilangkan dropdown
document.body.addEventListener("click", (e) => {
  if (
    !featuresWrapper.contains(e.target) &&
    !companyWrapper.contains(e.target)
  ) {
    featuresWrapper.classList.remove("active");
    companyWrapper.classList.remove("active");
    featureChildWrapper.classList.remove("show");
    companyChildWrapper.classList.remove("show");
    featureArrowIcon.classList.remove("up");
    companyArrowIcon.classList.remove("up");
  }
});
