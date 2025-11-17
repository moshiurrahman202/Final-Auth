import { sendPasswordResetEmail  } from "firebase/auth";
import { auth } from "../../Config/__config__final__auth";
import { Link, useNavigate } from "react-router";
import { use, useRef } from "react";
import { AuthContext } from "../../Context/AuthContext";

const Login = () => {
    const emailRef = useRef()
    const {logIn} = use(AuthContext)
    const navigate = useNavigate()
    const loginformhandle = e => {
        e.preventDefault()
        console.log("clicked => login=>");
        const email = e.target.email.value
        const pass = e.target.pass.value
        console.log(email, pass);
        
        logIn(email, pass)
        .then(res => {
            // console.log("user => done=>",res);
            if(!res.user.emailVerified){
                alert("Please verify your email address!!")
            }else{
                navigate("/")
                console.log("login successful => ❤");
                
            }
            
        })
        .catch(error => {
            console.log("error => user=> ",error);
            
        })

        
    } 
    const forgetpasshandler = () => {
        const email = emailRef.current.value;
        sendPasswordResetEmail(auth, email)
        .then(() => {
            alert("check your email we sent a email that can you reset your password")
        })
        .catch(error => {
            console.log(error.message);
            
        })
        
    }
    return (
        <div className="flex justify-center">
            <form onSubmit={loginformhandle} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend text-2xl">Login now!</legend>

  <label className="label">Email</label>
  <input name="email" type="email" ref={emailRef} className="input" placeholder="Email" />

  <label className="label">Password</label>
  <input name="pass" type="password" className="input" placeholder="Password" />
        <div onClick={forgetpasshandler}><a className="link link-hover">Forget Password?</a></div>
  <button className="btn btn-neutral mt-4">Login</button>
  <div><p>New to this website? please <Link to="/signup"><button className="link link-hover text-blue-600"> SignUp</button></Link></p></div>
</form>

        </div>
    );
};

export default Login;