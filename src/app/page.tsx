import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import styles from '../../styles/Home.module.css';

// Dynamic import of WalletConnect with SSR disabled
const WalletConnectWithNoSSR = dynamic(
  () => import('@/components/WalletConnect'),
  { ssr: false }
);

const Home = () => {
  const [entry, setEntry] = useState('');

  const handleInputChange = (event: any) => {
    setEntry(event.target.value);
  };

  const handleSubmit = async () => {
    if (!entry.trim()) {
      alert('Please write something in your diary entry.');
      return;
    }

    // Placeholder for Lens Protocol interaction
    console.log('Diary Entry to Submit:', entry);
    // Integration with Lens Protocol to be implemented here

    // Clear the textarea after submission
    setEntry('');
  };

  return (
    <div className={styles.container}>
      <h1>My Personal Diary</h1>
      <h4>A private diary app that stores entries on Lens Protocol with privacy settings by o1js.</h4>
      <WalletConnectWithNoSSR />
      <textarea
        className={styles.textarea}
        value={entry}
        onChange={handleInputChange}
        placeholder="Write your diary entry here..."
        rows={10}
        cols={50}
      />
      <br />
      <button className={styles.button} onClick={handleSubmit}>
        Save Entry
      </button>
    </div>
  );
};

export default Home;
