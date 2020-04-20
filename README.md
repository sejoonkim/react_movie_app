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

- Create `Fruit.js` Component

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
