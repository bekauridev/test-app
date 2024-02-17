import { Link } from "react-router-dom";
import style from "./MainPage.module.css";
function MainPage() {
  return (
    <div>
      <h1 className={style.heading}>Main Page</h1>
      <Link to="shop" className={style.btn}>
        Go to Shop
      </Link>
    </div>
  );
}

export default MainPage;
