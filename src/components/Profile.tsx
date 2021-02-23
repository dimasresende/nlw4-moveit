import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/dimasresende.png" alt="Dimas Resende" />
      <div>
        <strong>Dimas Resende</strong>
        <p>
          <img src="icons/level.svg" alt="Subir de nível" />
          Level 1
        </p>
      </div>
    </div>
  );
}