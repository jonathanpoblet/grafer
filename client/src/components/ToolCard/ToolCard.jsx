import "./toolCard.css";
import Plan from "../../assets/plan1.png"
import { Link } from "react-router-dom";

export default function ToolCard() {
  return (
    <div className="toolCard">
      <img className="toolCard-img" src={Plan} alt='Tool img' />
      <h1 className="toolCard-title">Adelgazar la barriga parte 1</h1>
      <Link to='detail' className="toolCard-button">Ver información</Link>
    </div>
  )
}
