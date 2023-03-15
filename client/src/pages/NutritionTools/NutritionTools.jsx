import NutritionToolsCard from "../../components/NutritionToolsCard/NutritionToolsCard";
import AlimentaryPlan from "../../assets/plan-alimentario.png";
import EBook from "../../assets/e-books.png";
import NutritionToolsImg from "../../assets/nutrition-tools.png";
import Recetary from "../../assets/recetary.png";

import "./nutritionTools.css";

export default function NutritionTools() {
  return (
    <div className="nutrition">
      <h1 className="nutrition-title">Herramientas de nutrición</h1>
      <div className="nutrition-cards">
        <NutritionToolsCard
          img={AlimentaryPlan}
          title="Planes alimentarios"
          length="10"
          endpoint="planes-alimentarios"
        />
        <NutritionToolsCard img={EBook} title="E-books" length="6" endpoint="ebooks"/>
        <NutritionToolsCard
          img={NutritionToolsImg}
          title="Herramientas para nutricionistas"
          length="8"
          endpoint="herramientas-para-nutricionistas"
        />
        <NutritionToolsCard img={Recetary} title="Recetarios" length="15" endpoint="recetarios" />
      </div>
    </div>
  );
}
