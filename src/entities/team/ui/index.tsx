import { useState, useEffect, useMemo } from "react";
import { useAppDispatch } from "../../../shared/hooks/use-app-dispatch";
import { useAppSelector } from "../../../shared/hooks/use-app-selector";
import { loadTeam } from "../../../store/team/services/load-team";
import { IUser } from "../../../store/team/types/team-types";
import { Skeleton } from "../../../widgets/sceleton";
import { User } from "../../user";

import cls from "./style.module.scss";
import { NotFound } from "../../../shared/ui/not-found";

export const Team: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [noResults, setNoResults] = useState(false);
  const dispatch = useAppDispatch();
  const team = useAppSelector((state) => state.team.team.items);
  const type = useAppSelector((state) => state.department.department);
  const query = useAppSelector((state) => state.searchValue.searchValue);
  const sort = useAppSelector((state) => state.searchValue.selectedFilter);

  useEffect(() => {
    dispatch(loadTeam({ type }));
  }, [type]);

  useEffect(() => {
    if (team !== undefined) setIsLoading(true);
  }, [team]);

  const filteredAndSortedTeam = useMemo(() => {
    if (!team) return [];

    const filteredTeam = team.filter((user: IUser) => {
      const name =
        `${user.firstName} ${user.lastName} ${user.userTag}`.toLowerCase();
      return name.includes(query.toLowerCase());
    });

    const sortedTeam = filteredTeam.sort(
      (
        a: { birthday: string | number | Date; firstName: string },
        b: { birthday: string | number | Date; firstName: any }
      ) => {
        switch (sort) {
          case "По дню рождения":
            return (
              new Date(a.birthday).getTime() - new Date(b.birthday).getTime()
            );
          case "По алфавиту":
            return a.firstName.localeCompare(b.firstName);
          default:
            return 0;
        }
      }
    );

    return sortedTeam;
  }, [team, query, sort]);

  useEffect(() => {
    setNoResults(isLoading && filteredAndSortedTeam.length === 0);
  }, [filteredAndSortedTeam, isLoading]);

  return (
    <div className={cls.list}>
      {isLoading ? (
        <>
          {filteredAndSortedTeam.map((user: IUser) => (
            <User key={user.id} user={user} />
          ))}
          {noResults && <NotFound />}
        </>
      ) : (
        [...new Array(6)].map((_, idx) => <Skeleton key={idx} />)
      )}
    </div>
  );
};
