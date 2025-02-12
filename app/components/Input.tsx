import { FC, InputHTMLAttributes } from 'react';
import { classNames } from '~/lib/classNames';


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  condition?: boolean
  square?: boolean;
  disabled?: boolean
}


export const Input: FC<InputProps> = (props) => {
  const {
    className,
    name,
    placeholder,
    disabled,
    ...otherProps } = props;


  return (
    <input
      type='text'
      name={name}
      placeholder={placeholder}
      className={classNames(`outline-black py-5 px-4 h-14 rounded-lg bg-slate-100 w-full text-sm`, {},
        [className!])
      }
      {...otherProps}
      disabled={disabled}
    />
  )
}