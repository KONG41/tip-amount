import * as React from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';



export default function InputAdornments(setValue) {
  const [values, setValues] = React.useState({
    custom: '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <div>
         <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Custom</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={values.custom}
            onChange={handleChange('custom')}
            startAdornment={<InputAdornment position="start">%</InputAdornment>}
            label="Amount"
          />
        </FormControl>
      </div>
    </Box>
  );
}
