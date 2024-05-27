import styles from './card.module.css'
import Button from '../button/button'
import React from 'react'


export default function Card({ title, money, buttonText, buttonType ,handleClick, success=true }) {
  return (
    <div className={styles.card}>
    <h3 className={styles.cardTitle}>
        {`${title}: `}
        <span className={success ? styles.success : styles.failure}>
            {`₹${money}`}
        </span>
    </h3>
    <Button handleClick={handleClick} style={buttonType}>{buttonText}</Button>
    </div>
  )
}
