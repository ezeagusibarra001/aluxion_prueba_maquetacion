import React from "react";
import { useHome } from "../../context/useContext";
import "../styles/MenuX.css";
function MenuX() {
  const {id, setId } = useHome();
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth',
      duration:"2s"
    });
    setId(id)
  }
  return (
    <div className="keep_down">
      <div className="grilla_menu_x">
        <div className="footer">
          <div className={id === 1 ? "uno underline" : "uno"} onClick={() => scrollTo(1)}>
            <p className="number">1</p>
            <p className="text_title">Shell Dining Chair</p>
          </div>
          <div className={id === 2 ? "uno underline" : "uno"} onClick={() => scrollTo(2)}>
            <p className="number">2</p>
            <p className="text_title">Dunes Anthrazite Black</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuX;
