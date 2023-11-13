document.getElementById('searchButton').addEventListener('click', function() {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        var superheroes = JSON.parse(xhr.responseText);
        var superheroList = superheroes.map(superhero => superhero.alias).join("\n");
        alert("List of Superheroes:\n" + superheroList);
      } else {
        console.error('Request failed');
      }
    }
  };

  xhr.open('GET', 'superheroes.php');
  xhr.send();
});
