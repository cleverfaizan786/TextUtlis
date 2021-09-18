import React ,{useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from '@material-ui/core/Button';
//import Btns from './Btns';
import './App.css';

export default function TextUtils(){
	let [text, updtext]=useState('');
 const [twice, updtwice]=useState('');
 
 //Displaying the property of alert
  let [alertNow, setAlert]=useState({
    occurance:'none',
    type:'',
    message:'',
    longMessage:""
});

const justChange=(e)=>{
updtext(e.target.value)
}

//Using Regex to extract numbers
let numb=/[0-9]/g;

//Converting to UpperCase using alert
const toUpper=()=>{
if(text===""){
//document.title="TextUtils-Generated"
 setAlert((prevState)=>{
 	return {
   occurance:'block',
   type:'alert alert-danger',
   message:'Error: ',
   longMessage:'Please enter some text!!'
}
});
 
 setTimeout(()=>{
 	setAlert((prevState)=>{
 	return {
 occurance:'none',
    type:'',
    message:'',
    longMessage:""
  }
 }) 
 },3000)
 }
else {
setAlert((prevState)=> {
	return {
		occurance:'block',
		type:'alert alert-success',
		message:'Success: ',
		longMessage:'Successfully converted!!'
		}
	})
setTimeout(()=>{
 	setAlert((prevState)=>{
 	return {
 occurance:'none',
    type:'',
    message:'',
    longMessage:""
 }
 })
  },3000)
 updtwice(text.toUpperCase()) 
 }
}

//Maintaining the disablity of buttons
const checkDisability=()=>{
	return (text==='' ) ? true:false
	}
const copY=()=>{
	var labelText=document.getElementById('textArea');
	labelText.select()
	labelText.setSelectionRange(0,9999);
	navigator.clipboard.writeText(text)
	//alert(`Copied : ${text}`)
	setAlert((prevState)=> {
	return {
		occurance:'block',
		type:'alert alert-success',
		message:'Success: ',
		longMessage:'Successfully copied!!'
		}
	})
	
	setTimeout(()=>{
 	setAlert((prevState)=>{
 	return {
 occurance:'none',
    type:'',
    message:'',
    longMessage:""
 }
 })
  },3000)
	}
	return(
	<>
	<div style={{height:'50px'}}>
	<div className={alertNow.type} role="alert" style={{display:alertNow.occurance, height:'55px'} }>
  <strong>{alertNow.message}</strong>  {alertNow.longMessage}
</div>
</div>
	<h1 style={{textAlign:'center', fontFamily:'times',marginTop:'5.5px', marginBottom:'10px'}} ><strong>Text Analyzer</strong></h1>
	<div className="form-group">
    
    <textarea className="form-control"  value={text} id="exampleFormControlTextarea1" rows="7" onChange={justChange} id="textArea" ></textarea>
  </div>
  <div className="btns">
	<Button variant="contained" color="primary"  onClick={toUpper} disabled={false}>Upper Case</Button> 
	<button className="btn btn-danger" onClick={()=>updtwice(text.toLowerCase())} disabled={ checkDisability() }>Lower Case</button> 
	<button className="btn btn-primary" onClick={()=>updtwice(text.length) } disabled={ checkDisability() } >No.of Words</button>
	<Button variant="contained" color="secondary" onClick={()=>updtext('')}>Clear Text</Button>
	<button className="btn btn-info" onClick={()=>updtwice(text.replace(/ /g, '').length) } disabled={ checkDisability() }>Without Spaces</button>
	<button className="btn btn-success" onClick={()=>(text.match(numb) === null) ? alert("No numbers in given text") :  updtwice(text.match(numb))} disabled={ checkDisability() } >Display Numbers</button>
	<button className="btn btn-primary" onClick={copY} disabled={ checkDisability() }>Copy Text</button>
	</div>
	<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"onClick={()=>{document.body.setAttribute('style', 'background-color:white; color:black;'); document.getElementById('textArea').setAttribute('style','background-color:white; color:black;')} }     style={{marginLeft:'5px'}}/>
  <label className="form-check-label" htmlFor="flexRadioDefault1" style={{marginLeft:'7px'}}>
    Light Mode
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={()=>{ document.body.setAttribute('style', 'background-color:black; color:white;'); document.getElementById('textArea').setAttribute('style', 'background-color:#000080; color:white;')} } style={{marginLeft:'5px'}}/>
  <label className="form-check-label" htmlFor="flexRadioDefault2" style={{marginLeft:'7px'}}>
    Dark Mode
  </label>
</div>
	<div style={{margin:'15px 0px 0px 15px' ,  fontSize:'2.2rem' , fontFamily:'times' }}>Preview: <br /><div style={{fontSize:'1.1rem' }}>{twice} </div> </div>
	
	</>
	);
	
	
	
	}






