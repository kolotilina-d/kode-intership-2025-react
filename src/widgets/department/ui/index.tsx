import { departments } from "../../../shared/assets/constants";
import { useAppDispatch } from "../../../shared/hooks/use-app-dispatch";
import { useAppSelector } from "../../../shared/hooks/use-app-selector";
import { departmentActions } from "../../../store/deprtment/slice/department-slice";
import { DepartmentFilter } from "../../../store/deprtment/type/department-type";
import cls from "./style.module.scss";

export const Department: React.FC = () => {
  const dispatch = useAppDispatch();
  const type = useAppSelector((state) => state.department.department);

  return (
    <div className={cls.list}>
      {departments.map((item, idx) => (
        <div
          key={idx}
          onClick={() =>
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
              : ""
          }
          className={`${cls.item} ${
            item === "Все" && type === "all"
              ? cls.active
              : item === "Android" && type === "android"
              ? cls.active
              : item === "iOS" && type === "ios"
              ? cls.active
              : item === "Designers" && type === "design"
              ? cls.active
              : item === "Managers" && type === "management"
              ? cls.active
              : item === "Analysts" && type === "analytics"
              ? cls.active
              : ""
          }`}
        >
          {item.toString()}
        </div>
      ))}
    </div>
  );
};
