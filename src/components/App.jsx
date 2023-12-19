import React, { useState, useEffect } from "react";
import Form from "./Form";

function App({posts}) {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
  }, [])

  
  return (
    <div>
      {counter}
      <h1
        onClick={() => {
          setCounter((value) => value + 1);
        }}
      >
        Hello World2
      </h1>
      <Form/>
      {
        posts.map((post)=><p>
            {post.title}
        </p>)
      }
    </div>
  );
}

export default App;
