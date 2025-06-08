import { type JSX } from 'react';

type PrimaryButtonProps = {
  children: JSX.Element | string;
  onClick?: () => void;
};

const PrimaryButton = ({ children, onClick }: PrimaryButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="
        px-4 py-[9.5px] bg-[#022959] rounded-sm border-0 cursor-pointer hover:bg-[#164A8A]
        font-ubuntu text-[14px] font-medium leading-[1.5] tracking-[0px] text-white
        md:px-[24.5px] md:py-[14.5px] md:rounded-lg
        md:text-[16px] md:leading-[1.2]
      "
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
