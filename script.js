
const url = 'https://genius-song-lyrics1.p.rapidapi.com/chart/artists/?time_period=all_time&per_page=50&page=1';
const url2 = 'https://genius-song-lyrics1.p.rapidapi.com/chart/artists/?time_period=all_time&per_page=50&page=2';
const songDiv = document.getElementById("songDiv")
=======

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8928d20978msh33c4f2c19c570fep140c43jsnbe4d00944f83',
		'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
	}
};


document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch(url, options);
    const response2 = await fetch(url2,options);
    const result1 = await response.json();
    const result2 = await response2.json();
    console.log(result1);
    console.log(result2);
    const result = result1.chart_items.concat(result2.chart_items)
    console.log(result)
    renderSongs(result);
  } catch (error) {
    console.error(error);
  }
});

function renderSongs(result) {
  songDiv.innerHTML = "";
  result.forEach((chart_items) => {
	  
	  const div = document.createElement("div");
	  div.className = "col";

    div.innerHTML = `<div class="movies-container col" id="container">
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src=${chart_items.item.image_url} alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${chart_items.item.name} <span class="badge bg-secondary">${chart_items.item.name}</span></h5>
              <a href="#" class="btn btn-primary">${chart_items.item.name}</a>
            </div>
        </div>`;
  
	  
	  songDiv.appendChild(div);
  }); {
  };
}

