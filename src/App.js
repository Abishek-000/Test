import React from 'react'

import  { useState } from "react";

function App() {
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [email, setemail] = useState("");

  const abi = (c) => {
    c.preventDefault();
    console.log("Name:", name);
    console.log("age:", age);
    console.log("email:", email);

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={abi}>
        <div>
        
          <input
            type="name"
            id="name"
            value={name}
            onChange={(c) => setname(c.target.value)}
           
            autoComplete="name"
          />
        </div>
        <div>
          
          <input
            type="age"
            id="age"
            value={age}
            onChange={(c) => setage(c.target.value)}
           
            autoComplete="current-age"
          />
        </div>


        <div>
          
          <input
            type="email"
            id="email"
            value={email}
            onChange={(c) => setemail(c.target.value)}
           
            autoComplete="email"
            required
          />
        </div>





        <button type="submit">Login</button>
      </form>
   
    </div>
  );
}
}


  
export default App;
