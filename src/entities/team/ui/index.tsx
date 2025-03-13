import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../shared/hooks/use-app-dispatch";
import { useAppSelector } from "../../../shared/hooks/use-app-selector";
import { loadTeam } from "../../../store/team/services/load-team";
import { IUser } from "../../../store/team/types/team-types";
import { User } from "../../user";
import cls from "./style.module.scss";

export const Team: React.FC = () => {
  const [isLoading, setIsLoading]= useState<boolean>(false);
  const dispatch = useAppDispatch();
  const team = useAppSelector((state) => state.team.team.items);
  const type = useAppSelector((state) => state.department.department);
  const query = useAppSelector((state) => state.searchValue.searchValue);

  useEffect(() => {
    dispatch(loadTeam({ type }));
  }, [type]);

  useEffect(() => {
   if (team !== undefined) setIsLoading(true)
  }, [team]);

  const filteredTeam = team?.filter((user: IUser) => {
      if (
        user.lastName.toLowerCase().includes(query.toLowerCase()) ||
        user.firstName.toLowerCase().includes(query.toLowerCase())
      ) {
        return true;
      }
      return false;
    })
    .map((user: IUser) => <User key={user.id} user={user} />);

  return (
    <div className={cls.list}>
      {isLoading && filteredTeam}
    </div>
  );
};
