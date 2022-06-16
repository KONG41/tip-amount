import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ColorToggleButton({values}) {
  const [alignment, setAlignment] = React.useState();

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    values(newAlignment);
  };
  

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
