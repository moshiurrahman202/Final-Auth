import { sendPasswordResetEmail  } from "firebase/auth";
import { auth } from "../../Config/__config__final__auth";
import { Link, useLocation, useNavigate } from "react-router";
import { use, useRef } from "react";
import { AuthContext } from "../../Context/AuthContext";

const Login = () => {
    const emailRef = useRef()
    const {logIn, signInWithGoogle} = use(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location);
    
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
                navigate(location.state || "/")
                console.log("login successful => ❤");
                
            }
            
        })
        .catch(error => {
            console.log("error => user=> ",error);
            
        })

        
    } 
    const handleGoogleLogin = () => {
        signInWithGoogle()
        .then(res => {
            navigate(location.state || "/")
            console.log(res);
            
        })
        .catch(err => {
            console.log(err);
            
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
            <div className="flex flex-col items-center">
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

    <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5] w-xs">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>

</div>
        </div>
    );
};

export default Login;