import { useAppDispatch } from "../../../shared/hooks/use-app-dispatch";
import { Overlay } from "../../../shared/ui/overlay";
import { modalsActions } from "../../../store/modals/slice/modal-slice";
import cls from "./style.module.scss";

interface IProps {}
export const SortModal: React.FC<IProps> = () => {
  const dispatch = useAppDispatch();

  const callbacks = {
    onCloseModal: () => {
      dispatch(modalsActions.closeModal());
    },
  };
  
  return (
    <Overlay onClose={callbacks.onCloseModal}>
      <div className={cls.container}>
        <button onClick={callbacks.onCloseModal}>
          <img src={close} alt="close" className={cls.close} />
        </button>
        <div className={cls.wrapper}>
          <div className={cls.line}></div>
          <h2 className={cls.title}>You have claimed:</h2>
          <p className={cls.subtitle}>{}</p>
        </div>
        <button className={cls.btn} onClick={callbacks.onCloseModal}></button>
      </div>
    </Overlay>
  );
};

