const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-name&key=f5ccab1acef944059967712d2822cc3f";

const resultsContainer = document.querySelector(".results");

async function getAPI() {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    const info = jsonResponse.results;
    console.log(info)
    
    resultsContainer.innerHTML ="";

  for (let i = 0; i < info.length; i++) {
      console.log(info[i].name);
      console.log(info[i].rating);
      console.log(info[i].tags);

      if (i === 7) {
          break;
      }
      resultsContainer.innerHTML += `<div class="result">${info[i].name}</div>`;
      resultsContainer.innerHTML += `<div class="result">${info[i].rating}</div>`;
      resultsContainer.innerHTML += `<div class="result">${info[i].tags}</div>`;
  }
}

getAPI()

