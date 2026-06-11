function CharacterCard({
  character,
  eliminarPersonaje,
  editarPersonaje
}) {

  return (

    <div className="card">

      <img
       src={
      character.image
    ? character.image
    : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
}
        alt={character.name}
      />

      <div className="card-body">

        <h2>{character.name}</h2>

        <p>
          <strong>Casa:</strong> {character.house || "No tiene"}
        </p>

        <p>
          <strong>Actor:</strong> {character.actor || "Desconocido"}
        </p>

        <p>
          <strong>Especie:</strong> {character.species}
        </p>

        <div className="buttons">

          <button
            className="edit-btn"
            onClick={() => editarPersonaje(character.name)}
          >
            Editar
          </button>

          <button
            className="delete-btn"
            onClick={() => eliminarPersonaje(character.name)}
          >
            Eliminar
          </button>

        </div>

      </div>

    </div>

  );

}

export default CharacterCard;