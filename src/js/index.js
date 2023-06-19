import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import Home from "./component/home.jsx";


let segundos = 0;
let segundos2 = 0;
let segundos3 = 0;
let segundos4 = 0;
let segundos5 = 0;
let segundos6 = 0;

setInterval(function() {
segundos++; 
if (segundos === 10) {
    segundos = 0;
    segundos2++; 
    if (segundos2 ===10){
        segundos2 = 0
        segundos3++;
    } if (segundos3 ===10){
            segundos3 = 0
            segundos4++;
        }if (segundos4 ===10){
            segundos4 = 0
            segundos5++;
            }if (segundos5 ===10){
                segundos5 = 0
                segundos6++;
        }
    }
    
ReactDOM.render(<Home segundos={segundos} segundos2={segundos2} segundos3={segundos3} segundos4={segundos4} segundos5={segundos5} segundos6={segundos6}/>, document.querySelector("#app"));
}, 1000);