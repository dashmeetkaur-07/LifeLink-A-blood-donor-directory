function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}
// search donor
function filterDonors() {
  let blood = document.getElementById("bloodGroup").value.toLowerCase();
  let location = document.getElementById("location").value.toLowerCase();
  let gender = document.getElementById("gender").value.toLowerCase();
  let availability = document.getElementById("availability").value.toLowerCase();

  let donors = document.querySelectorAll(".container2");
  let count = 0;

  donors.forEach(function(card) {

    let cardBlood = card.querySelector(".blood").innerText.toLowerCase();
    let cardCity = card.querySelector(".city").innerText.toLowerCase();
    let cardGender = card.querySelector(".gender").innerText.toLowerCase();
    let cardStatus = card.querySelector(".status").innerText.toLowerCase();


    let matchBlood = blood === "all blood groups" || cardBlood.includes(blood);
    let matchLocation = location === "" || cardCity.includes(location);
    let matchGender = gender === "gender" || cardGender.includes(gender);
    let matchAvailability = availability === "availability" || cardStatus.includes(availability);

    if (matchBlood && matchLocation && matchGender && matchAvailability) {
      card.style.display = "flex";
      count++;
    } else {
      card.style.display = "none";
    }
  });

  let msg = document.getElementById("noResults");

  if (count === 0) {
    msg.classList.add("show");
  } else {
    msg.classList.remove("show");
  }
}

function resetFilters() {
  document.getElementById("bloodGroup").value = "All Blood Groups";
  document.getElementById("gender").value = "Gender";
  document.getElementById("availability").value = "Availability";
  document.getElementById("location").value = "";
  let donors = document.querySelectorAll(".container2");
  donors.forEach(function(card) {
    card.style.display = "flex";
  });
  let msg = document.getElementById("noResults");
  msg.classList.remove("show");
}

//contact page
const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    item.querySelector(".faq-question").addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });
  
// become js
document.addEventListener("DOMContentLoaded", function () {

  let current = 0;

  const steps = document.querySelectorAll(".step");
  const progress = document.getElementById("progress");
  const form = document.getElementById("form");
  const success = document.getElementById("success");

  function showStep(i) {
    steps.forEach(step => step.classList.remove("active"));
    steps[i].classList.add("active");

    progress.style.width = ((i + 1) / steps.length) * 100 + "%";
  }

  window.nextStep = function () {
    if (current < steps.length - 1) {
      current++;
      showStep(current);
    }
  };

  window.prevStep = function () {
    if (current > 0) {
      current--;
      showStep(current);
    }
  };
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    console.log("Form submitted"); // DEBUG

    form.style.display = "none";

    const bar = document.querySelector(".progress-bar");
    if (bar) bar.style.display = "none";

    success.style.display = "block";
  });

  showStep(0);
});
