const commentFormHandler = async (event) => {
  event.preventDefault();

  const comment_text = document.querySelector("#comment-text").value.trim();

  if(!comment_text){
    return; 
  }

  const review_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  // if (comment_text && review_id) {
  const response = await fetch(`/api/reviews/${review_id}`, {
    method: "POST",
    body: JSON.stringify({
      review_id: review_id,
      comment_text: comment_text,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
  const message = await response.json();
  console.log(message);
};
// }

document
  .querySelector(".comment-form")
  .addEventListener("submit", commentFormHandler);
