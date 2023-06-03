console.log(openAI);

const firstChoice = document.getElementById("firstChoice");
const secondChoice = document.createElement("div");
// const thirdChoice = document.createElement("div");
const highscore = document.getElementById("p");
const finalScore = document.getElementById("finalScore");
const gameZone = document.getElementById("gameZone");
const preGame = document.getElementById("preGame");
const inGame = document.getElementById("inGame");
let div = document.createElement("div");
div.className = "player1";
let div2 = document.createElement("div");
div2.className = "player2";
console.dir(gameZone);
// const url = `https://genius-song-lyrics1.p.rapidapi.com/chart/artists/?time_period=all_time&per_page=50&page=1`;
// const url2 =
//   "https://genius-song-lyrics1.p.rapidapi.com/chart/songs/?time_period=all_time&per_page=50&page=2";
const songDiv = document.getElementById("songDiv");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": `${openAI}`,
    "X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com",
  },
};
console.log(options);

function gameStart() {
  preGame.className = "d-none";
  inGame.className = "";
}

function assignPopularity(result) {
  result.forEach((chart_items) => {
    chart_items.item.rank = result.indexOf(chart_items);
  });
}

function randomizeArr(arr, num) {
  const shuffledArr = [...arr].sort(() => 0.5 - Math.random());
  return shuffledArr.slice(0, num);
}

function renderSong1(result) {
  result.forEach((chart_items) => {
    console.log(chart_items);
    div.id = `${chart_items.item.rank}`;
    div.innerHTML = `
      <div class="card bg-dark" style="width: 18rem;">
      <img class="card-img-top" src=${
        chart_items.item.header_image_url ||
        chart_items.item.cover_art_thumbnail_url ||
        chart_items.item.header_image_thumbnail_url
      } alt="Card image cap">
      <div class="card-body">
      <h5 class="card-title">${
        chart_items.item.name ||
        chart_items.item.full_title ||
        chart_items.item.full_title
      }
  
      </div>`;
    firstChoice.className = "d-none";
    gameZone.appendChild(div);
  });
}
function renderSong2(result) {
  result.forEach((chart_items) => {
    //console.log(chart_items);
    div2.id = `${chart_items.item.rank}`;
    div2.innerHTML = `
      <div class="card bg-dark" style="width: 18rem;">
      <img class="card-img-top" src=${
        chart_items.item.header_image_url ||
        chart_items.item.cover_art_thumbnail_url ||
        chart_items.item.header_image_thumbnail_url
      } alt="Card image cap">
      <div class="card-body">
      <h5 class="card-title">${
        chart_items.item.name ||
        chart_items.item.full_title ||
        chart_items.item.full_title
      }
      </div>`;
    gameZone.appendChild(div2);
  });
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
<button class="btn btn-lg btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
<button class="btn btn-lg btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
<button class="btn btn-lg btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
    e.preventDefault();
    if (e.target.innerHTML == "Day") {
      par2 = "day";
      console.log = par2;
      secondChoice.innerHTML = "";

      //If the first selection (firstChoice) is song, then and only then will we have a button that allows for the selection of genre.  Else dont display the third button and begin the game as normal

      // if (par1 == "songs") {
      //   console.log("hello");

      //   thirdChoice.innerHTML = `<div class="dropdown col" id="thirdChoice">
      //   <button class="btn btn-lg btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      //       Choose Song Genre
      //   </button>
      //   <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      //   <a class="dropdown-item" id="artist" href="#">All</a>
      //   <a class="dropdown-item" id="album" href="#">Rap</a>
      //   <a class="dropdown-item" id="song" href="#">Pop</a>
      //   <a class="dropdown-item" id="song" href="#">R&B</a>
      //   <a class="dropdown-item" id="song" href="#">Rock</a>
      //   <a class="dropdown-item" id="song" href="#">Country</a>
      //   </div>
      //   </div>`;
      //   firstChoice.appendChild(thirdChoice);
    } else if (e.target.innerHTML == "Week") {
      console.log("Help");
      par2 = "week";
      secondChoice.innerHTML = "";

      // if (par1 == "songs") {
      //   thirdChoice.innerHTML = `<div class="dropdown col" id="thirdChoice">
      //   <button class="btn btn-lg btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      //       Choose Song Genre
      //   </button>
      //   <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      //   <a class="dropdown-item" id="artist" href="#">All</a>
      //   <a class="dropdown-item" id="album" href="#">Rap</a>
      //   <a class="dropdown-item" id="song" href="#">Pop</a>
      //   <a class="dropdown-item" id="song" href="#">R&B</a>
      //   <a class="dropdown-item" id="song" href="#">Rock</a>
      //   <a class="dropdown-item" id="song" href="#">Country</a>
      //   </div>
      //   </div>`;
      //   firstChoice.appendChild(thirdChoice);
    } else if (e.target.innerHTML == "Month") {
      par2 = "month";
      secondChoice.innerHTML = "";
      // if (par1 == "songs") {
      //   console.log("hello");

      //   thirdChoice.innerHTML = `<div class="dropdown col" id="thirdChoice">
      //   <button class="btn btn-lg btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      //       Choose Song Genre
      //   </button>
      //   <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      //   <a class="dropdown-item" id="artist" href="#">All</a>
      //   <a class="dropdown-item" id="album" href="#">Rap</a>
      //   <a class="dropdown-item" id="song" href="#">Pop</a>
      //   <a class="dropdown-item" id="song" href="#">R&B</a>
      //   <a class="dropdown-item" id="song" href="#">Rock</a>
      //   <a class="dropdown-item" id="song" href="#">Country</a>
      //   </div>
      //   </div>`;
      //   firstChoice.appendChild(thirdChoice);
      // }
    } else if (e.target.innerHTML == "All Time") {
      par2 = "all_time";
      secondChoice.innerHTML = "";
      // if (par1 == "songs") {
      //   console.log("hello");

      //   thirdChoice.innerHTML = `<div class="dropdown col" id="thirdChoice">
      //   <button class="btn btn-lg btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      //       Choose Song Genre
      //   </button>
      //   <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      //   <a class="dropdown-item" id="artist" href="#">All</a>
      //   <a class="dropdown-item" id="album" href="#">Rap</a>
      //   <a class="dropdown-item" id="song" href="#">Pop</a>
      //   <a class="dropdown-item" id="song" href="#">R&B</a>
      //   <a class="dropdown-item" id="song" href="#">Rock</a>
      //   <a class="dropdown-item" id="song" href="#">Country</a>
      //   </div>
      //   </div>`;
      //   firstChoice.appendChild(thirdChoice);
      // }
    }

    // if (par1 == "songs") {
    //   thirdChoice.addEventListener("click", async (e) => {
    //     e.preventDefault();
    //     if (e.target.innerHTML == "Rap") {
    //       par3 = "rap";
    //       firstChoice.innerHTML = "";
    //     } else if (e.target.innerHTML == "Pop") {
    //       par3 = "pop";
    //       firstChoice.innerHTML = "";
    //     } else if (e.target.innerHTML == "R&B") {
    //       par3 = "rb";
    //       firstChoice.innerHTML = "";
    //     } else if (e.target.innerHTML == "Rock") {
    //       par3 = "rock";
    //       firstChoice.innerHTML = "";
    //     } else if (e.target.innerHTML == "Country") {
    //       par3 = "country";
    //       firstChoice.innerHTML = "";
    //     }

    //     const url = `https://genius-song-lyrics1.p.rapidapi.com/chart/${par1}/?time_period=${par2}&chart_genre=${par3}&per_page=50&page=1`;
    //     const url2 = `https://genius-song-lyrics1.p.rapidapi.com/chart/${par1}/?time_period=${par2}&chart_genre=${par3}&per_page=50&page=2`;

    //     try {
    //       const response = await fetch(url, options);
    //       const response2 = await fetch(url2, options);
    //       const result1 = await response.json();
    //       const result2 = await response2.json();
    //       console.log(result1, result2);
    //       const result = result1.chart_items.concat(result2.chart_items);
    //       console.log(result);
    //       assignPopularity(result);
    //       let randResult = randomizeArr(result, 2);
    //       renderSongs(randResult);
    //     } catch (error) {
    //       console.error(error);
    //     }

    const url = `https://genius-song-lyrics1.p.rapidapi.com/chart/${par1}/?time_period=${par2}&chart_genre=${par3}&per_page=50&page=1`;
    const url2 = `https://genius-song-lyrics1.p.rapidapi.com/chart/${par1}/?time_period=${par2}&chart_genre=${par3}&per_page=50&page=2`;
    try {
      const response = await fetch(url, options);
      const response2 = await fetch(url2, options);
      const result1 = await response.json();
      const result2 = await response2.json();

      console.log(result1, result2);
      const result = result1.chart_items.concat(result2.chart_items);
      console.log(result);
      assignPopularity(result);
      let randResult1 = randomizeArr(result, 1);
      let randResult2 = randomizeArr(result, 1);
      renderSong1(randResult1);
      renderSong2(randResult2);
      gameStart();

      let counter = 0;

      document.querySelector(".player1").addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById("highscore").innerHTML = counter;
        if (Number(div.id) <= Number(div2.id)) {
          console.log("you win");
          counter++;
          document.getElementById("highscore").innerHTML = counter;
          console.log(counter);
          localStorage.setItem("counter", counter.toString());
          let randResult1 = randomizeArr(result, 1);
          let randResult2 = randomizeArr(result, 1);
          renderSong1(randResult1);
          renderSong2(randResult2);
        } else {
          console.log("you lose");
          window.location.replace("http://127.0.0.1:5500/endPage.html");
        }

      });
      document.querySelector(".player2").addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById("highscore").innerHTML = counter;
        if (Number(div2.id) <= Number(div.id)) {
          console.log("you win");
          counter++;
          document.getElementById("highscore").innerHTML = counter;
          console.log(counter);
          localStorage.setItem("counter", counter.toString());
          let randResult1 = randomizeArr(result, 1);
          let randResult2 = randomizeArr(result, 1);
          renderSong1(randResult1);
          renderSong2(randResult2);
        } else {
          console.log("you lose");
          window.location.replace("http://127.0.0.1:5500/endPage.html");
        }
      });
    } catch (error) {
      console.error(error);
    }
  });
});
