
document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault()
    const city = event.target.search.value;
    console.log(city)
    const base_url = `https://wttr.in/${city}?format=j1`;
    fetch(base_url)
    .then((response) => response.json())
    .then((data) => {

        const display = document.querySelector(".currentCity");
        const locationName = data.nearest_area[0].areaName[0].value
        const locationRegion = data.nearest_area[0].region[0].value
        const locationCountry = data.nearest_area[0].country[0].value
        const locationFeelsLike = data.current_condition[0].FeelsLikeF
        
        display.innerHTML = `<h3>${locationName}</h3> 
        <p>Area: ${locationName}</p> <p>Region: ${locationRegion}</p> 
        <p>Country: ${locationCountry}</p> 
        <p>Currently: Feels like ${locationFeelsLike}°F</p>`
        
    })
})

const previousSearch = document.createElement("li");
previousSearch.innerHTML = ` <a href="${base_url}"



`

