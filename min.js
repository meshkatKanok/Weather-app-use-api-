let APIkey = `a5af03224af85349efaacac697ac55df`;
const sBtn = document.getElementById("s-btn");
sBtn.addEventListener("click", evenClick = () => {

    let city = document.getElementById('input-Value').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`;
    fetch(url)
        .then(res => res.json())
        .then(data => temdisplay(data)
            // const tcity = data.name;
            // const tem = data.main.temp - 273.15;
            // const weather = data.weather[0].description;
            // const showimg = data.weather[0].icon;
            // document.getElementById('city').innerText = tcity;
            // document.getElementById('temp').innerText = tem.toFixed(0);
            // document.getElementById('weather').innerText = weather;
            // console.log(showimg)
            // const url = `http://openweathermap.org/img/wn/${ showimg}@2x.png`;
            // const imgIcon = document.getElementById('weather');
            // imgIcon.setAttribute('src', url);
        )
        .catch(res => confirm("please Add a Current City"))

});
const setInnerText = (id, text) => {
    document.getElementById(id).innerHTML = text

}
const temdisplay = (data) => {
    const temp = data.main.temp - 273.15;
    setInnerText("city", data.name);
    setInnerText("temp", temp.toFixed(0));
    setInnerText("weather", data.weather[0].description);
    const url = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    imgicone = document.getElementById("weather");
    imgicone.setAttribute('src', url)


}