class App {
    constructor() {
        this.getLocation();
        this.lat;
        this.lng;
        this.bat;
    }

    getLocation() {
        navigator.geolocation.getCurrentPosition(
            this.gotLocation.bind(this),
            this.errorLocation.bind(this)
        );
    }

    gotLocation(result) {
        this.lat = result.coords.latitude;
        this.lng = result.coords.longitude;
        this.getWeather();
    }


    getsuperhero() {
        let url = `https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/2952368384829938/339`;
        fetch(url)
        .then(response =>{
             console.log(response);
            return response.json();
         
                
            }).then(data => {
                document.querySelector("#superhero").innerHTML = data.name;
                document.querySelector("#superhero2").innerHTML = data.name;

                
            }).catch(err =>{
                console.log(err);
            });
    }




    getWeather() {
        // https://api.darksky.net/forecast/4bc0f32cb110e0f62f38efb677cfebcc/37.8267,-122.4233
        let url2 = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/4bc0f32cb110e0f62f38efb677cfebcc/${this.lat}, ${this.lng}?units=si`;



        fetch(url2)
            .then((response) => {
                console.log(response);
                return response.json();
            }).then(data => {
                if (data.currently.temperature < 5) {
                    var goodweather = document.getElementById("goodweather");
                    goodweather.style.display = "none";

                    document.querySelector("#inside2").innerHTML = data.currently.summary;
                    document.querySelector("#inside").innerHTML = data.currently.temperature;

                    navigator.battery || navigator.mozBattery || navigator.webkitBattery;


                    navigator.getBattery().then(function (battery) {
                        function updateAllBatteryInfo() {
                            updateLevelInfo();

                        }
                        updateAllBatteryInfo();

                        function updateLevelInfo() {
                            document.querySelector("#battery").innerHTML = (battery.level * 100 + "%");
                        }

                    }


                    )
                } else {

                    var badweather = document.getElementById("badweather");
                    badweather.style.display = "none";


                    document.querySelector("#outside2").innerHTML = data.currently.summary;
                    document.querySelector("#outside").innerHTML = data.currently.temperature;


                    navigator.getBattery().then(function (battery) {
                        function updateAllBatteryInfo() {
                            updateLevelInfo();

                        }
                        updateAllBatteryInfo();

                        function updateLevelInfo() {
                            document.querySelector("#battery2").innerHTML = (battery.level * 100 + "%");
                        }

                    })
                }

            }).catch(err => {
                console.log(err);
            })
    }


    errorLocation(err) {
        console.log(err);
    }
}



let app = new App();
