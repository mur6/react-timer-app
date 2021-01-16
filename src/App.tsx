import React, {useState} from 'react';
import Box from '@material-ui/core/Box';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';

function App() {
    const [count, setCount] = useState(0);
  return (
    <>
<Box component="span" >
<p>You clicked {count} times</p>
  <Button onClick={() => setCount(count + 1)} variant="contained" color="primary">Count start</Button>

  <Button onClick={() => setCount(count - 1)} variant="contained" color="primary">Count down</Button>
</Box>
    </>
  );
}

export default App;
