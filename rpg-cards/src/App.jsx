import "./App.css";
import novaImage from "./assets/Nova.png";
import kaelImage from "./assets/Kael.png";
import lyraImage from "./assets/Lyra.png";
import theronImage from "./assets/Theron.png";

const characterImages = {
  Nova: novaImage,
  Kael: kaelImage,
  Lyra: lyraImage,
  Theron: theronImage,
};

const portraitPositions = {
  Nova: "90% top",
  Kael: "62% top",
  Lyra: "48% top",
  Theron: "54% top",
};

function calculatePower(level, hp) {
  return level * 10 + hp;
}

function CharacterCard({ character: hero }) {
  const fallen = hero.hp <= 0;
  const veteran = !fallen && hero.level >= 10;

  return (
    <article
      className={`card${fallen ? " fallen" : ""}${veteran ? " veteran" : ""}`}
      aria-labelledby={`character-${hero.name}`}
      tabIndex={0}
    >
      <div className="card__portrait">
        <img
          className="card__image"
          style={{ "--portrait-position": portraitPositions[hero.name] }}
          src={characterImages[hero.name]}
          alt={`Portrait of ${hero.name}`}
          width={1536}
          height={1024}
        />
      </div>
      <div className="card__content">
        <h2 className="card__title" id={`character-${hero.name}`}>
          {hero.name}
          {veteran && <span className="card__badge"> ★ Veteran</span>}
        </h2>
        <div className="card__reveal">
          <div className="card__reveal-inner">
            <div className="card__details">
              <p className="card__role">{hero.role}</p>
              {fallen && (
                <p className="card__fallen-status">
                  <svg
                    className="card__fallen-icon"
                    viewBox="0 0 32 32"
                    fill="none"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="m7 3-3 1 1 3 16 16 3-3L7 3Zm14 21 5 5m-7-3 7-7M25 3l3 1-1 3-16 16-3-3L25 3ZM11 24l-5 5m7-3-7-7" />
                  </svg>
                  <span>Fallen in Battle</span>
                </p>
              )}
              {!fallen && (
                <dl className="card__stats">
                  <div className="card__stat">
                    <dt>Level</dt>
                    <dd>{hero.level}</dd>
                  </div>
                  <div className="card__stat">
                    <dt>Health</dt>
                    <dd>{hero.hp}</dd>
                  </div>
                  <div className="card__stat">
                    <dt>Attack Power</dt>
                    <dd>{calculatePower(hero.level, hero.hp)}</dd>
                  </div>
                </dl>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function App() {
  const guild = [
    { name: "Nova", role: "Mage", hp: 80, level: 5 },
    { name: "Kael", role: "Warrior", hp: 140, level: 12 },
    { name: "Lyra", role: "Rogue", hp: 0, level: 4 },
    { name: "Theron", role: "Paladin", hp: 110, level: 3 },
  ];

  return (
    <main className="guild-page">
      <header className="guild-header">
        <svg
          className="guild-crest"
          viewBox="0 0 64 72"
          fill="none"
          aria-hidden="true"
        >
          <path d="M32 3 58 13v22c0 16-13 27-26 34C19 62 6 51 6 35V13L32 3Z" />
          <path d="m32 11 19 8v16c0 11-8 20-19 27-11-7-19-16-19-27V19l19-8Z" />
          <path d="M32 20v30M23 38h18m-9-18-5 8h10l-5-8Z" />
        </svg>
        <h1>
          RPG Guild <span>Dashboard</span>
        </h1>
      </header>
      <div className="guild-grid">
        {guild.map((hero) => (
          <CharacterCard key={hero.name} character={hero} />
        ))}
      </div>
    </main>
  );
}
