import React from "react";


function Header({ onStart }) {
  return (
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <h1>TaskDo</h1>
      <p>Manage Your Task Checklist Easily</p>
      <button onClick={onStart} className="button-52" role="button">
        Lets Start
      </button>
    </div>
  );
}

export default Header;
