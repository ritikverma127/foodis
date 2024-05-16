import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import styles from './Login.module.css'
import axios from 'axios';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    axios.post('http://localhost:8000/login', { username, password })
      .then((result) => {
        console.log(result);
        if (result.data==='success Password Match') {
          navigate('/'); 
        } 
      })
      .catch(err => console.log(err));
  }

  return (
    <>
    
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <input type="text" name="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
          <input type="text" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br/>
          <input type="submit" value="Sign Up" />
        </form>
          </div>
    </>
  );
}
