import "./login.css";

function Login(props) {
   
    //props: LoginType="Teacher" or "Student"

    return <div className="LoginParent">
    <div className="LoginHeader">{props.LoginType} Sign In</div>
    <input type="text" className="LoginInp" placeholder="Username"></input>
    <input
      type="password"
      className="LoginInp"
      placeholder="Password"
    ></input>
    <button className="LoginBtn">Sign in</button>
  </div>;
  }

export default Login;