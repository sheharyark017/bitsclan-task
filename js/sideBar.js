const page = document.getElementById("page");
const sidebar = document.querySelector(".sidebar-nav");
const hamburger = document.querySelector(".hamburger");
const mainDashboard = document.querySelector(".main-dashboard");
const calendarHide = document.querySelector(".calendar-hide");
const header = document.querySelector(".header");
const headerHeight = header.clientHeight;
const headerPhoneDropdown = document.querySelector(".header-phone-dropdown");
const headerPhone = document.querySelector(".phone-header");

page.style.marginTop = headerHeight + "px";

sidebar.style.top = headerHeight + "px";

sidebar.addEventListener("mouseenter", function () {
  this.classList.add("hover-active");
});
sidebar.addEventListener("mouseleave", function () {
  this.classList.remove("hover-active");
});
hamburger.addEventListener("click", function () {
  sidebar.classList.toggle("click-active");
  mainDashboard.classList.toggle("margin");
});
calendarHide.addEventListener("click", function () {
  sidebar.classList.remove("hover-active");
  sidebar.classList.remove("click-active");
  mainDashboard.classList.remove("margin");
});

headerPhoneDropdown.addEventListener("click", function () {
  headerPhone.classList.toggle("active");
});
