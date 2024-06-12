import React, { useState } from 'react';
import styles from "./page.module.css";
"use client";

export default function Home() {
  const [boxes, setBoxes] = useState(Array(10).fill(''));
  const [history, setHistory] = useState<number[]>([]);

  interface BoxProps {
    index: number;
    value: string;
    onClick: (index: number) => void;
  }

  const onBackButtonClick = () => {
    if (history.length > 0) {
      const lastIndex = history.pop();
      if (lastIndex !== undefined) { 
        const newBoxes = [...boxes];
        newBoxes[lastIndex] = '';
        setBoxes(newBoxes);
        setHistory([...history]); 
      }
    }
  };

  const onSquareClick = (index: number) => {
    if (boxes[index] === '') {
      const newBoxes = [...boxes];
      newBoxes[index] = 'X';
      setBoxes(newBoxes);
      setHistory([...history, index]);
    }
  };

  const Box: React.FC<BoxProps> = ({ index, value, onClick }) => {
    return (
      <div className={styles.square} onClick={() => onClick(index)}>
        {value}
      </div>
    );
  };

  return (
    <main className={styles.main}>
      <button className={styles.backButton} onClick={onBackButtonClick}>
        GERİ AL
      </button>

      <div className={styles.squareContainer}>
        {boxes.map((box, index) => (
          <Box key={index} index={index} value={box} onClick={onSquareClick} />
        ))}
      </div>
    </main>
  );
} 

