import { error } from "../../../assets/icons";
import cls from "./style.module.scss";

interface IProps {}
export const Error: React.FC<IProps> = () => {
  return (
    <div className={cls.container}>
      <div className={cls.wrapper}>
        <img src={error} alt="UFO" className={cls.image} />
        <h2 className={cls.title}>Какой-то сверхразум все сломал</h2>
        <p className={cls.subtitle}>Постараемся быстро починить</p>
        <p onClick={() => location.reload()} className={cls.text}>
          Попробовать снова
        </p>
      </div>
    </div>
  );
};
