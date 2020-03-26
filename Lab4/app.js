class App {
    constructor(){
       this.getLocation();
       this.lat;
       this.lng;
    }

    getLocation(){
        navigator.geolocation.getCurrentPosition(
        this.gotLocation.bind(this),
        this.errorLocation.bind(this)
        );
    }

    gotLocation(result){
       this.lat = result.coords.latitude;
       this.lng = result.coords.longitude;
       this.getWeather();
    }
// Get the battery!
getbattery(){
    navigator.battery || navigator.webkitBattery || navigator.mozBattery;
    this.gotLocation.bind(this)
    console.warn("Battery level: ", battery.level); // 0.58


}

gotbattery(){
    this.bat = battery.level;
    this.getbattery();

}

// A few useful battery properties






    getWeather(){
        // https://api.darksky.net/forecast/4bc0f32cb110e0f62f38efb677cfebcc/37.8267,-122.4233
        let url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/4bc0f32cb110e0f62f38efb677cfebcc/${this.lat}, ${this.lng}?units=si`;

        fetch(url)
        .then(response => {
           return response.json();
        }).then(data => {
            if(data.currently.temperature < 10) {
                var goodweather = document.getElementById("goodweather");
                goodweather.style.display = "none";

            document.querySelector("#inside").innerHTML = data.currently.summary;

            } else {

                var badweather = document.getElementById("badweather");
                badweather.style.display = "none";
                

                document.querySelector("#outside").innerHTML = data.currently.summary;

            }
            
        }) .catch(err=>{
            console.log(err);
        })
    }


    errorLocation(err){
        console.log(err);
    }
}

let app = new App();