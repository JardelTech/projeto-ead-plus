const data = [
  "Banco de Dados",
  "Marketing Digital",
  "JavaScript",
  "Lógica de programação",
];

function search() {
  const query = document.getElementById("inputsearch").value.toLowerCase();
  const results = data.filter((item) => item.toLowerCase().includes(query));

  const divs = document.querySelectorAll(".conteiner");
  divs.forEach((div) => {
    div.style.display = "none";
  });

  const resultsDiv = document.getElementById("resultados");
  divs.forEach((div) => {
    if (div.textContent.toLowerCase().includes(query)) {
      div.style.display = "block";
    }
  });

  const resultDisplayed = [...divs].some(
    (div) => div.style.display === "block"
  );

  if (!resultDisplayed) {
    document.getElementById("erros").innerHTML = "Nenhum resultado encontrado.";
  } else {
    document.getElementById("erros").innerHTML = "";
  }
}
