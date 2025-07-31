let date = new Date();
console.log(date.getTime()); 
ts = 1753979713333;
//Had to get the ts to generate a hash so because of that I need to keep the same ts which the previous logic did not work with
const hash = "f5a24e557c97268344e771a2dcbb214f";
const searchBtn = document.querySelector("#search");
const results = document.querySelector("#results");
const publicKey = "1d3c25ab6340a7452103a86e2401dd58";
const privateKey = "2a88640658c32ca6ecd9fbea589b930a943653e6";

document.getElementById("search").addEventListener("click", () => {
  const characterName = document.getElementById("characterName").value.trim();

  const url = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`; 
});