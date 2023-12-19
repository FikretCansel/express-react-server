import React, { useState, useEffect } from "react";

function AboutUs({posts}) {
  const [counter, setCounter] = useState(1);

  
  return (
    <div>
      {counter}
      <h1
        onClick={() => {
          setCounter((value) => value + 1);
        }}
      >
        Welcome About us Page
      </h1>
      {
        posts.map((post)=><p>
            {post.title}
        </p>)
      }
    </div>
  );
}

export default AboutUs;
