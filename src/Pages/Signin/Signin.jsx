import  Navbar from "../../Components/Navbar/Navbar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import {auth} from "../../Services/fireConfig"
import { signInWithEmailAndPassword } from "firebase/auth";
const Signin = () => {
    const [email,setEmail]=useState('');
    const [password,setPass]=useState('');
    const navigate = useNavigate();
    const onSubmit=async()=>{
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigate("/events")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            });
        setEmail('');
        setPass('');
        
    }
    return (
        <div style={{display:"flex",flexDirection:"column"}}>
            <Navbar/>
            <div style={{display:"flex",flexDirection:"column",margin:"50% 0%",alignItems:"Center"}}>
            <a className="btn btn-ghost normal-case text-2xl text-white logo">events<span className="logoup logo font-bold">UP</span></a>
                <Form.Group className="mb-3" controlId="formBasicEmail" style={{margin:"0% 15%"}}>  
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" style={{padding:"0.5em 0em"}} onChange={(e)=>setEmail(e.target.value)}/>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" style={{padding:"0.5em 0em"}} onChange={(e)=>setPass(e.target.value)}/>
                </Form.Group>
                <a href="/signup">New user</a>
                <Button variant="primary" type="submit"style={{width:"50%",margin:"10%"}} onClick={()=>onSubmit()}>
                    Sign in
                </Button>
            </div>
        </div>
    );
}
export default Signin;