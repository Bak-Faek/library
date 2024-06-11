import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useUserContext } from "../../../context/userContext";
import "./DashboardCard.css";

export default function DashboardCard({id, firstname, lastname, email, role }) {
    const { userData } = useUserContext();
    const roleUser = userData && userData.user ? userData.user.role : null;

    const handleDelete = (event) => {
      event.preventDefault();
      fetch(
        `http://localhost:8500/user/${id}
          `,
        {
          method: "delete",
          headers: {
            Authorization: `Bearer ${userData.token}`,
            "Content-Type": "application/Json",
          },
          credentials: "include",
        }
      )
        .then((response) => {
          if (response.status === 200) {
            console.info("user deleted.");
            window.location.reload();
          }
        })
        .catch((err) => {
          console.error("Error deleting user:", err);
        });
    };
  return (
    <section className="globalContainer">
      <div className="userContainer">
        <p>Prénom : {firstname}</p>
        <p>Nom : {lastname}</p>
        <p>Email : {email}</p>
        <p>Role : {role}</p>

        {roleUser === "Admin" && (
          <div>
            <Link to={`/user/update/${id}`}>
              {" "}
              <button>Modifier</button>
            </Link>{" "}
            <button onClick={handleDelete}>Supprimer</button>
          </div>
        )}
      </div>
    </section>
  );
}

DashboardCard.propTypes = {
  id: PropTypes.number.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};
