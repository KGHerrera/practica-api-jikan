import React from "react";
import "../styles/ImageModal.css";

import { AiFillHeart } from "react-icons/ai";

const ImageModal = ({ personaje, mostrar, setMostrar }) => {
  const cerrar = () => {
    setMostrar(false);
  };

  return mostrar ? (
    <div className="modal">
      <div className="modal-conteiner" id="modal">
        <img
          className="modal-img"
          src={personaje.images.jpg.image_url}
          alt="anime"
        />
        <div className="info-conteiner">
          <h3 className="modal-title">
            {personaje.name} {personaje.name_kanji}
          </h3>
          <div className="about-field">
            <p className="about-modal">{personaje.about}</p>
          </div>
          <div className="favorites-conteiner">
            <h3 className="modal-title">
              favorites: <AiFillHeart className="heart" />
              {personaje.favorites}
            </h3>
          </div>
          <button className="modal-btn" onClick={() => cerrar()}>
            cerrar
          </button>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default ImageModal;
