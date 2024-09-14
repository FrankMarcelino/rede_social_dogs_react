import React from "react";
import styles from "./Input.module.css";

const input = ({ label }) => {
  return (
    <div>
      <label>{label}</label>
      <input className={styles.input} />
    </div>
  );
};

export default input;
