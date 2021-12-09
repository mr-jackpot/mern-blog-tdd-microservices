import './Login.css'

const Login = () => {
  
    return (
        <form className="loginForm" data-cy='login-form-wrapper'>
            <label>
            <input className="loginBox"
                placeholder="Enter Username"
                name="username"
                data-cy="username-login-box"
            />
            </label>
            <label>
            <input className="passwordBox"
                placeholder="Enter password"
                name= "password"
                data-cy="password-login-box"
            />
            </label>
            <br/>
            <input type="submit" value="Submit" className="submitButton" data-cy="login-form-submit"/>
        </form>
    )
}

export default Login;