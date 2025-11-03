import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Config/__config__final__auth";
import { Link } from "react-router";

const Login = () => {
    const loginformhandle = e => {
        e.preventDefault()
        console.log("clicked => login=>");
        const email = e.target.email.value
        const pass = e.target.pass.value
        console.log(email, pass);
        
        signInWithEmailAndPassword(auth, email, pass)
        .then(res => {
            console.log("user => done=>",res);
            if(!res.user.emailVerified){
                alert("Please verify your email address!!")
            }
            
        })
        .catch(error => {
            console.log("error => user=> ",error);
            
        })

        
    } 
    return (
        <div className="flex justify-center">
            <form onSubmit={loginformhandle} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend text-2xl">Login now!</legend>

  <label className="label">Email</label>
  <input name="email" type="email" className="input" placeholder="Email" />

  <label className="label">Password</label>
  <input name="pass" type="password" className="input" placeholder="Password" />
        <div><a className="link link-hover">Forget Password?</a></div>
  <button className="btn btn-neutral mt-4">Login</button>
  <div><p>New to this website? please <Link to="/signup"><button className="link link-hover text-blue-600"> SignUp</button></Link></p></div>
</form>

        </div>
    );
};

export default Login;