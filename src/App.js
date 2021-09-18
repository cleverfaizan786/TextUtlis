import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App=()=>{
	 let [details, setDetails]=useState({
		user: '',
		password: "",
		number:''
		
		})
		const setUserInfo=(e)=>{
			const {name, value}=e.target;
			setDetails((prevState)=>{
				
				return {
					...prevState,
					[name]:value
					
					}
				
				})
			}
			
			
	const [newEntry, setEntry]=useState([]);
	const submitThis=(e)=>{
	if(details.user==='' | details.password==='' | details.number === '') { 
alert("You cannot leave this empty" ) 
}
else {
 setEntry([{name:details.user, password:details.password, number:details.number}])
 }
		e.preventDefault();
		
		}
	
	
	return (
	<React.Fragment>
 <h1>Please login!!</h1>
<form action="" onSubmit={submitThis}>
<label htmlFor="name">Name:</label>
<input type="text"  placeholder="Enter Your Name" onChange={setUserInfo} name="user" id="name"/>
<label htmlFor="password">Password:</label>
<input type="password" placeholder="Enter Password" onChange={setUserInfo} name="password" id="password"/>
<label htmlFor="number">Number:</label>
<input type="number" placeholder="Enter number" onChange={setUserInfo} name="number" id="number" />
<div className="btn">
<Button variant="contained" type="submit"  color="primary"> Submit </Button>

</div>
</form>

	{/*<button className="btn btn-success">Hello dude</button>*/}
{
newEntry.map((person)=>{
return (
<h2>name:{person.name} id:{person.password} number:{person.number}</h2>
	)
})
}
</React.Fragment>
);
}
export default App;