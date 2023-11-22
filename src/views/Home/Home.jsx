import React, { useState } from "react";
import styles from "./Home.module.css";

const Home = () => {
  const [mostrarPopUpTarea, setMostrarPopUpTarea] = useState(false);

  const handleBtn = () => {
    setMostrarPopUpTarea(true);
  };

  return (
    <div className={styles.container}>

      {mostrarPopUpTarea && (
        <div className={styles.popUpTarea}>
          <label className={styles.label} htmlFor="">Ingresa tu nueva tarea</label>
          {/* <input className={styles.label} type="text" /> */}
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
      )}

      <button className={styles.btn} onClick={handleBtn}>Tarea Nueva</button>

    </div>
  );
};

export default Home;
