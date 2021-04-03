const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#review-name').value.trim();
    const description = document.querySelector('#review-desc').value.trim();
  
    if (name && description) {
      const response = await fetch(`/api/reviews`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });