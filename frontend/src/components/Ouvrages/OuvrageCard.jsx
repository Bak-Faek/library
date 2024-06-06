import PropTypes from "prop-types";
import "./OuvrageCard.css";

export default function OuvrageCard({ image, name, author }) {
  return (
    <section className="cardContainer">
      <img src={image} alt="" />
      <div className="info">
        <p> {name}</p>
        <p className="author">{author}</p>
      </div>
    </section>
  );
}

OuvrageCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
