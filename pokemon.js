const container = document.querySelector("#container");
const baseURL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (let pokedexNumber = 1; pokedexNumber <= 151; pokedexNumber++) {
  const order = document.createElement("div");
  order.classList.add("pokemon")
  const label = document.createElement("span");
  label.innerText = `#${pokedexNumber}`;
  const newPokemon = document.createElement("img");
  newPokemon.src = `${baseURL}${pokedexNumber}.png`;
  order.appendChild(newPokemon);
  order.appendChild(label);
  container.appendChild(order);
}
