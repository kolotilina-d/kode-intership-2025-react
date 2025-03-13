import { SortModal } from "../../features/modals";
import { useAppSelector } from "../../shared/hooks/use-app-selector";

export const Modals: React.FC = () => {
  const currentModal = useAppSelector((state) => state.modals.name);

  return <>{currentModal === "sort" && <SortModal />}</>;
};
