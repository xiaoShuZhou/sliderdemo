import React from 'react';
import RangeSlider from './RangeSlider';
import styles from './App.module.css';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className={styles.appContainer}>
      <h1>MY AVAILABILITY FOR THE NEXT 4 WEEKS</h1>
      <RangeSlider weekLabel="WEEK 1"/>
      <RangeSlider weekLabel="WEEK 2"/>
      <RangeSlider weekLabel="WEEK 3"/>
      <RangeSlider weekLabel="WEEK 4"/>
      <Button variant="contained">Save</Button>
    </div>
  );
}

export default App;
