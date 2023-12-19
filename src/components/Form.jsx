import React, { useState, useEffect } from "react";

function Form() {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
  }, [])

  
  return (
    <div>
        Login Form
      <input type="text" placeholder="email"/>
    </div>
  );
}

export default Form;
