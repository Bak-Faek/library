import PropTypes from "prop-types";
import { useUserContext } from "../../context/userContext";
import "./OuvrageCard.css";

export default function OuvrageCard({ id, image, name, author }) {
  const { userData } = useUserContext();
  const role = userData && userData.user ? userData.user.role : null;
  const handleDelete = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:8500/ouvrage/${id}
        `,
        {
          method: "delete",
          headers: { Authorization: `Bearer ${userData.token}` },
          credentials: "include",
        }
      );
      if (response.status === 200) {
        console.info("ouvrage deleted.");
        window.location.reload();
      } else {
        console.error(`Failed deleting ouvrage, status ${response.status}`);
      }
    } catch (err) {
      console.error("Error posting recipe:", err);
    }
  };
  return (
    <section className="cardContainer">
      <img src={image} alt={name} />
      <div className="info">
        <p>{name}</p>
        <p className="author">{author}</p>
        {role === "Admin" && <button onClick={handleDelete}>supprimer</button>}
      </div>
    </section>
  );
}

OuvrageCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
