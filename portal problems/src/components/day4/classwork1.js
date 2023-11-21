// Import necessary React and Material UI components
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';

// Define the list of favorite fruits
const fruitOptions = ['Apple', 'Banana', 'Cherry', 'Durian', 'Elderberry'];

// Functional component for the form
const MyForm = () => {
  // State variables to store user input
  const [name, setName] = useState('');
  const [selectedFruit, setSelectedFruit] = useState(null);

  // State variable to store the greeting message
  const [greetingMessage, setGreetingMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = () => {
    if (name && selectedFruit) {
      // Construct the greeting message

      // Update the state with the greeting message
      setGreetingMessage(message);
    }
  };

  return (
    <div>
      {/* TextField for entering a name */}
      <TextField
        label="Name"
        data-testid="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {/* Autocomplete input for selecting a favorite fruit */}
      <Autocomplete
        data-testid="autocomplete"
        options={fruitOptions}
        getOptionLabel={(option) => option}
        renderInput={(params) => (
          <TextField {...params} label="Choose a fruit" />
        )}
        value={selectedFruit}
        onChange={(_, newValue) => setSelectedFruit(newValue)}
      />

      {/* Submit button */}
      <Button
        data-testid="button"
        variant="contained"
        color="primary"
        onClick={handleSubmit}
      >
        Submit
      </Button>

      {/* Display the greeting message */}
      {greetingMessage && <p>{greetingMessage}</p>}
    </div>
  );
};

// Export the component for use in other parts of the application
export default MyForm;