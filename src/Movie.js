import React from "react";
import Proptypes from "prop-types";

function Movie({ id, year, title, summary, poster }) {
  return (
    <>
      <img src={poster} alt={title} />
      <h4>{title}</h4>
      <h5>{year}</h5>
      <h5>{summary}</h5>
    </>
  );
}

Movie.propTypes = {
  id: Proptypes.number.isRequired,
  year: Proptypes.number.isRequired,
  title: Proptypes.string.isRequired,
  summary: Proptypes.string.isRequired,
  poster: Proptypes.string.isRequired,
};

export default Movie;
