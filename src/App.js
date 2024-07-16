import React, { useState } from 'react';
import './App.css';

function App() {
  const initialMatrix = Array(3).fill(null).map(() => Array(3).fill(null));
  const [matrix, setMatrix] = useState(initialMatrix);
  const [clicks, setClicks] = useState([]);
  const [clickCount, setClickCount] = useState(0);

  const handleClick = (row, col) => {
    if (clickCount === 8) {
      const newMatrix = matrix.map(row => row.map(cell => null));
      clicks.forEach((click, index) => {
        setTimeout(() => {
          const [r, c] = click;
          setMatrix(prev => {
            const updated = [...prev];
            updated[r][c] = 'orange';
            return updated;
          });
        }, index * 500);
      });
    } else {
      setMatrix(prev => {
        const updated = [...prev];
        updated[row][col] = 'green';
        return updated;
      });
      setClicks([...clicks, [row, col]]);
      setClickCount(prev => prev + 1);
    }
  };

  return (
    <div className="matrix">
      {matrix.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, colIndex) => (
            <div
              key={colIndex}
              className="cell"
              style={{ backgroundColor: cell || 'white' }}
              onClick={() => handleClick(rowIndex, colIndex)}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
