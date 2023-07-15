import React from 'react';
import CalculatorComponent from '../components/calculator';

const style = {
  display: 'flex',
  width: '90%',
  padding: '4vh 10vh',
  justifyContent: 'space-evenly',
};

export default function Calculator() {
  return (
    <div style={style}>
      <div>
        <h2 style={{ fontSize: '30px' }}>Let&apos;s Do Some Math</h2>
      </div>
      <CalculatorComponent />
    </div>
  );
}
