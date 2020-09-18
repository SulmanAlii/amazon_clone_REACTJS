import React,{useState} from "react";
import "../css/Login.css";
import Button from "@material-ui/core/Button";
import { auth } from './firebase';
import { Link, useHistory } from 'react-router-dom';
function Login() {

  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const login = () => {
    auth.signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      
      }).catch((e) => {
        alert(e.message);
    })
    
  }

  const register = () => {
    auth.createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/")
      
      }).catch((e) => {
        alert(e.message);
      })
  }

  const NameValue = (e) => {
    setEmail(e.target.value);
  }

  const passwordValue = (e) => {
    setPassword(e.target.value);
 }
  return (
    <div className="login">
      <div className="login_fields">
        <img className="amazonlogo" src="data:image/png;base64,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" alt="img" />
        <div className="fields">
          <label>Email</label>
          <input type="email" placeholder="Your Name" onChange={NameValue} value={email}/>
        </div>
        <div className="fields">
          <label>Password</label>
          <input onChange={passwordValue} value={password} type="password" placeholder="Your password" />
        </div>
        <div className="fields btn">
          <Button  onClick={login} variant="contained" color="primary" style={{background:"rgb(224 124 0)"}} href="#contained-buttons">Sign in</Button><br/>
          <Button  onClick={register}  variant="contained" color="primary" href="#contained-buttons">Create an account</Button>  
        </div>
      </div>
    </div>
  );
}

export default Login;
