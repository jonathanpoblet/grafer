import { useDispatch,useSelector } from "react-redux";
import { setTool } from "../../app/state/productsSlice.js";
import { Link } from "react-router-dom";
import "./nutritionToolsCard.css";

export default function NutritionToolsCard({ img, title, length,id}) {
  const product = JSON.parse(localStorage.getItem('products'))
  const tool = product.find(p => p.identificator === id);
  const dispatch = useDispatch()
  return (
    <Link
      to={`/herramientas-de-nutricion/${id}`}
      className="nutrition-card"
      onClick={ () => {
        localStorage.setItem('tool',JSON.stringify(tool))
        dispatch(setTool(tool))
      }}

    >
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
