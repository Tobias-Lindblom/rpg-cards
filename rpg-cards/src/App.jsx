import "./App.css";
import CharacterCard from "./components/CharacterCard.jsx";
import GuildHeader from "./components/GuildHeader.jsx";
import { characters } from "./data/characters.js";

export default function App() {
  return (
    <main className="guild-page">
      <GuildHeader />
      <ul className="guild-grid" aria-label="Guild members">
        {characters.map((character) => (
          <CharacterCard key={character.name} character={character} />
        ))}
      </ul>
    </main>
  );
}
