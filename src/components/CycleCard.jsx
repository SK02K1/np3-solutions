import { useNavigate } from "react-router-dom";

export const CycleCard = ({ cycleInfo: { id, title } }) => {
  const navigate = useNavigate();
  const showCycleSolutions = () => {
    navigate(`/cycles/${id}`);
  };
  return (
    <div onClick={showCycleSolutions} className="cycle-card">
      <h3>{title}</h3>
    </div>
  );
};
