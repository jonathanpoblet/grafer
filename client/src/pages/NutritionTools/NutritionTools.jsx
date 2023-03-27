import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../app/state/productsSlice";
import NutritionToolsCard from "../../components/NutritionToolsCard/NutritionToolsCard";

import "./nutritionTools.css";

export default function NutritionTools() {
  const products = useSelector((store) => store.products.products);
  localStorage.setItem("products", JSON.stringify(products));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div className="nutrition">
      <h1 className="nutrition-title">Herramientas de nutrición</h1>
      <div className="nutrition-cards">
        {products.map((product) => {
          return (
            <NutritionToolsCard
              key={product.identificator}
              img={product.image}
              title={product.title}
              length={product.length}
              id={product.identificator}
              endpoint={product.endpoint}
              name={product.name}
            />
          );
        })}
      </div>
    </div>
  );
}
