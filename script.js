const btn = document.querySelector("button");
const ratingResult = document.getElementById("rating-result");
const card = document.querySelector(".card");
const cardResult = document.querySelector(".card-result");
btn.addEventListener("click", submit);

function submit() {
  const rating = document.querySelector("input:checked");
  if (rating) {
    card.classList.add("none");
    cardResult.classList.remove("none");
    ratingResult.innerText = `You have selected ${rating.value} out 5`;
  }
}
