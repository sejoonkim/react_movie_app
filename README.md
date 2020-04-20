# Movie App with React

## 1. Setup

### Create React App

- `npx create-react-app react_movie_app`
- `package.json`

  - remove `"test"` & `"eject"` in "scripts"

- delete `yarn.lock`

- On Your Network: can connect over wifi

<br/>

### Modify Files and Content

- Delete

  - App.css
  - App.test.js
  - Index.css
  - logo.svg
  - serviceWorker.js
  - setupTests.js

- Modify

  - App.js

    - ```javascript
      import React from "react";

      function App() {
        return <div className="App"></div>;
      }

      export default App;
      ```

  - index.js

    - ```javascript
      import React from "react";
      import ReactDOM from "react-dom";
      import App from "./App";

      ReactDOM.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>,
        document.getElementById("root")
      );
      ```

<br/>

### How React Works?

- creates elements with JS
- pushes into HTML
- At `index.html`
  - `<div id="root">Here</div>`
  - Renders everything in `Here`
- Process
  1. App loads
  2. load empty HTML
  3. React pushes written HTML
- Virtual DOM
  - written HTML does not appear in source code

<br/>

<br/>

## 2. JSX & Props

### Create React Component

- Definition of Component
  - function that returns HTML
- What is **JSX**?

  - Introduced by React
  - JS + React

- **JSX #1**: Create `Fruit.js` Component

  1. ```javascript
     import React from "react";
     ```

     - **Must** include in every component
     - To let React know that the code is a JSX component

  2. ```javascript
     function Fruit() {
       return <h3>I love Fruit</h3>;
     }
     ```

  3. In `index.js` - **NOT** Recommended

     - ```javascript
       import React from "react";
       import ReactDOM from "react-dom";
       import App from "./App";
       import Fruit from "./Fruit";

       ReactDOM.render(
           <App />
           <Fruit />,
         document.getElementById("root")
       );
       ```

       - > Parsing error: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?

     - ```javascript
       import React from "react";
       import ReactDOM from "react-dom";
       import App from "./App";
       import Fruit from "./Fruit";

       ReactDOM.render(
         <React.StrictMode>
           <App />
           <Fruit />
         </React.StrictMode>,
         document.getElementById("root")
       );
       ```

       - `<React.StrictMode>` deals with the Parsing error

  4. In `App.js`

     - ```javascript
       import React from "react";
       import Fruit from "./Fruit";

       function App() {
         return (
           <div className="App">
             <h1>Hello</h1>
             <Fruit />
           </div>
         );
       }

       export default App;
       ```

- **JSX #2**: Send Information to Child Components

  1. Passing Information

     - ```javascript
       <Food fav="bulgogi" />
       ```

     - Prop name = Value

  2. Console.log Props

     - ```javascript
       <Food
         fav="bulgogi"
         boolArr={true}
         foodList={["kimchi", 12, true, "gogi", 0]}
       />;

       function Food(props) {
         console.log(props);
         return <h3>I Love Food!</h3>;
       }
       /*
       {fav: "bulgogi", boolArr: true, foodList: Array(5)}
       boolArr: true
       fav: "bulgogi"
       foodList: Array(5)
       0: "kimchi"
       1: 12
       2: true
       3: "gogi"
       4: 0
       length: 5
       __proto__: Array(0)
       */
       ```

  3. Get Elements in Props Object - `ES6 Destructuring Syntax`

     - ```javascript
       function Food({ fav }) {
         return <h3>I Love {fav}!</h3>;
       }
       // Browser: I Love bulgogi!
       ```

<br/>

### Dynamic Component Generation

- Simulate received data from API

1. Create array of food

   - { name: "" image: "" }

2. `.map(callback)`

   - takes an array, returns a modified array

3. Provide `<Food />` with props

   - ```javascript
     {
       foodILike.map((food) => {
         return <Food name={food.name} image={food.image} />;
       });
     }
     ```

4. Modify function Food

   - ```javascript
     function Food({ name, image }) {
       return (
         <>
           <h3>I Love {name}!</h3>
           <img src={image} alt={name} />
         </>
       );
     }
     ```
