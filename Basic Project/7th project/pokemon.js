async function pokemon() {
  const input = document.querySelector("#typing").value.toLowerCase();
  const div = document.querySelector(".pokemon");
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
    if (!res.ok) {
      throw new Error("Pokemon not found!");
    }
    const data = await res.json();

    div.innerHTML = `<h2 class="pokiName">${data.name.toUpperCase()}</h2>
                         <img class="poki" src="${
                           data.sprites.front_default
                         }" alt="${data.name}">`;
  } catch (error) {
    console.error("Not found" + error);
    div.innerHTML = `<p style="color: red;">${error.message}</p>`;
  }
}
