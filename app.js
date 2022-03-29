const ratingButtons = document.querySelectorAll(".rbutton");
const ratingsText = document.querySelectorAll(".rbutton-text");

const content = document.querySelector(".content");
const thankyou = document.querySelector(".thank-you");
const ratingDisplay = document.querySelector(".rating-selected-text");

let selectedRating = 0;

function toggleClass(target) {
  ratingButtons.forEach((button) => {
    if (button == target) {
      button.classList.add("rbutton-active");
    } else {
      button.classList.remove("rbutton-active");
    }
  });
}

function toggleClassText(event) {
  ratingsText.forEach((btext) => {
    if (btext == event) {
      btext.classList.add("rbutton-text-active");
    } else {
      btext.classList.remove("rbutton-text-active");
    }
  });
}

for (let button of ratingButtons) {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    selectedRating = button.value;
    toggleClass(button);

    for (let btext of ratingsText) {
      toggleClassText(btext);
    }
  });
}

const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  content.style.display = "none";
  thankyou.style.visibility = "visible";
  ratingDisplay.innerHTML = `<span>You selected ${selectedRating} out of 5</span>`;
});
