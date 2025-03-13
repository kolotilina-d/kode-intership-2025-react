import { IUser } from "../../../store/team/types/team-types";
import cls from "./style.module.scss";

interface IProps {
  user: IUser;
}

export const User: React.FC<IProps> = ({ user }) => {

  return (
    <div className={cls.container}>
      <img src={user.avatarUrl} alt="avatar" className={cls.avatar} />
      <div className={cls.wrapper}>
        <p className={cls.name}>
          {user.firstName} {user.lastName}
          <span className={cls.subtitle}>{user.userTag}</span>
        </p>
        <p className={cls.department}>{user.position}</p>
      </div>
    </div>
  );
};
