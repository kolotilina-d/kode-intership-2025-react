import { Team } from "../../../entities/team";
import { Department } from "../../../widgets/department";
import { SearchInput } from "../../../widgets/search-form";

const Main: React.FC = () => {
  return (
    <div>
      <SearchInput />
      <Department />
      <Team />
    </div>
  );
};

export default Main;
