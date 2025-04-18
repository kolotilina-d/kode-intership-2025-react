import { useState, useEffect, useMemo } from "react";
import { useAppDispatch } from "../../../shared/hooks/use-app-dispatch";
import { useAppSelector } from "../../../shared/hooks/use-app-selector";
import { loadTeam } from "../../../store/team/services/load-team";
import { NotFound } from "../../../shared/ui/not-found";
import { IUser } from "../../../store/team/types/team-types";
import { Skeleton } from "../../../widgets/sceleton";
import { User } from "../../user";

import cls from "./style.module.scss";

export const Team: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentYearList, setCurrentYearList] = useState<IUser[]>([]);
  const [nextYearList, setNextYearList] = useState<IUser[]>([]);
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
    // даем время на подгрузку, в это время отображаем Sceleton
    setTimeout(() => {
      if (team !== undefined) setIsLoading(true);
    }, 500);
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
            const currentYear = new Date().getFullYear();
            const birthdayA = new Date(a.birthday);
            birthdayA.setFullYear(currentYear);
            const birthdayB = new Date(b.birthday);
            birthdayB.setFullYear(currentYear);
            const today = new Date();

            // Разделение на два массива
            const thisYearBirthdays = filteredTeam.filter((user: IUser) => {
              const birthdayDate = new Date(user.birthday);
              birthdayDate.setFullYear(currentYear);
              return birthdayDate >= today;
            });

            const nextYearBirthdays = filteredTeam.filter((user: IUser) => {
              const birthdayDate = new Date(user.birthday);
              birthdayDate.setFullYear(currentYear);
              return birthdayDate < today;
            });

            setCurrentYearList(thisYearBirthdays);
            setNextYearList(nextYearBirthdays);

            // Сортировка по дню рождения
            if (birthdayA < birthdayB) return -1;
            if (birthdayA > birthdayB) return 1;
            return 0;

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
      {currentYearList.length > 0 && sort === "По дню рождения" ? (
        currentYearList.map((user: IUser) => (
          <>
            <User key={user.avatarUrl} user={user} />
          </>
        ))
      ) : isLoading ? (
        <>
          {filteredAndSortedTeam.map((user: IUser) => (
            <User key={user.id} user={user} />
          ))}
          {noResults && <NotFound />}
        </>
      ) : (
        [...new Array(6)].map((_, idx) => <Skeleton key={idx} />)
      )}
      {nextYearList.length > 0 && sort === "По дню рождения" && (
        <>
          <div className={cls.line}>
            <p className={cls.date}>{new Date().getFullYear() + 1}</p>
          </div>
          {nextYearList.map((user) => (
            <User key={user.birthday} user={user} />
          ))}
        </>
      )}
    </div>
  );
};
