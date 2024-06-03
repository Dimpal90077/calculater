const input=document.querySelector('.input')
const search=document.getElementById('search');
const body_img=document.querySelector('.body img');
const temp=document.querySelector('.temp');
const Description=document.querySelector('.Description');
const humidity=document.getElementById('.humidity');
const WINDspeed=document.getElementById('.WINDspeed');
async function checkwheather(city){
    const api_key="14dec2ebe9ea35cedd0bcf869de43674";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key }`;
    const weather_data=await fetch(`${url}`).then (response =>response.json());
    temp.innerHTML=`${Math.round(weather_data.main.temp-273)}°C`;
    Description.innerHTML=`${weather_data.weather[0]. Description}`;
    humidity.innerHTML=`${weather_data.main. humidity}%`;
    WINDspeed.innerHTML=`${weather_data.main. wind.speed}km/hr`;
    switch(weather_data,weather[0].main){
        case 'Clouds':
            body_img.src="cloud.jpg"
break;
            case 'Clear':
                body_img.src="clear.jpg"
break;
                case 'Rain':
                    body_img.src="rain.jpg"
break;
                    case 'Mist':
                        body_img.src="mist.jpg"
                    break;    
    }
   

}




search.addEventListener('click',()=>{
    checkwheather(input.value);

})

