import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../shared/hooks/use-app-dispatch";
import { useAppSelector } from "../../../shared/hooks/use-app-selector";
import { loadTeam } from "../../../store/team/services/load-team";
import { IUser } from "../../../store/team/types/team-types";
import { User } from "../../user";
import { Skeleton } from "../../../widgets/sceleton";
import cls from "./style.module.scss";

export const Team: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const team = useAppSelector((state) => state.team.team.items);
  const type = useAppSelector((state) => state.department.department);
  const query = useAppSelector((state) => state.searchValue.searchValue);
  const filter = useAppSelector((state) => state.searchValue.searchFilter);

  useEffect(() => {
    dispatch(loadTeam({ type }));
  }, [type]);

  useEffect(() => {
    if (team !== undefined) setIsLoading(true);
  }, [team]);

  const filteredTeam = team
    ?.filter((user: IUser) => {
      if (
        user.lastName.toLowerCase().includes(query.toLowerCase()) ||
        user.firstName.toLowerCase().includes(query.toLowerCase())
      ) {
        return true;
      }
      return false;
    })
    .map((user: IUser) => <User key={user.id} user={user} />);

  useEffect(() => {
    if (filter === "По алфавиту") {
      filteredTeam.sort(function (a:IUser, b:IUser) {
        if (a.lastName > b.lastName) {
          return 1;
        }
        if (a.lastName > b.lastName) {
          return -1;
        }
        return 0;
      });
      console.log('dkdfgg')
    } else if (filter === "По дню рождения") {
      filteredTeam.sort(function (a:IUser, b:IUser) {
        if (a.birthday > b.birthday) {
          return 1;
        }
        if (a.birthday > b.birthday) {
          return -1;
        }
        return 0;
      });
    }
    console.log(filteredTeam);
    return filteredTeam
  }, [filter]);

  return (
    <div className={cls.list}>
      {isLoading
        ? filteredTeam
        : [...new Array(6)].map((_, idx) => <Skeleton key={idx} />)}
    </div>
  );
};
