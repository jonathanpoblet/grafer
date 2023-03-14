import { Link } from "react-router-dom";
import "./nutritionToolsCard.css";

export default function NutritionToolsCard({ img, title, length }) {
  return (
    <Link to={`/${title}/detail`} className="nutrition-card">
      <img
        className="nutrition-card-img"
        src={img}
        alt="herramientas de nutrición imagen"
      />
      <h4 className="nutrition-card-title">
        {title}
        <span className="nutrition-card-title-orange"> ({length})</span>
      </h4>
    </Link>
  );
}
