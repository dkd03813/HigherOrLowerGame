const firstChoice = document.getElementById("firstChoice");
const secondChoice = document.createElement("div");
const thirdChoice = document.createElement("div");
const url = `https://genius-song-lyrics1.p.rapidapi.com/chart/artists/?time_period=all_time&per_page=50&page=1`;
const url2 =
  "https://genius-song-lyrics1.p.rapidapi.com/chart/songs/?time_period=all_time&per_page=50&page=2";
const songDiv = document.getElementById("songDiv");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "8928d20978msh33c4f2c19c570fep140c43jsnbe4d00944f83",
    "X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com",
  },
};

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch(url, options);
    const response2 = await fetch(url2, options);
    const result1 = await response.json();
    const result2 = await response2.json();
    //console.log(result1);
    //console.log(result2);
    const result = result1.chart_items.concat(result2.chart_items);
    //console.log(result)
    //renderSongs(result);
  } catch (error) {
    console.error(error);
  }


function renderSongs(result) {
  songDiv.innerHTML = "";
  result.forEach((chart_items) => {
    const div = document.createElement("div");
    div.className = "col";

    div.innerHTML = `<div class="movies-container col" id="container">
      <div class="card" style="width: 18rem;">
      <img class="card-img-top" src=${chart_items.item.header_image_url} alt="Card image cap">
      <div class="card-body">
      <h5 class="card-title">${chart_items.item.name} <span class="badge bg-secondary">${chart_items.item.name}</span></h5>
      <a href="#" class="btn btn-primary">${chart_items.item.artist_name}</a>
      </div>
      </div>`;

    songDiv.appendChild(div);
  });
  {
  }
}

//This block of code allows the user to filter the game down to play the version they would like

firstChoice.addEventListener("click", async (e) => {
  e.preventDefault();

//Declare the three variables that will hold the values of the button presses.  Eventually these will be used in the URL using template literals

  let par1 = "";
  let par2 = "";
  let par3 = "all";
  if (e.target.innerHTML == "Artist") {
    par1 = "artists";
    firstChoice.innerHTML = "";
    
//Once someone makes a valid selection, clear firstChoice and inject a second button onto the dom to allow for selecting time period

    secondChoice.innerHTML = `<div class="dropdown col" id="secondChoice">
<button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Choose Time Period
</button>
<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
<a class="dropdown-item" id="artist" href="#">Day</a>
<a class="dropdown-item" id="album" href="#">Week</a>
<a class="dropdown-item" id="song" href="#">Month</a>
<a class="dropdown-item" id="song" href="#">All Time</a>
</div>
</div>`;
    firstChoice.appendChild(secondChoice);

  } else if (e.target.innerHTML == "Song") {
    par1 = "songs";
    console.log(par1);
    firstChoice.innerHTML = "";
    
//Once someone makes a valid selection, clear firstChoice and inject a second button onto the dom to allow for selecting time period

    secondChoice.innerHTML = `<div class="dropdown col" id="secondChoice">
<button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Choose Time Period
</button>
<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
<a class="dropdown-item" id="artist" href="#">Day</a>
<a class="dropdown-item" id="album" href="#">Week</a>
<a class="dropdown-item" id="song" href="#">Month</a>
<a class="dropdown-item" id="song" href="#">All Time</a>
</div>
</div>`;
    firstChoice.appendChild(secondChoice);
  } else if (e.target.innerHTML == "Album") {
    par1 = "albums";
    console.log(par1);
    firstChoice.innerHTML = "";
    
//Once someone makes a valid selection, clear firstChoice and inject a second button onto the dom to allow for selecting time period

    secondChoice.innerHTML = `<div class="dropdown col" id="secondChoice">
<button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Choose Time Period
</button>
<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
<a class="dropdown-item" id="artist" href="#">Day</a>
<a class="dropdown-item" id="album" href="#">Week</a>
<a class="dropdown-item" id="song" href="#">Month</a>
<a class="dropdown-item" id="song" href="#">All Time</a>
</div>
</div>`;
    firstChoice.appendChild(secondChoice);
  }

//Event listener on the second button that is created by the first event listener

  secondChoice.addEventListener("click", async (e) => {
    if (e.target.innerHTML == "Day") {
      par2 = "day";
      console.log = par2
      secondChoice.innerHTML = "";

//If the first selection (firstChoice) is song, then and only then will we have a button that allows for the selection of genre.  Else dont display the third button and begin the game as normal
    
      if (par1 == "songs") {
        console.log("hello");

        thirdChoice.innerHTML = `<div class="dropdown col" id="thirdChoice">
        <button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Choose Song Genre
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" id="artist" href="#">All</a>
        <a class="dropdown-item" id="album" href="#">Rap</a>
        <a class="dropdown-item" id="song" href="#">Pop</a>
        <a class="dropdown-item" id="song" href="#">R&B</a>
        <a class="dropdown-item" id="song" href="#">Rock</a>
        <a class="dropdown-item" id="song" href="#">Country</a>
        </div>
        </div>`;
        firstChoice.appendChild(thirdChoice);
      }else {

      }
    } else if (e.target.innerHTML == "Week") {
      console.log ("Help")
      par2 = "week";
      secondChoice.innerHTML = "";
      if (par1 == "songs") {

        thirdChoice.innerHTML = `<div class="dropdown col" id="thirdChoice">
        <button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Choose Song Genre
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" id="artist" href="#">All</a>
        <a class="dropdown-item" id="album" href="#">Rap</a>
        <a class="dropdown-item" id="song" href="#">Pop</a>
        <a class="dropdown-item" id="song" href="#">R&B</a>
        <a class="dropdown-item" id="song" href="#">Rock</a>
        <a class="dropdown-item" id="song" href="#">Country</a>
        </div>
        </div>`;
        firstChoice.appendChild(thirdChoice);
      }else {

      }
    } else if (e.target.innerHTML == "Month") {
      par2 = "month";
      secondChoice.innerHTML = "";
      if (par1 == "songs") {
        console.log("hello");

        thirdChoice.innerHTML = `<div class="dropdown col" id="thirdChoice">
        <button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Choose Song Genre
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" id="artist" href="#">All</a>
        <a class="dropdown-item" id="album" href="#">Rap</a>
        <a class="dropdown-item" id="song" href="#">Pop</a>
        <a class="dropdown-item" id="song" href="#">R&B</a>
        <a class="dropdown-item" id="song" href="#">Rock</a>
        <a class="dropdown-item" id="song" href="#">Country</a>
        </div>
        </div>`;
        firstChoice.appendChild(thirdChoice);
      }
    } else if (e.target.innerHTML == "All Time") {
      par2 = "all_time";
      secondChoice.innerHTML = "";
      if (par1 == "songs") {
        console.log("hello");

        thirdChoice.innerHTML = `<div class="dropdown col" id="thirdChoice">
        <button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Choose Song Genre
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" id="artist" href="#">All</a>
        <a class="dropdown-item" id="album" href="#">Rap</a>
        <a class="dropdown-item" id="song" href="#">Pop</a>
        <a class="dropdown-item" id="song" href="#">R&B</a>
        <a class="dropdown-item" id="song" href="#">Rock</a>
        <a class="dropdown-item" id="song" href="#">Country</a>
        </div>
        </div>`;
        firstChoice.appendChild(thirdChoice);
      }
    }

    if (par1 == "songs") {
    thirdChoice.addEventListener("click", async (e) => {
      if (e.target.innerHTML == "Rap") {
        par3 = "rap";
        firstChoice.innerHTML = "";
      } else if (e.target.innerHTML == "Pop") {
        par3 = "pop";
        firstChoice.innerHTML = "";
      } else if (e.target.innerHTML == "R&B") {
        par3 = "rb";
        firstChoice.innerHTML = "";
      } else if (e.target.innerHTML == "Rock") {
        par3 = "rock";
        firstChoice.innerHTML = "";
      } else if (e.target.innerHTML == "Country") {
        par3 = "country";
        firstChoice.innerHTML = "";
      }

      const url = `https://genius-song-lyrics1.p.rapidapi.com/chart/${par1}/?time_period=${par2}&chart_genre=${par3}&per_page=50&page=1`;
      const url2 = `https://genius-song-lyrics1.p.rapidapi.com/chart/${par1}/?time_period=${par2}&chart_genre=${par3}&per_page=50&page=2`;
      try {
        const response = await fetch(url, options);
        const response2 = await fetch(url2, options);
        const result1 = await response.json();
        const result2 = await response2.json();
        console.log(result1);
        console.log(result2);
        const result = result1.chart_items.concat(result2.chart_items);
        console.log(result);
        renderSongs(result);
      } catch (error) {
        console.error(error);
      }
    });
    } else {
      const url = `https://genius-song-lyrics1.p.rapidapi.com/chart/${par1}/?time_period=${par2}&per_page=50&page=1`;
      const url2 = `https://genius-song-lyrics1.p.rapidapi.com/chart/${par1}/?time_period=${par2}}&per_page=50&page=2`;
      try {
        const response = await fetch(url, options);
        const response2 = await fetch(url2, options);
        const result1 = await response.json();
        const result2 = await response2.json();
        console.log(result1);
        console.log(result2);
        const result = result1.chart_items.concat(result2.chart_items);
        console.log(result);
        renderSongs(result);
      } catch (error) {
        console.error(error);
      }
    }
  });
  
})
});