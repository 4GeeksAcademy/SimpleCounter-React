import React from "react";
import SecondsCounter from "./SecondsCounter.jsx";

const Home = (props) =>{
    return <SecondsCounter segundos={props.segundos}
    segundos2={props.segundos2}
    segundos3={props.segundos3}
    segundos4={props.segundos4}
    segundos5={props.segundos5}
    segundos6={props.segundos6}/>;
}
export default Home;
