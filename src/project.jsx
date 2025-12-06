import { useState, useEffect } from "react";
import Projects from "./projects";

// Project Section Component
// Loads project data from JSON and displays each project card.
export default function Project() {
  const [pro, setPro] = useState([]);

  // Load project JSON file
  useEffect(() => {
    fetch("./project.json")
      .then(res => res.json())
      .then(data => setPro(data))
      .catch(err => console.log("Error loading projects:", err));
  }, []);

  return (
    <>
      <div className="container text-center p-5">
        
        {/* Section Title */}
        <h1 id="Project">Projects</h1>

        <div className="row">
          <div className="d-flex flex-row text-center flex-wrap" id="project">
            
            {/* Render Project Cards */}
            {pro.map((projs, index) => (
              <Projects key={index} project={projs} />
            ))}

          </div>
        </div>
      </div>
    </>
  );
}
