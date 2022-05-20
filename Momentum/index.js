fetch(' https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=dark')
.then(res => res.json())
.then(data => {document.body.style.backgroundImage =
    `url(${data.urls.regular})`,
    document.getElementById('author').textContent =`By: ${data.user.name}` })
    .catch(err => {
        //KAKO STAVITI DEFAULT SLIKU CAK I KADA SE POJAVI ERROR)
        //RECIMO DA ZELIMO DA KORISNIK PROMJENI SLIKU ILI BAR KAKVA SLIKA DA BUDE
        document.body.style.backgroundImage = 
        `url(https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDE2NzA&ixlib=rb-1.2.1&q=80&w=1080)`
           // Report the error to some kind of service
    })

    fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong")
        }
        return res.json()
    })
    .then(data => {
        document.getElementById('crypto-top').innerHTML =  
        ` <img src=${data.image.small}>
        <span>${data.name}</span> &nbsp; &nbsp; <br>
        `
        document.getElementById('crypto').innerHTML += `
        <p> ✔ $${data.market_data.current_price.usd}</p>
        <p> 👆 $${data.market_data.high_24h.usd}</p>
        <p> 👇 $${data.market_data.low_24h.usd}</p>
      
        `
        /**
         * Challenge: Add the name and icon of the cryptocurrency
         * to the upper-left of the dashboard page
         * 
         * Use `data.name` and `data.image.small` to access that info
         */
    })
    .catch(err => {document.querySelector('.time').textContent = err})

    function getCurrentTime() {
        const date = new Date()
        document.querySelector(".time").textContent = date.toLocaleTimeString("it-IT", {timeStyle: "medium"})
    }
    
    setInterval(getCurrentTime, 1000)

    navigator.geolocation.getCurrentPosition(position => {
        fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
            .then(res => {
                if (!res.ok) {
                    throw Error("Weather data not available")
                }
                return res.json()
            })
            .then(data => {
                const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
                document.getElementById('weather').innerHTML = `
                    <img src='${icon}'>  
                         <p class='weather-temp'>${Math.round(data.main.temp)} °C</p>
                         <p class='weatherCity'>${data.name}</p>
                `
            })
            .catch(err => console.log(err))
    });


    // fetch("https://type.fit/api/quotes")
    // .then(res => {
    //     if(!res.ok){
    //         throw new Error('Upps, something is wrong, hold on :)')
    //     } return res.json()
    // })
    // .then(data => {
    //     // document.getElementById('qoutes').innerHTML = ``
    //     console.log(data[length].text)
    // })

    fetch('https://api-nodejs-todolist.herokuapp.com/task')
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong")
        }
        return res.json()
    })
    .then(data => console.log(data))