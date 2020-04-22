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

<br/>

### .map

- ```javascript
  {
    foodILike.map((food) => {
      return <Food name={food.name} image={food.image} />;
    });
  }
  //=>
  {
    foodILike.map(renderFood);
  }
  ```

- in `function renderFood`

  - being executed by the number of elements in `foodILike` array

  - ```javascript
    return <Food name={name} image={image} />;
    ```

- revert the changes in `App.js`

  - > Each child in a list should have a unique "key" prop.

  - All elements in Reach should be unique

  - add `id` to each objects

- give `<Food />` **"key"** prop

  - But not using the number value
  - FOR React's internal use

<br/>

### Protection with PropTypes

- > Check if Props that the Child is getting from Parent, are the ones expected by Child

- add "rating" to each objects in array

- Process of using prop-types

  1. `npm i prop-types`

  2. ```javascript
     import propTypes from "prop-types";
     ```

  3. ```javascript
     Food.propTypes = {
       name: PropTypes.string.isRequired,
       image: PropTypes.string.isRequired,
       rating: PropTypes.string.isRequired,
     };
     ```

     - Write **description of props** that are expected

  4. > Warning: Failed prop type: Invalid prop `rating` of type `number` supplied to `Food`, expected `string`.

     - Error Message

  5. Check for `Type` and `Requiredness`

  6. More at https://reactjs.org/docs/typechecking-with-proptypes.html

<br/>

<br/>

## 3. State

### Class Components and State

- transform **function component** `App` to **class component**

  - ```javascript
    class App extends React.Component {}
    ```

  - doesn't have `return` method but has `render` method

  - ```javascript
    render() {
        return <h1>I am a class component</h1>;
      }
    ```

- Why class components?

  - has state vs useState()

  - ```javascript
    state = {DATA THAT WILL CHANGE}
    ```

- How to create function(method) inside class?

  - RECOMMENDED

  - ```javascript
    add = () => {};
    ```

<br/>

### State

- ```javascript
  add = () => {
    this.state.count = 1;
  };
  ```

  - > Do not mutate state directly. Use setState().

  - React does not update `render()`

- `this.setState({count: 1})`

  - changes state object and executes render()
  - Virtual DOM -> only changes **what is changed**

- ```javascript
  add = () => {
    this.setState({ count: this.state.count + 1 });
  };

  add = () => {
    this.setState((current) => ({ count: current.count + 1 }));
  };
  ```

  - use the arrow function method

<br/>

### Component Life Cycle

- create ~ kill component
  - Link - https://reactjs.org/docs/react-component.html
  - `Mounting`
    1. **constructor()**
    2. static getDerivedStateFromProps()
    3. **render()**
    4. **componentDidMount()**
  - `Updating`
    1. static getDerivedStateFromProps()
    2. shouldComponentUpdate()
    3. **render()**
    4. getSnapshotBeforeUpdate()
    5. **componentDidUpdate()**
  - `Unmounting`
    1. **componentWillUnmount()**

<br/>

### Design Component for Movie App

- `state`
  - isLoading: boolean
  - movies: array
- `render()`
  - start with presenting "Loading"
- `componentDidMount()`
  - mimic fetch() by `setTimeout(() => {})`

<br/>

<br/>

## Movie App

### Fetch Movies from API

- API - https://yts-proxy.now.sh/list_movies.json

  - Execution time comparison: `componentDidMount()` & `axios`
  - `axios` might take longer time to finish
  - need async-await

- ```javascript
  getMovies = async () => {
      const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
      this.setState((current) => (current.movies = [...movies.data.data.movies]));
      console.log(this.state.movies);
  };

  componentDidMount() {
      this.getMovies();
  }
  ```

<br/>

### Rendering the Movies

- ```javascript
  const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  this.setState((current) => (current.movies = [...movies.data.data.movies]));

  // ES6 Way
  const {
    data: {
      data: { movies },
    },
  } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  this.setState({ movies });
  ```

- `Movies.js`

  - Does not to manage state => use function component(?)
  - `Movie.propTypes`
    - look at the elements in the movie array and write them down
    - copy all "keys" in `Movie.propTypes` to Movie component

- `App.js`

  - different render ways
    1. insider render()
    2. create render_movies()
  - pass props just declared in `Movies.js`

### Styling the Movies

- HTML

  - How to **structure** `Tags`

    - Top-most : `className="container"`
      - Component1: `className="loader"`
        - Child Tag: `className="loader__text"`
      - Component2: `className="movies"`
        - Child Tag: `className="movie"`
          - Child Tag: `className="movie__data"`
            - `className="movie__title"`
            - `className="movie__year"`
            - `className="movie__summary"`

  - ```html
    <img src="{poster}" alt="{title}" title="{title}" />
    ```

    - The `title` attribute is shown as a **tooltip** text when the mouse moves over the element = gives extra information

- CSS

  1. easy implementation = `styled.components`

  2. ```javascript
     <h3 className="movie__title" style={{ backgroundColor: "red" }}>
     ```

  3. create CSS file in `src/`

<br/>

### Adding Genres

- `"class"` Or `"className"`

  - in `HTML`

    - `<p class=""></p>`

  - in JS or JSX
    - `class` is confused with actual JS class
    - so use `className`

- Process

  1. `Movie.js`

     - `Movie.propTypes` -> add genres: `PropTypes.arrayOf(PropTypes.string)`
     - `function Movie` -> add `genres` prop

  2. `App.js`

     - props in `<Movie>` -> add `genres={movie.genres}`

  3. `Movie.js`

     - add `<ul>` -> .map() genres -> get genre, index
     - **.map()** = `function(currentValue, index, arr)`

       - do not be confused by the **order of variables**

     - key: no id, use **index**
