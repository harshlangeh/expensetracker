import React from 'react'
import styles from './button.module.css'

function Button({children, handleClick, style = 'primary', shadow = 'false', type = 'button'}) {
  return (
    <button
        type={type}
        onClick={handleClick}
        className={`${styles.button} ${styles[style]} ${shadow && style.shadow}`}
    >
        {children}
    </button>
  )
}

export default Button