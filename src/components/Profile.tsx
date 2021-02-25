import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/dimasresende.png" alt="Dimas Resende" />
      <div>
        <strong>Dimas Resende</strong>
        <p>
          <img src="icons/level.svg" alt="Subir de nível" />
          Level {level}
        </p>
      </div>
    </div>
  );
}