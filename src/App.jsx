import { useEffect, useState } from "react";
import api from "./services/api";

import Navbar from "./components/Navbar";
import CharacterGrid from "./components/CharacterGrid";
import Loading from "./components/Loading";
import EditModal from "./components/EditModal";

import "./App.css";

function App() {

  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  // FORMULARIO
  const [nuevoNombre, setNuevoNombre] = useState("");
  const [nuevoActor, setNuevoActor] = useState("");
  const [nuevaCasa, setNuevaCasa] = useState("");
  const [nuevaEspecie, setNuevaEspecie] = useState("");
  const [nuevaImagen, setNuevaImagen] = useState("");

  // MODAL
  const [mostrarModal, setMostrarModal] = useState(false);
  const [personajeEditando, setPersonajeEditando] = useState(null);

  // OBTENER PERSONAJES
  useEffect(() => {

    const obtenerPersonajes = async () => {

      try {

        setLoading(true);

        const respuesta = await api.get("/characters");

        setCharacters(respuesta.data);

      } catch (error) {

        setError("Error al cargar personajes");

      } finally {

        setLoading(false);

      }

    };

    obtenerPersonajes();

  }, []);

  // ELIMINAR
  const eliminarPersonaje = (name) => {

    const nuevosPersonajes = characters.filter(
      (character) => character.name !== name
    );

    setCharacters(nuevosPersonajes);

  };

  // ABRIR MODAL
  const editarPersonaje = (name) => {

    const personaje = characters.find(
      (character) => character.name === name
    );

    if (!personaje) return;

    setPersonajeEditando({ ...personaje });

    setMostrarModal(true);

  };

  // GUARDAR CAMBIOS
  const guardarCambios = () => {

    const personajesActualizados = characters.map((character) => {

      if (character.name === personajeEditando.name) {

        return personajeEditando;

      }

      return character;

    });

    setCharacters(personajesActualizados);

    setMostrarModal(false);

    setPersonajeEditando(null);

  };

  // CERRAR MODAL
  const cerrarModal = () => {

    setMostrarModal(false);

    setPersonajeEditando(null);

  };

  // AGREGAR
  const agregarPersonaje = () => {

    if (
      nuevoNombre.trim() === "" ||
      nuevoActor.trim() === ""
    ) {

      alert("Completa los campos");

      return;

    }

    const nuevoPersonaje = {

      name: nuevoNombre,
      actor: nuevoActor,
      house: nuevaCasa,
      species: nuevaEspecie,
      image: nuevaImagen

    };

    setCharacters([nuevoPersonaje, ...characters]);

    setNuevoNombre("");
    setNuevoActor("");
    setNuevaCasa("");
    setNuevaEspecie("");
    setNuevaImagen("");

  };

  // BUSCADOR
  const personajesFiltrados = characters.filter((character) =>

    character.name &&
    character.name.toLowerCase().includes(search.toLowerCase())

  );

  // LOADING
  if (loading) {

    return <Loading />;

  }

  // ERROR
  if (error) {

    return <h2>{error}</h2>;

  }

  return (

    <div className="container">

      <Navbar />

      <div className="search-container">

        <input
          type="text"
          placeholder="Buscar personaje..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />

      </div>

      <div className="form-container">

        <input
          type="text"
          placeholder="Nombre del personaje"
          value={nuevoNombre}
          onChange={(e) => setNuevoNombre(e.target.value)}
          className="search-input"
        />

        <input
          type="text"
          placeholder="Actor"
          value={nuevoActor}
          onChange={(e) => setNuevoActor(e.target.value)}
          className="search-input"
        />

        <input
          type="text"
          placeholder="Casa"
          value={nuevaCasa}
          onChange={(e) => setNuevaCasa(e.target.value)}
          className="search-input"
        />

        <input
          type="text"
          placeholder="Especie"
          value={nuevaEspecie}
          onChange={(e) => setNuevaEspecie(e.target.value)}
          className="search-input"
        />

        <input
          type="text"
          placeholder="URL de la imagen"
          value={nuevaImagen}
          onChange={(e) => setNuevaImagen(e.target.value)}
          className="search-input"
        />

        <button
          className="add-btn"
          onClick={agregarPersonaje}
        >
          Agregar
        </button>

      </div>

      <CharacterGrid
        characters={personajesFiltrados}
        eliminarPersonaje={eliminarPersonaje}
        editarPersonaje={editarPersonaje}
      />

      {mostrarModal && (

        <EditModal
          personajeEditando={personajeEditando}
          setPersonajeEditando={setPersonajeEditando}
          guardarCambios={guardarCambios}
          cerrarModal={cerrarModal}
        />

      )}

    </div>

  );

}

export default App;