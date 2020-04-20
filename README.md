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
