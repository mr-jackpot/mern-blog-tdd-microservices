import './Login.css'

const Login = () => {
  
    return (
        <div>
        <input className="loginBox"
            value="Enter Username"
            name="username"
        />
        <input className="passwordBox"
            value="Enter password"
            name= "password" 
        />
        </div>
    )
}

export default Login;