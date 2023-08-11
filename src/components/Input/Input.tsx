import { forwardRef } from 'react';
import styles from './Input.module.css';
import cn from 'classnames';
import { InputProps } from './Input.props';

const Input = forwardRef<HTMLInputElement>(function Input({ isValid = true, className, ...props }: InputProps, ref) {
	return (
		<input ref={ref} className={cn(styles['input'], className, {
			[styles['invalid']]: isValid
		})} {...props} />
	);
});

export default Input;