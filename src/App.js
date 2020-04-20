import React from "react";

function Food({ fav }) {
  return <h3>I Love {fav}!</h3>;
}

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Food fav="bulgogi" />
      <Food fav="ramen" />
      <Food fav="samgyopsal" />
      <Food fav="chookoomi" />
    </div>
  );
}

export default App;
