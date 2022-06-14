import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ColorToggleButton() {
  const [alignment, setAlignment] = React.useState();
  const [values,setValues] = React.useState();
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const handleClick = (e) => {
   setValues(e.target.value)
   console.log(values)
  }

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      
    >
      <ToggleButton  className="tipsBox" value={5}>5%</ToggleButton>
      <ToggleButton  className="tipsBox" value={10}>10%</ToggleButton>
      <ToggleButton  className="tipsBox" value={15}>15%</ToggleButton>
      <ToggleButton  className="tipsBox" value={20}>20%</ToggleButton>
    </ToggleButtonGroup>
  );
}
