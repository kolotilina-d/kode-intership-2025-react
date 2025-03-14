import { notFound } from "../../../assets/icons";
import cls from "./style.module.scss";

interface IProps {}
export const NotFound: React.FC<IProps> = () => {
  return (
    <div className={cls.container}>
      <div className={cls.wrapper}>
        <img src={notFound} alt="loupe" className={cls.image} />
        <h2 className={cls.title}>Мы никого не нашли</h2>
        <p className={cls.subtitle}>Попробуй скорректировать запрос</p>
      </div>
    </div>
  );
};
