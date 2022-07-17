import "../styles/Content.css";
import Loader from "./Loader.js";
import ImageModal from "./ImageModal";
import CharacterTarget from "./CharacterTarget.js";
import { useState } from "react";

export default function Content({
  characters,
  paginacion,
  loadMoreCharacters,
  loading,
}) {
  const [personaje, setPersonaje] = useState(null);
  const [mostrar, setMostrar] = useState(false);

  const mostrarInformacion = (id) => {
    setPersonaje(characters[id]);
    setMostrar(true);
  };

  return (
    <div className="content-conteiner">
      {characters ? (
        characters.map((item, index) => (
          <CharacterTarget
            key={index}
            item={item}
            id={index}
            mostrarInformacion={mostrarInformacion}
          />
        ))
      ) : (
        <></>
      )}

      {paginacion.has_next_page ? (
        <button className="load-more" onClick={loadMoreCharacters}>
          load more
        </button>
      ) : (
        <></>
      )}

      {loading && <Loader />}

      <ImageModal personaje={personaje} mostrar={mostrar} setMostrar={setMostrar} />
    </div>
  );
}
