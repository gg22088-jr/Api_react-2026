function EditModal({
  personajeEditando,
  setPersonajeEditando,
  guardarCambios,
  cerrarModal
}) {

  if (!personajeEditando) return null;

  return (

    <div className="modal-overlay">

      <div className="modal">

        <h2>Editar Personaje</h2>

        <label>Nombre</label>
        <input
          type="text"
          value={personajeEditando.name || ""}
          onChange={(e) =>
            setPersonajeEditando({
              ...personajeEditando,
              name: e.target.value
            })
          }
        />

        <label>Actor</label>
        <input
          type="text"
          value={personajeEditando.actor || ""}
          onChange={(e) =>
            setPersonajeEditando({
              ...personajeEditando,
              actor: e.target.value
            })
          }
        />

        <label>Casa</label>
        <input
          type="text"
          value={personajeEditando.house || ""}
          onChange={(e) =>
            setPersonajeEditando({
              ...personajeEditando,
              house: e.target.value
            })
          }
        />

        <label>Especie</label>
        <input
          type="text"
          value={personajeEditando.species || ""}
          onChange={(e) =>
            setPersonajeEditando({
              ...personajeEditando,
              species: e.target.value
            })
          }
        />

        <label>URL de la Imagen</label>
        <input
          type="text"
          value={personajeEditando.image || ""}
          onChange={(e) =>
            setPersonajeEditando({
              ...personajeEditando,
              image: e.target.value
            })
          }
        />

        <div className="modal-buttons">

          <button
            className="edit-btn"
            onClick={guardarCambios}
          >
            Guardar
          </button>

          <button
            className="delete-btn"
            onClick={cerrarModal}
          >
            Cancelar
          </button>

        </div>

      </div>

    </div>

  );

}

export default EditModal;