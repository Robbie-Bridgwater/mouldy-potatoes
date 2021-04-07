const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#review-name").value.trim();
  const rating = document.querySelector("#rater").getAttribute("data-rating");
  const description = document.querySelector("#review-desc").value.trim();

  if (name && rating && description) {
    const response = await fetch(`/api/reviews`, {
      method: "POST",
      body: JSON.stringify({ name, rating, description }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to create a new review");
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/reviews/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to delete review");
    }
  }
};

document
  .querySelector(".new-review-form")
  .addEventListener("submit", newFormHandler);

document
  .querySelector(".review-list")
  .addEventListener("click", delButtonHandler);
