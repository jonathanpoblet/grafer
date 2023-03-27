import ToolCard from "../../components/ToolCard/ToolCard";
import "./tools.css";

export default function Tools() {
  const tool = JSON.parse(localStorage.getItem("tool"));
  return (
    <div className={tool[tool.name].length === 0 ? 'tools-noproduct' : 'tools'}>
      <h1 className="tools-title">{tool.title}</h1>
      <div className="tools-container">
        {tool[tool.name].map((t) => {
          return (
            <ToolCard
              key={t.identificator}
              tool ={t}
            />
          );
        })}
      </div>
    </div>
  );
}
