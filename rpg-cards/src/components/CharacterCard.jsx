import dividerImage from "../assets/Divider.png";
import fallenInBattleImage from "../assets/Fallen-in-battle.png";
import CharacterStat from "./CharacterStat.jsx";

const MAX_HEALTH = 140;
const MAX_ATTACK_POWER = 260;
const VETERAN_LEVEL = 10;

function calculatePower(level, hp) {
  return level * 10 + hp;
}

export default function CharacterCard({ character }) {
  const attackPower = calculatePower(character.level, character.hp);
  const fallen = character.hp <= 0;
  const veteran = !fallen && character.level >= VETERAN_LEVEL;
  const characterId = `character-${character.name.toLowerCase()}`;
  const descriptionId = `${characterId}-description`;

  return (
    <li
      className={`card-shell card-shell--${character.role.toLowerCase()}${fallen ? " fallen" : ""}`}
    >
      <article
        className={`card${fallen ? " fallen" : ""}`}
        aria-labelledby={characterId}
        aria-describedby={descriptionId}
        tabIndex={0}
      >
        <div
          className="card__portrait"
          style={{ "--portrait-position": character.portraitPosition }}
        >
          <img
            className="card__image"
            src={character.image}
            alt={`Portrait of ${character.name}`}
            width={1536}
            height={1024}
          />
        </div>
        <div className="card__content">
          <header className="card__identity">
            <div className="card__name-group">
              <h2 className="card__title" id={characterId}>
                {character.name}
              </h2>
              <p className="card__role">{character.role}</p>
            </div>
            <img
              className="card__role-symbol"
              src={character.roleSymbol}
              alt=""
              aria-hidden="true"
              width={1254}
              height={1254}
            />
            <p className="card__level">
              <span>LVL</span> {character.level}
            </p>
          </header>
          <img
            className="card__divider"
            src={dividerImage}
            alt=""
            aria-hidden="true"
            width={2172}
            height={724}
          />
          <div className="card__reveal">
            <div className="card__reveal-inner">
              <section
                className="card__details"
                aria-label={`${character.name} details`}
              >
                <div className="card__lore">
                  <p className="card__description" id={descriptionId}>
                    {character.description}
                  </p>
                  {veteran && (
                    <p className="card__veteran">{"\u2605 Veteran"}</p>
                  )}
                </div>
                {fallen && (
                  <img
                    className="card__fallen-image"
                    src={fallenInBattleImage}
                    alt="Status: Fallen in Battle"
                    width={1774}
                    height={887}
                  />
                )}
                {!fallen && (
                  <dl className="card__stats">
                    <CharacterStat
                      type="health"
                      label="Health"
                      value={character.hp}
                      maximum={MAX_HEALTH}
                    />
                    <CharacterStat
                      type="attack"
                      label="Attack Power"
                      value={attackPower}
                      maximum={MAX_ATTACK_POWER}
                    />
                  </dl>
                )}
              </section>
            </div>
          </div>
          <blockquote className="card__quote">
            <q>{character.quote}</q>
          </blockquote>
        </div>
      </article>
    </li>
  );
}
