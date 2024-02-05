import React from 'react'
import styles from './styles.module.css';

const CustomHome = () => {
  return (
    <div className={styles.customhome}>
      <video autoPlay loop muted className={styles.video}>
        <source src="https://esv-analytics.fra1.digitaloceanspaces.com/video/ESV%20web%20banner%20(33%20seconds).mp4" type="video/mp4" />
      </video>
      <div className={styles.homeContent}>
        <h1 className={styles.homeTitle}>Custom Home Page</h1>
        <p className={styles.homeContent}>This is a custom home page for your Docusaurus site.</p>
      </div>
    </div>
  )
}

export default CustomHome