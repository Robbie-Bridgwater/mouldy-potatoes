const editFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('input[name="post-name"]').value;
  const description = document.querySelector('input[name="post-desc"]').value;
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch(`/dashboard/edit/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      name,
      description,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
};

document
  .querySelector(".edit-post-form")
  .addEventListener("submit", editFormHandler);
