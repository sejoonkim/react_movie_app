import React from "react";

function Food({ name, image }) {
  return (
    <>
      <h3>I Love {name}!</h3>
      <img src={image} alt={name} />
    </>
  );
}

const foodILike = [
  {
    name: "Bulgogi",
    image:
      "https://assets.bonappetit.com/photos/57acd741f1c801a1038bc801/16:9/w_2560,c_limit/basic-bulgogi.jpg",
  },
  {
    name: "Pasta",
    image:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/1/07/0/JE401_Giadas-Pasta-with-Creamy-White-Beans_s4x3.jpg.rend.hgtvcom.826.620.suffix/1546886427856.jpeg",
  },
  {
    name: "Burger",
    image:
      "https://bigseventravel.com/wp-content/uploads/2019/11/flip-1920x1280.jpg",
  },
  {
    name: "Pizza",
    image: "https://media.timeout.com/images/105453686/630/472/image.jpg",
  },
  {
    name: "Curry",
    image:
      "https://recipe1.ezmember.co.kr/cache/recipe/2019/01/28/bf1bd3a6b7c2d0e79eebe996462f4f6f1.jpg",
  },
];

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      {foodILike.map((food) => {
        return <Food name={food.name} image={food.image} />;
      })}
    </div>
  );
}

export default App;
