import React from "react";
import { AiFillHeart } from "react-icons/ai";

const CharacterTarget = ({ item, id, mostrarInformacion }) => {
  return "https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png" ===
    item.images.jpg.image_url ? (
    <></>
  ) : (
    <div className="caracter-conteiner" onClick={() => mostrarInformacion(id)}>
      <img className="img" src={item.images.jpg.image_url} alt="anime" />
      <h4>{item.name} </h4>
      <h3>
        <AiFillHeart className="heart" /> {item.favorites}
      </h3>
    </div>
  );
};

export default CharacterTarget;
