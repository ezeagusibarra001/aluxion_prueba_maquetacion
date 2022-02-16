import React from "react";
import { useHome } from "../../context/useContext";
import "../styles/MenuX.css";
function MenuX() {
  const { setId } = useHome();
  return (
    <div className="keep_down">
      <div className="grilla_menu_x">
        <div className="footer">
          <div className="uno" onClick={() => setId(1)}>
            <p className="number">1</p>
            <p className="text_title">Shell Dining Chair</p>
          </div>
          <div className="uno" onClick={() => setId(2)}>
            <p className="number">2</p>
            <p className="text_title">Dunes Anthrazite Black</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuX;
