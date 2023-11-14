const paragraph=document.getElementById('paragraph');
const loadP=document.getElementById('loadP');
const loader=document.getElementsByClassName('lds-roller');
const inputCity=document.getElementById('inputCity');
const btnSearch=document.getElementById('btnSearch');
const nameCountry=document.getElementById('nameCountry');
const city=document.getElementById('city');
const temp=document.getElementById('temp');
const wind=document.getElementById('wind');
const icon=document.getElementsByTagName('img');
const APIKEY='4a28794ad2b727601b013948563d4393';

btnSearch.addEventListener('click',() => {
    loader[0].style.display='inline-block';
    nameCountry.innerText ='';
    city.innerText ='';
    temp.innerText ='';
    wind.innerText ='';
    if(document.getElementById('inputCity').value!=''){
            openWeather(inputCity.value)
            .then((respuestaDelClima)=>{
                loader[0].style.display='none';
                nameCountry.innerText=respuestaDelClima.sys.country
                city.innerText=respuestaDelClima.name
                temp.innerText=Number.parseFloat((respuestaDelClima.main.temp)-273.15).toFixed(2)
                wind.innerText=respuestaDelClima.wind.speed
                const iconWeather=respuestaDelClima.weather[0].icon
                icon[0].setAttribute('src',`https://openweathermap.org/img/wn/${iconWeather}@2x.png`)
                console.log(respuestaDelClima);
            })
            .catch((error)=>console.log(error));
            document.getElementById('inputCity').value='';
        
    }
})
const openWeather=async(city) =>{
    const getDataFromAPIWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`)  
    const responseData = await getDataFromAPIWeather.json();
    return responseData;
}
