
document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault()
    const city = event.target.search.value;
    console.log(city)
    const base_url = `https://wttr.in/${city}?format=j1`;
    fetch(base_url)
    .then((response) => response.json())
    .then((data) => {

        const display = document.querySelector(".display");
        const locationName = data.nearest_area[0].areaName[0].value
        const locationRegion = data.nearest_area[0].region[0].value
        const locationCountry = data.nearest_area[0].country[0].value
        const locationFeelsLike = data.current_condition[0].FeelsLikeF
        
        display.innerHTML = `<h3>${locationName}</h3> 
        <p>Area: ${locationName}</p> <p>Region: ${locationRegion}</p> 
        <p>Country: ${locationCountry}</p> 
        <p>Currently: Feels like ${locationFeelsLike}°F</p>`
        
        
        const li = document.createElement("li");
        li.innerHTML = `<a href="#">${city}</a> - ${locationFeelsLike}°F`
        document.querySelector("ul").append(li)
        
        li.addEventListener("click", (event) => {
            display.innerHTML = `<h3>${locationName}</h3> 
            <p>Area: ${locationName}</p> <p>Region: ${locationRegion}</p> 
            <p>Country: ${locationCountry}</p> 
            <p>Currently: Feels like ${locationFeelsLike}°F</p>` 
            const daysArr = ["Today", "Tomorrow", "Day After-Tomorrow"]
            for (let i = 0; i < daysArr.length; i++) {
                let avgTemp = data.weather[i].avgtempF;
                let maxTemp = data.weather[i].maxtempF;
                let minTemp = data.weather[i].mintempF;
                const div = document.querySelectorAll(".daysAfter div");
                div[i].innerHTML = `<h2>${daysArr[i]}</h2>
                <p>Average Temperature:${avgTemp}</p><p>Max Temperature: ${maxTemp}</p>
                <p>Min Temperature: ${minTemp}</p>`    
                
            }
            
        })

            const daysArr = ["Today", "Tomorrow", "Day After-Tomorrow"]
            for (let i = 0; i < daysArr.length; i++) {
                let avgTemp = data.weather[i].avgtempF;
                let maxTemp = data.weather[i].maxtempF;
                let minTemp = data.weather[i].mintempF;
                const div = document.querySelectorAll(".daysAfter div");
                div[i].innerHTML = `<h3>${daysArr[i]}</h3>
                <p><b>Average Temperature:</b> ${avgTemp}</p><p><b>Max Temperature: </b>${maxTemp}</p>
                <p><b>Min Temperature: ${minTemp}</b></p>`    
                
            }
        })
        .catch(console.log)
        event.target.reset()
        document.querySelector(".history aside ul p").textContent = "";          
    })
        
