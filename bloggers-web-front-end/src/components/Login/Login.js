import './Login.css'

const Login = () => {
  
    return (
        <form className="loginForm">
            <label>
            <input className="loginBox"
                placeholder="Enter Username"
                name="username"
            />
            </label>
            <label>
            <input className="passwordBox"
                placeholder="Enter password"
                name= "password" 
            />
            </label>
            <br/>
            <input type="submit" value="Submit" className="submitButton"/>
        </form>
    )
}

export default Login;