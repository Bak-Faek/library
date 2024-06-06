import PropTypes from "prop-types";
import "./OuvrageCard.css";

export default function OuvrageCard({ image, name, author }) {
  return (
    <section className="cardContainer">
      <img src={image} alt="" />
      <p> {name}</p>
      <p>{author}</p>
    </section>
  );
}

OuvrageCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
