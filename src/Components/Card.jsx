import "../css/Card.css"

function Card({ title, icon, link }) {
  return (
    <a href={link} className="card" target="_blank" rel="noopener noreferrer">
        <img src={icon} alt={title} className="icon" />
      <h1>{title}</h1>
    </a>
  );
}

export default Card;
