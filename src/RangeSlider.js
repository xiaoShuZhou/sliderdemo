import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import AddIcon from '@mui/icons-material/Add'; 
import RemoveIcon from '@mui/icons-material/Remove'; 
import styles from './RangeSlider.module.css';

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider({ weekLabel }) {
  const [value1, setValue1] = React.useState([1, 3]);
  const [value2, setValue2] = React.useState([6, 7]);
  const [showSecondRange, setShowSecondRange] = React.useState(false);
  const [sliderEnabled, setSliderEnabled] = React.useState(true);

  const toggleSecondRange = () => {
    setShowSecondRange(!showSecondRange);
  };

  const handleValue1Change = (e, newValue) => {
    if (showSecondRange && newValue[1] >= value2[0]) {
      setValue2([newValue[1] + 1, value2[1]]);
    }
    setValue1(newValue);
  };

  const handleValue2Change = (e, newValue) => {
    if (newValue[0] <= value1[1]) {
      setValue1([value1[0], newValue[0] - 1]);
    }
    setValue2(newValue);
  };

  const handleCheckboxChange = (e) => {
    setSliderEnabled(e.target.checked);
  };

  return (
    <div className={styles.rangeContainer}>
      <FormControlLabel
        control={
          <Checkbox
            checked={sliderEnabled}
            onChange={handleCheckboxChange}
            name={`sliderEnabled-${weekLabel}`}
            color="primary"
            style={{ color: sliderEnabled ? 'rgb(30, 85, 107)' : 'gray' }}
          />
        }
        label={weekLabel}
      />
      <Box sx={{ width: 300, display: 'flex', flexDirection: 'column', position: 'relative' }}>
        <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', position: 'relative' }}>
          <Slider
            disabled={!sliderEnabled}
            getAriaLabel={() => `range slider 1 ${weekLabel}`}
            value={value1}
            onChange={handleValue1Change}
            valueLabelDisplay="on"
            getAriaValueText={valuetext}
            marks={[
              { value: 1, label: '1' },
              { value: 3, label: '3' },
              { value: 5, label: '5' },
              { value: 7, label: '7' },
            ]}
            min={1}
            max={7}
            sx={{
              '& .MuiSlider-thumb': { bgcolor: sliderEnabled ? 'rgb(30, 85, 107)' : 'gray' },
              '& .MuiSlider-track': { bgcolor: sliderEnabled ? 'rgb(30, 85, 107)' : 'lightgray' },
              '& .MuiSlider-rail': { bgcolor: sliderEnabled ? 'rgb(30, 85, 107)' : 'lightgray' }
            }}
          />
          {showSecondRange && (
            <Slider
              disabled={!sliderEnabled}
              style={{ position: 'absolute', top: 0, left: 0, width: '236px' }}
              getAriaLabel={() => `range slider 2 ${weekLabel}`}
              value={value2}
              onChange={handleValue2Change}
              valueLabelDisplay="on"
              getAriaValueText={valuetext}
              min={1}
              max={7}
              sx={{
                '& .MuiSlider-thumb': { bgcolor: sliderEnabled ? 'rgb(30, 85, 107)' : 'gray' },
                '& .MuiSlider-track': { bgcolor: sliderEnabled ? 'rgb(30, 85, 107)' : 'lightgray' },
                '& .MuiSlider-rail': { bgcolor: sliderEnabled ? 'rgb(30, 85, 107)' : 'lightgray' }
              }}
            />
          )}
          <Button 
            onClick={toggleSecondRange} 
            className={styles.buttonToggle}
            style={{ color: 'rgb(30, 85, 107)' }}
          >
            {showSecondRange ? <RemoveIcon /> : <AddIcon />}
          </Button>
        </Box>
      </Box>
    </div>
  );
}
