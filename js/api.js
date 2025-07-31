//Marvel didn't fricking work so now I gotta fix so much to use another api that I am praying works
//That api didn't so now I need to switch topics completly 
const searchBtn = document.querySelector("#search");
const results = document.querySelector("#results");
const accessToken = "48ac86e120cafb6aab78e30ae5784f08";
document.getElementById("search").addEventListener("click", async () => {
  const characterName = document.getElementById("characterName").value.trim();
try{
 const url = `https://superheroapi.com/api/${accessToken}/search/${encodeURIComponent(characterName)}`;
 const response = await fetch (url);
  const superData = await response.json();

  results.innerHTML = "";

 if (superData.response === "error" || superData.results.length === 0) {
    //Meaning that there is nothing found
    const p = document.createElement("p");
    //Create a p element
    p.textContent = `Sorry we were unable to find ${characterName}, please try again!`;
    results.appendChild(p);
    return;
  }
  const character = superData.results[0];
  //Fetching the character after they are searched
  const img = document.createElement("img");
    img.src = character.image.url;
    img.alt = character.name;
    results.appendChild(img);
  //grabbing the path and extension for there api
  const desc = document.createElement("p");
    desc.textContent = `Full Name: ${character.biography["full-name"] || "N/A"}
                      \nPublisher: ${character.biography.publisher || "N/A"}
                      \nAlignment: ${character.biography.alignment || "N/A"}`;
    results.appendChild(desc);
  //grabbing there description
} catch {
    const p = document.createElement("p");
    p.textContent = "Something went wrong. Please try again later.";
    results.appendChild(p);
}
});