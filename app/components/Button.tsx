import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from '~/lib/classNames';


export enum ButtonTheme {
  PRIMARY = 'bg-primary text-white',
  SECONDARY = "bg-secondary text-white",
  OUTLINE = "bg-white border-secondary border",
}


export enum ButtonSize {
  SM = "text-sm",
  L = "text-lg",
  XL = "size-xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  condition?: boolean
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean
}


export const Button: FC<ButtonProps> = (props) => {
  const { children,
    className,
    theme,
    disabled,
    size,
    ...otherProps } = props;


  return (
    <button
      type='button'
      className={classNames(`${theme} font-semibold flex min-h-[48px] justify-center items-center rounded-lg`, {},
        [className!,
        size ? size : ButtonSize.SM
        ])
      }
      {...otherProps}
      disabled={disabled}
    >
      {children}
    </button>
  )
}