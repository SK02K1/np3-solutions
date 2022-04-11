import { cycles } from "../data";
import { CycleCard } from "../components";

export const Home = () => {
  return (
    <div>
      <h2>np3-solutions</h2>
      <p>neoG Pair Programming Practice [nP3]</p>
      <div className="grid-container">
        {cycles.map((cycleInfo) => (
          <CycleCard key={cycleInfo.id} cycleInfo={cycleInfo} />
        ))}
      </div>
    </div>
  );
};
