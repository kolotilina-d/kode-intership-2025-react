import { useNavigate } from "react-router-dom";
import cls from "./style.module.scss";

const Details: React.FC = () => {
  const navigate = useNavigate();

  const onNavigate = () => {
    navigate("/");
  };

  return (
    <>
      {/* <BackButton onClick={onNavigate} /> */}
      <div className={cls.container}>

      </div>
    </>
  );
};

export default Details;
