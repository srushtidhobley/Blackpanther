// src/components/Button.tsx

import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode; // The icon inside the button
  onClick?: () => void; // A function to run when clicked
  variant?: 'primary' | 'secondary' | 'social'; // The style of the button
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  fullWidth?: boolean; // If true, the button will take up 100% of its container's width
  download?: boolean; // If true, the link will be a download link
}

const Button = ({
  children,
  onClick,
  variant = 'primary', // Default to the 'primary' style
  type = 'button',
  href,
  fullWidth = false,
  download = false,
}: ButtonProps) => {

  const classNames = `
    ${styles.button}
    ${styles[variant]}
    ${fullWidth ? styles.fullWidth : ''}
  `;

  if (href) {
    return (
      <a
        href={href}
        className={classNames}
        target={download ? '_self' : '_blank'} // Open links in a new tab unless it's a download
        rel="noopener noreferrer"
        download={download}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classNames}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;