import { Spinner } from "@/shared/ui/spinner";
import cls from "./style.module.scss";

export const LoaderLayout: React.FC = () => {
  return (
    <div className={cls.wrapper}>
      <Spinner/>
    </div>
  )
}