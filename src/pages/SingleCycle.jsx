import { useParams } from "react-router-dom";
import { cycles } from "../data";

export const SingleCycle = () => {
  const { cycleID } = useParams();
  const cycleInfo = cycles.find(({ id }) => id === cycleID);
  const { title, solutions } = cycleInfo;

  return (
    <div>
      <h1>{title}</h1>
      <div>
        {solutions.map((solution, index) => (
          <div key={index}>{solution}</div>
        ))}
      </div>
    </div>
  );
};
