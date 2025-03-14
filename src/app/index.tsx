import { Modals } from "./modals";
import { AppRouter } from "./router";

export const App: React.FC = () => {

  return (
    <>
      <AppRouter />
      <Modals />
    </>
  );
};
