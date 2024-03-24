import { useState } from "react";

const Step = ({ title, substeps }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="m-2">
      <div
        onClick={toggleExpand}
        className="cursor-pointer bg-blue-400 p-2 rounded-md ">
        {title}
      </div>
      {expanded && (
        <ul className="m-4">
          {Array.isArray(substeps) ? (
            substeps.map((substep, index) => (
              <li key={index} >
                {typeof substep === "object" ? (
                  <Step title={substep.title} substeps={substep.substeps} />
                ) : (
                  <div className="cursor-pointer bg-gray-200 m-2 p-2 rounded-md">
                    {substep}
                  </div>
                )}
              </li>
            ))
          ) : (
            <li className="mb-2">{substeps}</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Step;
