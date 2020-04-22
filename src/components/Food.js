import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "Bulgogi",
    image:
      "https://assets.bonappetit.com/photos/57acd741f1c801a1038bc801/16:9/w_2560,c_limit/basic-bulgogi.jpg",
    rating: 5.4,
  },
  {
    id: 2,
    name: "Pasta",
    image:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/1/07/0/JE401_Giadas-Pasta-with-Creamy-White-Beans_s4x3.jpg.rend.hgtvcom.826.620.suffix/1546886427856.jpeg",
    rating: 4.3,
  },
  {
    id: 3,
    name: "Burger",
    image:
      "https://bigseventravel.com/wp-content/uploads/2019/11/flip-1920x1280.jpg",
    rating: 3.5,
  },
  {
    id: 4,
    name: "Pizza",
    image: "https://media.timeout.com/images/105453686/630/472/image.jpg",
    rating: 2.9,
  },
  {
    id: 5,
    name: "Curry",
    image:
      "https://recipe1.ezmember.co.kr/cache/recipe/2019/01/28/bf1bd3a6b7c2d0e79eebe996462f4f6f1.jpg",
    rating: 1.1,
  },
];

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function Food({ name, image, rating }) {
  return (
    <>
      <h2>I Love {name}!</h2>
      <h4>{rating} / 5</h4>
      <img src={image} alt={name} />
    </>
  );
}

export default () => {
  return (
    <>
      {foodILike.map((food) => {
        return (
          <Food
            key={food.id}
            name={food.name}
            image={food.image}
            rating={food.rating}
          />
        );
      })}
    </>
  );
};
