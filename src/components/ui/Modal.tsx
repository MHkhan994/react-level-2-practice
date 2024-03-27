import {createPortal} from "react-dom";
import cn from "../../utils/cn";
import {ChangeEvent, MouseEvent, ReactNode, createContext, useContext, useRef} from "react";

const ModalContext = createContext<TModalContext | null>(null);

type TModalContext = {
  onClose: () => void;
};

type TModal = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal = ({isOpen, onClose, children}: TModal) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleOutsideClose = (e: MouseEvent) => {
    if (!containerRef?.current?.contains(e.target as Node)) {
      onClose();
    }
  };

  return createPortal(
    <ModalContext.Provider value={{onClose}}>
      <div
        className={cn("bg-gray-400/70 fixed inset-0 flex items-center justify-center invisible z-[999]", {
          visible: isOpen,
        })}
        onClick={handleOutsideClose}
      >
        <div ref={containerRef} className="w-[50vw] h-[80vh] bg-white">
          {children}
        </div>
      </div>
    </ModalContext.Provider>,
    document.getElementById("portal") as Element
  );
};

const CloseButton = ({children}: {children?: ReactNode}) => {
  const {onClose} = useContext(ModalContext) as TModalContext;

  return (
    <button onClick={onClose}>
      {children ? (
        children
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="3"
          stroke="currentColor"
          className="w-6 h-6 text-white bg-red-500 rounded-sm"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      )}
    </button>
  );
};

Modal.CloseButton = CloseButton;

export default Modal;
