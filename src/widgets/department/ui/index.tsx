import { useState } from "react";
import { departments } from "../../../shared/assets/constants";
import { useAppDispatch } from "../../../shared/hooks/use-app-dispatch";
import { departmentActions } from "../../../store/deprtment/slice/department-slice";
import { DepartmentFilter } from "../../../store/deprtment/type/department-type";
import cls from "./style.module.scss";

export const Department: React.FC = () => {
  const [selected, setSelected] = useState(0);
  const dispatch = useAppDispatch();

  return (
    <div className={cls.list}>
      {departments.map((item, idx) => (
        <div
          key={idx}
          onClick={() =>{
            setSelected(idx);
            item === "Все"
              ? dispatch(departmentActions.department(DepartmentFilter.all))
              : item === "Designers"
              ? dispatch(departmentActions.department(DepartmentFilter.design))
              : item === "Analysts"
              ? dispatch(
                  departmentActions.department(DepartmentFilter.analytics)
                )
              : item === "Managers"
              ? dispatch(
                  departmentActions.department(DepartmentFilter.management)
                )
              : item === "iOS"
              ? dispatch(departmentActions.department(DepartmentFilter.ios))
              : item === "Android"
              ? dispatch(departmentActions.department(DepartmentFilter.android))
              : ""}
          }
          className={`${cls.item} ${selected === idx ? cls.active : ''
          }`}
        >
          {item.toString()}
        </div>
      ))}
    </div>
  );
};
