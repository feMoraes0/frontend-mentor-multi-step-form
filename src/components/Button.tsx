import { type JSX } from 'react';

export const ButtonType = {
  primary: 'primary',
  secondary: 'secondary',
  additional: 'additional'
} as const;

type ButtonProps = {
  type?: keyof typeof ButtonType;
  children: JSX.Element | string;
  onClick?: () => void;
};

const Button = ({ type = ButtonType.primary, children, onClick }: ButtonProps) => {
  const primaryStyle =
    'px-4 py-[9.5px] bg-[#022959] rounded-sm border-0 cursor-pointer hover:bg-[#164A8A] \
    font-ubuntu text-[14px] font-medium leading-[1.5] tracking-[0px] text-white \
    md:px-[24.5px] md:py-[14.5px] md:rounded-lg \
    md:text-[16px] md:leading-[1.2]';
  const secondaryStyle =
    'px-4 py-[9.5px] bg-[#483EFF] rounded-sm border-0 cursor-pointer hover:bg-[#928CFF] \
    font-ubuntu text-[14px] font-medium leading-[1.5] tracking-[0px] text-white \
    md:px-[24.5px] md:py-[14.5px] md:rounded-lg \
    md:text-[16px] md:leading-[1.2]';
  const additionalStyle =
    'p-[10px] bg-transparent border-0 cursor-pointer \
    font-ubuntu text-[14px] font-medium leading-[1.5] tracking-[0px] text-[#9699AA] hover:text-[#022959] \
    md:px-[24.5px] md:py-[14.5px] md:rounded-lg \
    md:text-[16px] md:leading-[1.2]';

  const getButtonStyleByType = () => {
    const styles = {
      [ButtonType.primary]: primaryStyle,
      [ButtonType.secondary]: secondaryStyle,
      [ButtonType.additional]: additionalStyle
    };
    return styles[type] || primaryStyle;
  };

  return (
    <button onClick={onClick} className={getButtonStyleByType()}>
      {children}
    </button>
  );
};

export default Button;
