import { useEffect, RefObject } from "react";

interface IProps<T extends HTMLElement> {
  ref: RefObject<T>;
  onClose: (value: boolean) => void;
}

// Хук для закрытия окна в любой области эрана, кроме области, где установлен переданный ref
export const useClickOutside = <T extends HTMLElement>({ ref, onClose }: IProps<T>) => {
  useEffect(() => {
    function handleClickOutside(e: MouseEvent | TouchEvent) {
      const target = e.target as Node;

      if (ref.current && !ref.current.contains(target)) {
        onClose(false);
      }
    }

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [ref, onClose])
}