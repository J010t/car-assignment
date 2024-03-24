import React, { useState } from "react";
import Step from "../components/Step";

// Define steps
const roadmapSteps = [
  {
    title: "Research",
    substeps: [
      {
        title: "External",
        substeps: [
          {
            title: "B2C",
            substeps: ["Online", "Interview", "Public Data", "Health"],
          },
          "D2C",
        ],
      },
      "Internal",
    ],
  },
  {
    title: "Planning",
    substeps: ["PRD", "Specs"],
  },
  {
    title: "Designing",
    substeps: ["Hardware", "Software"],
  },
  {
    title: "Manufacturing",
    substeps: ["Material", "Production"],
  },
  {
    title: "Sales/Marketing",
    substeps: ["Online", "Dealership"],
  },
];

const Dashboard = () => {
    const [selectedStep, setSelectedStep] = useState(null);
    const handleStepSelect = (stepTitle) => {
        setSelectedStep(stepTitle);
        console.log(stepTitle);
      };
  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl mb-4">Car Manufacturing Dashboard</h1>
      {roadmapSteps.map((step, index) => (
        <Step key={index} title={step.title} substeps={step.substeps} value={selectedStep} onClick={handleStepSelect}/>
        
      ))}
      
    </div>
  );
};

export default Dashboard;
