import { Link } from "react-router-dom";
import { IUser } from "../../../store/team/types/team-types";
import { useAppSelector } from "../../../shared/hooks/use-app-selector";
import { formatBirthday } from "../../../shared/utils";
import cls from "./style.module.scss";

interface IProps {
  user: IUser;
}

export const User: React.FC<IProps> = ({ user }) => {
  const sort = useAppSelector((state) => state.searchValue.selectedFilter);
  const birthday = formatBirthday(user?.birthday);

  return (
    <>
      <div className={cls.item}>
        <Link to={`/details/${user.id}`} className={cls.container}>
          <img src={user.avatarUrl} alt="avatar" className={cls.avatar} />
          <div className={cls.wrapper}>
            <p className={cls.name}>
              {user.firstName} {user.lastName}
              <span className={cls.subtitle}>{user.userTag}</span>
            </p>
            <p className={cls.department}>{user.position}</p>
          </div>
        </Link>
        <div className={cls.birthday}>
          {sort === "По дню рождения" ? birthday : ""}
        </div>
      </div>
    </>
  );
};
