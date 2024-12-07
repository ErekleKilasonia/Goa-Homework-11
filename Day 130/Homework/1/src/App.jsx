import React from "react";
import ProfileList from "./ProfileList";
function App() {
  const arr = [{name:"erekle",age:14,occupation:"Goa's crew leader"}];
  return <ProfileList profiles={arr}/>
}

export default App;
