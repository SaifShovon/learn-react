import React from 'react'
import ReactDOM from 'react-dom'

function Student(props){
	return 	<h1>Hello {props.name} Your Roll is {props.roll}</h1>
}

function Semester(){
	return  <div>
		<Student name='Saif' roll='1202065'/>
		<Student name='Noman' roll='1202055'/>
	</div>
}

// class Student extends React.Component{
// 	render(){
// 		return 	<h1>Hello {this.props.name} Your Roll is {this.props.roll}</h1>
// 	}
	
// }



setInterval(function(){
ReactDOM.render(
	<div><Semester/> <h2>  Time Now: {new Date().toLocaleTimeString()}</h2></div>,
document.getElementById('root')
	);

},1000);