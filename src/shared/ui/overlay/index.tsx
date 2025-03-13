import cls from "./style.module.scss";

interface IProps {
  children: React.ReactNode;
  onClose: () => void;
}

export const Overlay: React.FC<IProps> = ({ children, onClose }) => {
  return (
    <div className={cls.overlay}
      onClick={onClose}
    >
      <div className={cls.content}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}