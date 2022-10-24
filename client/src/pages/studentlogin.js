import "./login.css";

function studentlogin() {
  return (
    <div className="LoginParent">
      <div className="LoginHeader">Student Sign In</div>
      <input type="text" className="LoginInp" placeholder="Username"></input>
      <input
        type="password"
        className="LoginInp"
        placeholder="Password"
      ></input>
      <button className="LoginBtn">Sign in</button>
    </div>
  );
}

export default studentlogin;
