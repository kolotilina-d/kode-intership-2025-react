export interface IUser {
  avatarUrl: string,
  birthday: string,
  department: string,
  firstName: string,
  id: string,
  lastName: string,
  phone: string,
  position: string,
  userTag: string,
}
export interface ITeam {
  items: IUser[];
}


