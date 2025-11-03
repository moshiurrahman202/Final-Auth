import { useState } from "react";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../../Config/__config__final__auth";
import { Link } from "react-router";


const Signup = () => {
    const [errorMessage, setErrorMessage] = useState("")
    const [done, setDone] = useState(false)
    const [showpass, setShowpass] = useState(false)
    

    const handleform = e => {
        e.preventDefault()
        setErrorMessage("")
        setDone(false)
        const email = e.target.email.value
        const pass = e.target.pass.value
        const checked = e.target.checkbox.checked
        // console.log("box=> ", checked);
        // console.log("clicked => ",email, pass);
        
        const pass_pattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/
        if(pass_pattern.test(pass) === false){
            setErrorMessage("Must be more than 6 characters, including number, lowercase letter, uppercase letter")

        }
        if(!checked){
          setErrorMessage("Plz accept trms ans conditions")
          return;
        }
        createUserWithEmailAndPassword(auth, email, pass)
        .then(userCredential => {
            
            const user = userCredential.user;
            console.log(user);
            // email varify
            sendEmailVerification(auth.currentUser)
            .then(() => {
              setDone(true)
            })
            .catch(error => {
              console.log(error);
              
            })
            
        })
        .catch(error => {
            console.log(error);
            setErrorMessage(error.message)

            
        })

    }


    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">SignUp now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form className="fieldset" onSubmit={handleform}>
          <label className="label">Email</label>
          <input type="email" name="email" className="input" placeholder="Email" />
          <div className="relative">
            <label className="label">Password</label>
          <input name="pass" type={showpass ? "text" : "password"} className="input" placeholder="Password" />
          <button onClick={() => setShowpass(!showpass)} className="absolute top-6.5 right-6">👁‍🗨</button>
          </div>
          <p><input name="checkbox" type="checkbox" className="checkbox" />   accept terms and conditions</p>
          {
            errorMessage && <div><p className="text-red-600">{errorMessage}</p></div>
          }
          {
             done && <div><p className="text-green-600">It's been successful, and we've sent an email that we can verify you.</p></div>
          }
          <button className="btn btn-neutral mt-4">SignUp</button>
        </form>
        <div><p>Do you already have an account?  <Link to="/login"><a className="link link-hover text-blue-600"> Login</a></Link></p></div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Signup;