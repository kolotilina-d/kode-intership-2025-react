import { FilterIcon, SearchIcon } from "../../../shared/assets/icons";
import { useAppDispatch } from "../../../shared/hooks/use-app-dispatch";
import { useAppSelector } from "../../../shared/hooks/use-app-selector";
import { modalsActions } from "../../../store/modals/slice/modal-slice";
import { searchValueActions } from "../../../store/searchValue/slice/searchValue-slice";
import cls from "./style.module.scss";

export const SearchInput: React.FC = () => {
  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state.searchValue.searchValue);

  const openSort = () => {
    dispatch(modalsActions.openModal('sort'))
  };
  
  return (
    <div className={cls.wrapper}>
      <title className={cls.title}>Поиск</title>
      <div className={cls.container}>
        <div className={cls.leftside}>
          <img src={SearchIcon} alt="loupe" className={cls.icon} />
          <input
            value={value}
            className={cls.input}
            placeholder="Введи имя, тег, почту..."
            onChange={(e) =>
              dispatch(searchValueActions.setSearchValue(e.target.value))
            }
          ></input>
        </div>
        <button onClick={openSort}>
          <img src={FilterIcon} alt="filter" className={cls.icon} />
        </button>
      </div>
    </div>
  );
};
