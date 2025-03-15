import { useEffect, useState } from "react";
import { closeIcon } from "../../../shared/assets/icons";
import { useAppDispatch } from "../../../shared/hooks/use-app-dispatch";
import { Overlay } from "../../../shared/ui/overlay";
import { modalsActions } from "../../../store/modals/slice/modal-slice";
import { searchValueActions } from "../../../store/searchValue/slice/searchValue-slice";
import cls from "./style.module.scss";
import { useAppSelector } from "../../../shared/hooks/use-app-selector";

interface IProps {}
export const SortModal: React.FC<IProps> = () => {
  const [selected, setSelected] = useState(0);
  const list = ["По алфавиту", "По дню рождения"];
  const dispatch = useAppDispatch();
  const filter= useAppSelector(state=> state.searchValue.selectedFilter);

  const callbacks = {
    onCloseModal: () => {
      dispatch(modalsActions.closeModal());
    },
  };
  const handleChoise = (item: string) => {
    dispatch(searchValueActions.setSelectedFilter(item));
    dispatch(modalsActions.closeModal());
  };

  useEffect(()=> {
    filter === "По дню рождения" ? setSelected(1): setSelected(0)
  }, [filter])

  return (
    <Overlay onClose={callbacks.onCloseModal}>
      <div className={cls.container}>
        <button onClick={callbacks.onCloseModal}>
          <img src={closeIcon} alt="close" className={cls.close} />
        </button>
        <div className={cls.wrapper}>
          <h2 className={cls.title}>Сортировка</h2>
          <div className={cls.btns}>
            {list.map((item, idx) => (
              <button
                key={item}
                className={`${cls.btn} ${selected === idx ? cls.active : cls.inactive}`}
                onClick={() => handleChoise(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </Overlay>
  );
};
