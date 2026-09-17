import dividerImage from "../assets/Divider.png";

export default function GuildHeader() {
  return (
    <header className="guild-header">
      <h1>Hall of Heroes</h1>
      <img
        className="guild-header__divider"
        src={dividerImage}
        alt=""
        aria-hidden="true"
        width={2172}
        height={724}
      />
      <p className="guild-header__subtitle">
        RPG Guild Dashboard by Tobias Lindblom
      </p>
    </header>
  );
}
