const url =
  "https://theaudiodb.p.rapidapi.com/track-top10-mb.php?s=20244d07-534f-4eff-b4d4-930878889970";
const songDiv = document.getElementById("songDiv");
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "8928d20978msh33c4f2c19c570fep140c43jsnbe4d00944f83",
    "X-RapidAPI-Host": "theaudiodb.p.rapidapi.com",
  },
};

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    renderSongs(result.track);
  } catch (error) {
    console.error(error);
  }
});

function renderSongs(result) {
  songDiv.innerHTML = "";
  result.forEach((track) => {
	  
	  const div = document.createElement("div");
	  div.className = "col";

    div.innerHTML = `<div class="movies-container col" id="container">
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src=${track.strTrackThumb} alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${track.strArtist} <span class="badge bg-secondary">${track.strGenre}</span></h5>
              <a href="#" class="btn btn-primary">${track.strTrack}</a>
            </div>
        </div>`;
  
	  
	  songDiv.appendChild(div);
  }); {
  };
}
