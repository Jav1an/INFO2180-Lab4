document.addEventListener("DOMContentLoaded", function () {
  const input = document.querySelector("input");
  const form = document.querySelector("form");
  const result = document.querySelector("#result");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let userInput = input.value.trim();
    userInput = toTitleCase(userInput); 

    let url = `superheroes.php?name=${userInput}`;

    fetch(url)
      .then(res => {
        if (res.ok) {
          return res.text();
        } else {
          return Promise.reject('Error occurred');
        }
      })
      .then(data => {
        result.innerHTML = data;
      })
      .catch(error => {
        alert('Error fetching data:', error);
      });
  });

  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
});


