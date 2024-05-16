import React, { useState } from 'react';
import styles from './Demo.module.css';

function Demo() {
  const [isVisible, setIsVisible] = useState(true);

  function handleRemove() {
    setIsVisible(false);
  }

  return (
    <div>
      {isVisible && (
        <div className={styles.seconddiv}>
          <h1>Good boy</h1>
          <button onClick={handleRemove}>Remove</button>
        </div>
      )}
    </div>
  );
}

export default Demo;
