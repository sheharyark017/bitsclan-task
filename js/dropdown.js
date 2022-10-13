const body = document.querySelector("body");

const dropdownButtons = document.querySelectorAll(".dropdown-button");

const dropdownLinks = document.querySelectorAll(".dropdown-links");

dropdownButtons.forEach((button) => {
  button.addEventListener("click", function () {
    dropdownLinks.forEach((d) => {
      d.classList.remove("active");
    });

    const target = button.dataset.target;
    document.getElementById(target).classList.toggle("active");
    console.log(target);
  });
});

body.addEventListener("click", function (e) {
  if (!e.target.closest(".dropdown-button")) {
    dropdownLinks.forEach((dropdownLink) => {
      dropdownLink.classList.remove("active");
      console.log("hello");
      console.log(dropdownLink);
    });
    console.log("hello");
  }
});
