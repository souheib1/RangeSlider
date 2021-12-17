import {Slider, Typography } from '@material-ui/core';
import React from 'react';

const Sliderr = () => {
    return (
        <div>

<Typography id="discrete-slider-restrict" gutterBottom>
  10
</Typography>

<Slider  defaultValue={20}
  getAriaValueText={valuetext}
  aria-labelledby="discrete-slider-custom"
  step={10}
  valueLabelDisplay="auto"
  marks={marks}
/>           
        </div>
    );
};

export default Sliderr;