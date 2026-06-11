import CharacterCard from "./CharacterCard";

function CharacterGrid({
  characters,
  eliminarPersonaje,
  editarPersonaje
}) {

  return (

    <div className="grid">

      {characters.map((character, index) => (

        <CharacterCard
          key={index}
          character={character}
          eliminarPersonaje={eliminarPersonaje}
          editarPersonaje={editarPersonaje}
        />

      ))}

    </div>

  );

}

export default CharacterGrid;