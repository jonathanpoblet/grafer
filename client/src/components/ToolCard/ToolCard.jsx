import "./toolCard.css";
import { Link } from "react-router-dom";

export default function ToolCard({image,title,id}) {
  return (
    <div className="toolCard" key={id}>
      <img className="toolCard-img" src={image} alt='Imagen de Herramienta' />
      <h1 className="toolCard-title">{title}</h1>
      <Link to='detail' className="toolCard-button">Ver información</Link>
    </div>
  )
}
