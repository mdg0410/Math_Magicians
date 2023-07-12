import React from 'react';
import CalculatorComponent from '../components/calculator';

const style = {
  display: 'flex',
  width: '100%',
};

export default function Calculator() {
  return (
    <div style={style}>
      <div>
        <h2>Let&apos;s Do Some Math</h2>
      </div>
      <CalculatorComponent />
    </div>
  );
}
