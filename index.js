//import React, {useState, useEffect} from 'react';

const rootElement = document.getElementById('root');

function Card(props){
	const linked = useLinkedIn(false, 0); //booleanos y numeros siempre se pasan sin comillas
	const [img, setImg] = React.useState("avatar.JPG");
	const [name, setName] = React.useState("Joshua Esperilla Anaya");
	const [age, setAge] = React.useState("21 años"); 
	const [sex, setSex] = React.useState("Hombre");
	const [career, setCareer] = React.useState("ITIt");
	const [sign, setSign] = React.useState("escorpio.png");
	const [btn1, setBtn1] = React.useState("linkedin.png");
	const [bio, setBio] = React.useState("Me gusta viajar, tocar la guitarra, escuchar a Ed Sheeran y a veces me confunde demasiado el Desarrollo Web");

	return(
				<div className="card">
					<img src={img}/>
					<div className="card-data">
						<h1>
					    	{name}
					  	</h1>
					  	<div className="card-personal-data">
						  	<h2>
						    	{age}
						  	</h2>
						  	<h2>
						    	{sex}
						  	</h2>
						  	<h2>
						    	{career}
						  	</h2>
						  	<img src={sign}/>
					  	</div>
					  	<p>
					    	{bio}
					  	</p>
					  	<div className="botones">
					  		<a className="contador">Visitas {linked.visit}</a>
					  		<img src={btn1} onClick={linked.onClick} /> 
					  		{/*El primer onClick es el evento que trigerea el comportamiento del alias OnClick dentro de linked*/}
					  	</div>
				  	</div>
				</div>
			);
}

function useLinkedIn(bool, num){

	const [click, setClick] = React.useState(bool);

	const [visit, setVisit] = React.useState(num);

	function imageClick(){
		window.open('https://www.linkedin.com/in/joshuaesperilla', '_blank').focus()
		console.log('Si funciona!');
		setClick(true);
		setVisit(visit+1);
	}
	return{
		click,
		visit,
		onClick: imageClick // OnClick aqui es un alias a mi funcion
	};
}


ReactDOM.render(
	<Card/>,
	rootElement
)