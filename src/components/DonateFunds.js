import React, { useState } from 'react';
import {
  Card,
  CardContent,
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from '@mui/material';

const DonateFunds = () => {
  const [amount, setAmount] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [projectName, setProjectName] = useState('');
  const [donationType, setDonationType] = useState('');
  const radioOptions = ['Business', 'Health Care', 'Charity', 'Others'];

  const handleDonate = () => {
    alert(`Thank you for donating $${amount}!`);
  };

  return (
    <div
      style={{
        backgroundImage: 'url("https://images.pexels.com/photos/6646946/pexels-photo-6646946.jpeg?auto=compress&cs=tinysrgb&w=600")',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Card className="text-center" style={{ maxWidth: '500px', width: '100%', backgroundColor: 'white' }}>
        <CardContent>
          <h2 className="mb-4" style={{ color: 'black' }}>
            Donate Funds
          </h2>
          <form>
            <TextField
              fullWidth
              id="name"
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ marginBottom: '16px' }}
            />

            <TextField
              fullWidth
              id="projectName"
              label="Project Name"
              variant="outlined"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              style={{ marginBottom: '16px' }}
            />

            <TextField
              fullWidth
              id="email"
              label="Your Email ID"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ marginBottom: '16px' }}
            />

            <TextField
              fullWidth
              id="phoneNumber"
              label="Phone Number"
              variant="outlined"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              style={{ marginBottom: '16px' }}
            />

            <FormControl component="fieldset" className="mb-3">
              <FormLabel component="legend" style={{ color: 'black' }}>Type of Donation:</FormLabel>
              <RadioGroup
                row
                aria-label="donationType"
                name="donationType"
                value={donationType}
                onChange={(e) => setDonationType(e.target.value)}
              >
                {radioOptions.map((option, index) => (
                  <FormControlLabel
                    key={`radio-${index}`}
                    value={option}
                    control={<Radio />}
                    label={option}
                    style={{ color: 'black' }}
                  />
                ))}
              </RadioGroup>
            </FormControl>

            <TextField
              fullWidth
              id="donationAmount"
              label="Enter the amount you want to donate"
              variant="outlined"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              style={{ marginBottom: '16px' }}
            />

            <Button
              variant="contained"
              type="button"
              onClick={handleDonate}
              style={{ backgroundColor: 'rgb(19, 165, 19)', color: 'black' }}
            >
              Donate
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default DonateFunds;
