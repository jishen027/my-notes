import React from 'react'
import styles from './styles.module.css';

const CustomHome = () => {
  return (
    <div className={styles.customhome}>
      <div className={styles.homeContent}>
        <h1 className={styles.homeTitle}>Welcome to Jeb's Notes</h1>
        <p className={styles.homeContent}>This is a collection of notes and thoughts on various topics.</p>
      </div>
    </div>
  )
}

export default CustomHome