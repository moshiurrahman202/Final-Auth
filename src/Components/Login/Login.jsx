

const Login = () => {
    const loginformhandle = e => {
        e.preventDefault()
        console.log("clicked => login=>");
        
    } 
    return (
        <div className="flex justify-center">
            <form onSubmit={loginformhandle} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend text-2xl">Login now!</legend>

  <label className="label">Email</label>
  <input type="email" className="input" placeholder="Email" />

  <label className="label">Password</label>
  <input type="password" className="input" placeholder="Password" />

  <button className="btn btn-neutral mt-4">Login</button>
</form>
        </div>
    );
};

export default Login;