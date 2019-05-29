import React from 'react';
import TextField from "@material-ui/core/TextField";
import InputBase from '@material-ui/core/InputBase/index';

function App() {
  return (
    <div className="App">
        <InputBase />
        <TextField
            id="outlined-email-input"
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="outlined"
        />
    </div>
  );
}

export default App;
