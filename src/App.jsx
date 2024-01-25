import { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Footer from './Footer';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import ApartmentIcon from '@mui/icons-material/Apartment';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import CampaignIcon from '@mui/icons-material/Campaign';
import CakeIcon from '@mui/icons-material/Cake';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function App() {
  const [hideSignUp, setHideSignUp] = useState(false)

  return (
    <Container width="60vw" sx={{ mx: '20%' }}>
      <Box sx={{ mt: 10, mb: 4 }}>
        <Typography variant="h1" fontWeight="bold" sx={{ mb: 2 }}>
          Stop, Mommy!
        </Typography>
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
          Redefining domain ownership for the 22nd century
        </Typography>

        <Typography variant="body1" sx={{ mt: 6 }}>
          We&apos;re on a mission to make <span style={{textDecoration: "line-through"}}>buying</span> renting and managing domains fun. You shouldn&apos;t have to be a business owner
          or developer to own your own domain, run your own mail server, or host your own website. With Stop, Mommy! anyone can do it.
        </Typography>

        <Typography variant="h4" fontWeight="bold" sx={{ mt: 10 }} align="center">
          Here&apos;s what&apos;s launching later this year
        </Typography>

        <Stack sx={{ mt: 4, mb: 2 }} direction={{ xs: 'column', lg: 'row' }} justifyContent="space-evenly" divider={<Divider orientation="vertical" flexItem />} spacing={2}>
          <Paper sx={{ width:"33%", p: 5, position: "relative" }}>
            <Chip sx={{ position: "absolute", top: 10, left: 10 }} color="warning" icon={<CakeIcon />} label="I'll never buy again!!"/>
            <Stack mt={2} spacing={2}>
              <Box align="center">
                <ApartmentIcon />
                <Typography fontWeight="bold">Rent domains</Typography>
              </Box>
              <Typography>Why buy when you can rent? It&apos;s the same thing, except without those pesky annual renewal fees</Typography>
            </Stack>
          </Paper>

          <Paper sx={{ width:"33%", p: 5, position: "relative" }}>
            <Chip sx={{ position: "absolute", top: 10, left: 10 }} color="info" icon={<CampaignIcon />} label="Wow!!"/>
            <Stack mt={2} spacing={2}>
              <Box align="center">
                <CalendarMonthIcon />
                <Typography fontWeight="bold">Any length of time</Typography>
              </Box>
              <Typography>A day, a month, a year. Any domain is yours for any length of time</Typography>
            </Stack>
          </Paper>

          <Paper sx={{ width:"33%", p: 5, position: "relative" }}>
            <Chip sx={{ position: "absolute", top: 10, left: 10 }} color="success" icon={<TurnedInIcon />} label="Up to 69% off!!"/>
            <Stack mt={2} spacing={2}>
              <Box align="center">
                <CreditCardIcon />
                <Typography fontWeight="bold">Only $5</Typography>
              </Box>
              <Typography>No matter what, no matter how long, any TLD</Typography>
            </Stack>
          </Paper>
        </Stack>

        <Stack direction="column" sx={{ width: "100%", mt: 10, px: 5 }} alignItems="stretch" spacing={2}>
          <Stack direction="row" spacing={2}>
            <RocketLaunchIcon />
            <Typography variant="body1" sx={{ width: "100%" }}>Ready to get started? Sign up to be notified when we&apos;re ready to launch!</Typography>
          </Stack>
          {hideSignUp ? (
            <Stack direction="row" spacing={2}>
              <CheckCircleIcon color="success" />
              <Typography variant="body1" sx={{ width: "100%" }}>Success! Keep an eye on your inbox for exciting news</Typography>
            </Stack>
          ) : (
            <>
              <TextField sx={{ width: "100%" }} label="Enter your email" variant="standard" />
              <Button onClick={() => setHideSignUp(true)} sx={{ width: "100%" }} variant="contained">Sign me up!</Button>
            </>
          )}
        </Stack>

        <Footer />
      </Box>
    </Container>
  )
}

export default App
