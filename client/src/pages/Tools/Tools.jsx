import ToolCard from "../../components/ToolCard/ToolCard";
import "./tools.css";

export default function Tools() {
  const tool = JSON.parse(localStorage.getItem('tool'));
  console.log(tool);
  return (
    <div className="tools">
      <h1 className="tools-title">Planes Alimentarios</h1>
      <div className="tools-container">
        <ToolCard/>
        <ToolCard/>
        <ToolCard/>
        <ToolCard/>
        <ToolCard/>
        <ToolCard/>
      </div>
    </div>
  );
}
