import React from 'react'
import styles from './styles.module.css';

const CustomHome = () => {
  const handleExploreNotes = () => {
    // Navigate to notes section
    window.location.href = '/my-notes/docs/AWS/Amplify';
  };

  const handleLearnMore = () => {
    // Show more information about the app
    window.location.href = '/my-notes/docs/AWS/Certificates/Developer/EC2';
  };

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Welcome to Jeb's Notes</h1>
          <p className={styles.heroSubtitle}>A modern knowledge base for technical notes and thoughts</p>
          <div className={styles.ctaButtons}>
            <button
              className={styles.primaryButton}
              onClick={handleExploreNotes}
            >
              Explore Notes
            </button>
            <button
              className={styles.secondaryButton}
              onClick={handleLearnMore}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <h2 className={styles.sectionTitle}>Featured Topics</h2>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <h3>AWS</h3>
            <p>Cloud computing services and architecture</p>
          </div>
          <div className={styles.featureCard}>
            <h3>React</h3>
            <p>Modern frontend development</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Docker</h3>
            <p>Containerization and deployment</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CustomHome
