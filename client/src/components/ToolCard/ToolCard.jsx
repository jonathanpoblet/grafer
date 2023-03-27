import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { setDetail } from '../../app/state/productsSlice';
import "./toolCard.css";

export default function ToolCard({ tool}) {
  const dispatch = useDispatch()
  return (
    <div className="toolCard" key={tool.id}>
      <img className="toolCard-img" src={tool.image} alt="Imagen de Herramienta" />
      <h1 className="toolCard-title">{tool.title}</h1>
      <Link 
        to="detail" 
        className="toolCard-button"
        onClick={() => {
          localStorage.setItem('detail', JSON.stringify(tool))
          dispatch(setDetail(tool))
        }}>
        Ver información
      </Link>
    </div>
  );
}
