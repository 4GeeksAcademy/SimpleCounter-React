import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faClock} from '@fortawesome/free-solid-svg-icons';

const SecondsCounter = (props) => {
	return (
		<article className="container-fluid mt-4">
			<section className="row bg-dark text-light text-center align-content-center justify-content-center" style={{height:90}}>
				<div className="col-lg-1 display-5 m-0"><FontAwesomeIcon icon = {faClock} /></div>
				<div className="col-lg-1 display-5 m-0">{props.segundos6}</div>
				<div className="col-lg-1 display-5 m-0">{props.segundos5}</div>
				<div className="col-lg-1 display-5 m-0">{props.segundos4}</div>
				<div className="col-lg-1 display-5 m-0">{props.segundos3}</div>
				<div className="col-lg-1 display-5 m-0">{props.segundos2}</div>
				<div className="col-lg-1 display-5 m-0">{props.segundos}</div>
			</section>
		</article>
	);
};

export default SecondsCounter;