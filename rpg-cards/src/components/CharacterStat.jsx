import StatIcon from "./StatIcon.jsx";

function getPercentage(value, maximum) {
  return Math.min(Math.max((value / maximum) * 100, 0), 100);
}

export default function CharacterStat({ label, maximum, type, value }) {
  return (
    <div
      className={`card__stat card__stat--${type}`}
      style={{ "--stat-value": `${getPercentage(value, maximum)}%` }}
    >
      <div className="card__stat-heading">
        <dt>
          <StatIcon type={type} />
          {label}
        </dt>
        <dd>{value}</dd>
      </div>
      <div className="card__stat-track" aria-hidden="true">
        <span />
      </div>
    </div>
  );
}
