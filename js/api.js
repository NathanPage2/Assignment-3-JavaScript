//const ts = Date.now().toString();
//Had to switch methods because marvel didn't like the hard coding process
const searchBtn = document.querySelector("#search");
const results = document.querySelector("#results");
const publicKey = "1d3c25ab6340a7452103a86e2401dd58";
const privateKey = "2a88640658c32ca6ecd9fbea589b930a943653e6";
//const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();
document.getElementById("search").addEventListener("click", async () => {
  const characterName = document.getElementById("characterName").value.trim();
  const ts = Date.now().toString();
  const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();
try{
 const url = `https://gateway.marvel.com/v1/public/characters?name=${encodeURIComponent(characterName)}&ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  const response = await fetch (url);
  const marvelData = await response.json();

  results.innerHTML = "";

  if (!marvelData.data.results.length){
    //Meaning that there is nothing found
    const p = document.createElement("p");
    //Create a p element
    p.textContent = `Sorry we were unable to find ${characterName}, please try again!`;
    results.appendChild(p);
    return;
  }
  const character = marvelData.data.results[0];
  //Fetching the character after they are searched
  const img = document.createElement("img");
  const characterImg = `${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension}`;
  img.src = characterImg;
  img.alt = characterName;
   results.appendChild(img);
  //grabbing the path and extension for there api
  const desc = document.createElement("p");
  desc.textContent = character.description;
  results.appendChild(desc);
  //grabbing there description
} catch {
    const p = document.createElement("p");
    p.textContent = "Something went wrong. Please try again later.";
    results.appendChild(p);
}
});