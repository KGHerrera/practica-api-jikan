import Content from "./components/Content";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";
import "./styles/ScrollBar.css";
import { helpHttp } from "./helpers/helpHttp";

function App() {
  const [characters, setCharacters] = useState(null);
  const [loading, setLoading] = useState(false);
  const [paginacion, setPaginacion] = useState({});
  const [nombre, setNombre] = useState("");
  let api = helpHttp();
  let url = "https://api.jikan.moe/v4/characters?q=";

  useEffect(() => {
    obtenerPersonaje(
      "https://api.jikan.moe/v4/characters?q=&page=1&order_by=favorites&sort=desc"
    );
  }, []);

  const obtenerPersonaje = (endpoint, loadMore = false) => {
    setLoading(true);
    api.get(endpoint).then((res) => {
      if (loadMore) {
        let result = res.data;
        result.shift();
        result.shift();
        setCharacters([...characters, ...result]);
      } else setCharacters(res.data);

      setPaginacion(res.pagination);
      setLoading(false);
    });
  };

  const loadMoreCharacters = () => {
    let endpoint =
      url +
      nombre +
      `&page=${paginacion.current_page + 1}&order_by=favorites&sort=desc`;
    obtenerPersonaje(endpoint, true);
  };

  return (
    <div className="App">
      <NavBar
        obtenerPersonaje={obtenerPersonaje}
        url={url}
        nombre={nombre}
        setNombre={setNombre}
      />
     
      <Content
        characters={characters}
        paginacion={paginacion}
        loadMoreCharacters={loadMoreCharacters}
        loading={loading}
      />
      <Footer />
    </div>
  );
}

export default App;
