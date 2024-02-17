import { Link, NavLink, Outlet } from "react-router-dom";
import styles from "./Shop.module.css";

function Shop() {
  return (
    <div className={styles.container}>
      <div className={styles.slidebar}>
        <NavLink to="movies" className={styles.btn}>
          Movies
        </NavLink>
        <NavLink to="bikes" className={styles.btn}>
          Bikes
        </NavLink>

        <div className={styles.list}>
          <Outlet />
        </div>
      </div>
      <Link to="/" className={`${styles.shopBtn} ${styles.btn}`}>
        Go Back
      </Link>
    </div>
  );
}

export default Shop;
