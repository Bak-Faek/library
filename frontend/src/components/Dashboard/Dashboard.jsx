import { useState, useEffect } from "react";
import { useUserContext } from "../../context/userContext";
import DashboardCard from "./DashboardCard/DashboardCard";
import './Dashboard.css'

export default function Dashboard() {
  const [user, setUser] = useState([]);

  const { userData } = useUserContext();

  useEffect(() => {
    if (userData) {
      const apiUrl = `http://localhost:8500/user/`;

      fetch(apiUrl, {
        method: "get",
        credentials: "include",
        headers: {
          Authorization: `Bearer ${userData.token}`,
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setUser(data);
        })
        .catch((error) =>
          console.error(
            "Erreur lors de la récupération des informations utilisateur:",
            error
          )
        );
    }
  }, [userData]);

  return (
    <>
    <div className="userCard">
      {user &&
        user.map((users) => (
          <DashboardCard
            key={users.id}
            id={users.id}
            firstname={users.firstname}
            lastname={users.lastname}
            email={users.email}
            role={users.role}
          />
        ))}
        </div>
    </>
  );
}
