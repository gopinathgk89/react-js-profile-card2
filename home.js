import React from 'react'


function User(props){
	return(
		<>

		<div className="container">
        <span className="pro">Online</span>
        <img src="images\ml.JPG" alt="user"/> 
        <h3>{props.name}</h3>
        <h3 className="salem">{props.city}</h3>
        <p>{props.Developer}</p>
        <div className="button">
        <button className="msg">Message</button>

        <button className="follow">Following</button>
        </div>
        <div>
        <h6>Skills</h6>
        <ul>{props.Skills.map((Skills,index)=>(
        	<li key={index}>{Skills}</li>
        	))}
         
        </ul>
        </div>


		</div>

</>

	);
}
const Home =()=>{
	return <User name="james" city="thanjai" Developer="Front End Developer" Skills={
		["UI/UX","Front End Development","Html","css","javascript","React","node"]
	}/>;

  };

export default Home;
