import { useState,useEffect } from "react";
export default function Weather()
{   
    const [city,setCity] = useState("tbilisi");
    const [temp,setTemp] = useState(1)
    
    const handleSubmit = (e) =>
    {
        
        e.preventDefault()
        setCity(e.target.city.value)
        e.target.city.value = ""
    }
    useEffect(()=>{
        const apiKey = "3bd9b53a9b9d4d36894133733241011";
        const api = fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`).then(resp=>resp.json()).then(data=>{
            setTemp(data.current.temp_c)
        }).catch((error)=>console.log("city not found"))}
    ,[city])
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter City" name="city" required/>
                <button>submit</button>
            </form>
            <p>temperature: {temp}°C</p>
            <p>city: {city}</p>
        </>
    )
}