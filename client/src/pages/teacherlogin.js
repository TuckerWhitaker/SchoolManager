import "./login.css";

function teacherlogin() {
  return (
    <div className="LoginParent">
      <div className="LoginHeader">Teacher Sign In</div>
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

export default teacherlogin;
