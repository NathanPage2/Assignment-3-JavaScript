//It's now a weather app
//Marvel didn't fricking work so now I gotta fix so much to use another api that I am praying works
//That api didn't so now I need to switch topics completly 
//Using news api
//I only have 100 requests per day be gentle
const searchBtn = document.querySelector("#search");
const results = document.querySelector("#results");
//Here's me grabbing the search and where the content will go from the html
const apiKey = "256d87fd712f4a5e940bd8ba112ecde0";
//Here's our key for grabbing this info
document.getElementById("search").addEventListener("click", async () => {
  //Saying to search after we click the button
  const query = document.getElementById("characterName").value.trim();
  //Saying run this after you hit the search button to find news

  if (!query) {
    return;
  }
  //If the query is not empty return
  const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&apiKey=${apiKey}&pageSize=5`;
  //Format from https://newsapi.org/docs/endpoints/everything
  //What is is doing is were are saying take our search, run it through, use the key and show five resualts 
try{
 const response = await fetch (url);
 //grabbing url and waiting
  const newsData = await response.json();
//Changing it into json so js understands it

  results.innerHTML = "";
  //Clearing out the resualts


 if (!newsData.articles || newsData.articles.length === 0) {
    //Meaning that there is nothing found and a length of zero
    const p = document.createElement("p");
    //Create a p element
    p.textContent = `Sorry we were unable to find ${query}, please try again!`;
    //We can't find what they are googling
    results.appendChild(p);
    //Displaying this message on the page
    return;
    //return
  }
    newsData.articles.forEach(article => {
      const container = document.createElement("div");
      container.classList.add("article");
      //So for each article we create a div and add it to the list
      const title = document.createElement("h3");
      title.textContent = article.title || "No title";
      //Creating a title for each unless there is no title
      const img = document.createElement("img");
      img.src = article.urlToImage || "";
      img.alt = article.title || "News image";
      img.style.maxWidth = "300px";
      img.onerror = () => img.style.display = 'none'; 
      //Grabbing ann image, creating a place to put it, setting a max width and setting what heppens if the image doesn't exist
      const desc = document.createElement("p");
      desc.textContent = article.description || "No description available.";
      //Setting a new description element and if there is none nothing is put
      const link = document.createElement("a");
      link.href = article.url;
      link.textContent = "Read more";
      link.target = "_blank";
      //Url if you want to read the full actual articles
      container.appendChild(title);
      container.appendChild(img);
      container.appendChild(desc);
      container.appendChild(link);
      results.appendChild(container);
      //Placing all of these on the page for each
    });

} catch {
    const p = document.createElement("p");
    p.textContent = "Something went wrong. Please try again later.";
    results.appendChild(p);
    //If something goes wrong we display that on the page
}
});