import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../../shared/hooks/use-app-selector";
import { useAppDispatch } from "../../../shared/hooks/use-app-dispatch";
import { loadTeam } from "../../../store/team/services/load-team";
import { useEffect, useState } from "react";
import { IUser } from "../../../store/team/types/team-types";
import { Error } from "../../../shared/ui/error";
import { arrow, phone, star } from "../../../shared/assets/icons";
import { calculateAge, declineYear, formatDate } from "../../../shared/utils";
import cls from "./style.module.scss";

const Details: React.FC = () => {
  const [user, setUser] = useState<IUser>();

  const navigate = useNavigate();
  const { id } = useParams();
  const [isNotFound, setIsNotFound] = useState(false);
  const dispatch = useAppDispatch();
  const team = useAppSelector((state) => state.team.team.items);
  console.log(team);
  const onNavigate = () => {
    navigate("/");
  };

  useEffect(() => {
    dispatch(loadTeam({ type: "all" }));

    if (team) {
      const user: IUser = team.find((user: IUser) => user.id === id);
      // ищем пользователя по id или отлавливаем ошибку
      if (user) {
        setUser(user);
      } else {
        setIsNotFound(true);
      }
    }
  }, []);

  const formattedDate = formatDate(user?.birthday);
  const birthDate = user?.birthday;
  const age = calculateAge(birthDate);
  const yearDecline = declineYear(age);

  return (
    <>
      {isNotFound && <Error />}
      <div className={cls.container}>
        <div className={cls.cover}>
          <button onClick={onNavigate} className={cls.btn}>
            <img src={arrow} alt="arrow to the right" />
          </button>
          <img src={user?.avatarUrl} alt="avatar" className={cls.avatar} />
          <h1 className={cls.title}>
            {user?.lastName} {user?.firstName}
            <span className={cls.usertag}> {user?.userTag}</span>
          </h1>
          <p className={cls.subtitle}>{user?.position}</p>
        </div>
        <div className={cls.wrapper}>
          <div className={cls.item}>
            <div className={cls.leftside}>
              <img src={star} alt="star" className={cls.img} />
              <p className={cls.text}>{formattedDate}</p>
            </div>
            <div className={cls.age}>
              {age} {yearDecline}
            </div>
          </div>
          <div className={cls.item}>
            <div className={cls.leftside}>
              <img src={phone} alt="phone" className={cls.img} />
              <a
                className={cls.text}
                href={`tel:${user?.phone}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {user?.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
