import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleBtnHome = (e) => {
    navigate("/home");
  };

  const handleBtnNosotros = (e) => {
    navigate("/nosotros");
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerNav}>
        <h1 className={styles.titulo}>OrganizAR</h1>
        <button className={styles.btn} onClick={handleBtnHome}>
          Home
        </button>
        <button className={styles.btn} onClick={handleBtnNosotros}>
          Nosotros
        </button>
      </div>
    </div>
  );
};

export default Navbar;
