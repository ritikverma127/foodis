import React, { useState } from 'react';
import styles from './Signupfirstdiv.module.css';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

function Signupfirstdiv() {
  // const navigate=useNavigate();
  const [name,setName]=useState('')
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')

  function HandleSubmit(e) {
    e.preventDefault();
    console.log('Hlo');
  axios.post('http://localhost:8000/demo',{name,username,password})
  .then((res)=>{
    console.log(res.data);
    // navigate('/Login')
  })
  .catch(err=>console.log(err))
  }  

  return (
    <>
   <div className={styles.container}>
   <form >
   <input type='text' name='name' placeholder='Name' onChange={(e)=>setName(e.target.value)}/> <br /><br />  
      

    <input type="text" name="username" placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>                                <br /><br />
    


    <input type="password" name="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>                             <br /><br />
  

    <input type='submit' onClick={HandleSubmit}/>
  </form>
</div>
</>

  );
}
export default Signupfirstdiv;
