import { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Footer from './Footer';
import Copyright from './Copyright';
import CustomerRating from './CustomerRating';
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
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import fivedollar from './assets/fivedollar.jpg';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

function App() {
  const [hideSignUp, setHideSignUp] = useState(false)

  return (
    <Container width="100vw">
      <Box sx={{ mt: 10, mb: 4 }}>
        <Typography variant="h1" fontWeight="bold" sx={{ mb: 2 }}>
          Stop, Mommy!
        </Typography>
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
          Redefining domain ownership for the 22nd century
        </Typography>

        <Typography variant="body1" sx={{ mt: 6 }}>
          We&apos;re on a mission to make <span style={{textDecoration: "line-through"}}>buying</span> renting and managing domains fun. You shouldn&apos;t have to be a business owner
          or developer to own your own domain, run your own mail server, become an ICANN accredited registrar, or host your own website. With Stop, Mommy! anyone can do it.
        </Typography>

        <Stack sx={{ mt: 4, mb: 2 }} direction={{ xs: 'column', lg: 'row' }} justifyContent="space-evenly" spacing={2}>
          <Card sx={{ width: "45%", p: 2 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Mommy&apos;s got tools for all your needs
              </Typography>
              <Typography variant="h5" component="div">
                As long as those needs are
                <br />
                a website
              </Typography>
              <Typography sx={{ my: 1.5 }} color="text.secondary">
                Built for humans, by robots
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Get started for just $5</Button>
            </CardActions>
          </Card>

          <Card sx={{ width: "45%", p: 2 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Domain Names
              </Typography>
              <Typography variant="h5" component="div">
                Grab a .horse for just $5 *
              </Typography>
              <Typography sx={{ my: 1.5 }} color="text.secondary">
                Just ask Mommy!
              </Typography>
              <Typography variant="caption">
                *It&apos;s not free, you&apos;re gonna need a credit card
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Grab my .horse NOW</Button>
            </CardActions>
          </Card>
        </Stack>

        <Typography variant="h2" fontWeight="bold" sx={{ mt: 10 }} align="center">
          Success in just 1 step.
        </Typography>

        <Tabs value="1" variant="fullWidth" sx={{ mt: 5 }}>
          <Tab
            value="1"
            label="Step 1"
            />
        </Tabs>

        <Stack direction="column" role="tabpanel" sx={{ mt: 3 }} spacing={3} align="center">
          <Typography variant="body1">Everything costs $5, just buy something</Typography>
          <img src={fivedollar} width="450" height="225" />
        </Stack>

        <Typography variant="h5" fontWeight="bold" sx={{ mt: 10 }}>Trusted by at least 1 person</Typography>

        <Box sx={{ overflowX: "auto" }}>
          <Stack direction="row" spacing={5} sx={{ width: "200%", mt: 2 }}>
            <CustomerRating name="Mommy" rating={5} description="I'll never buy a domain again as long as I can rent at Stop, Mommy!" />
            <CustomerRating name="Mom" rating={5} description="Incredible tools to launch my own website. The customer service was top notch" />
            <CustomerRating name="Momma" rating={5} description="Just bought my first .horse, can't wait to get a .unicorn!" />
            <CustomerRating name="Mum" rating={5} description="I've been a web developer for 600 years and nothing even comes close to the ease of Stop, Mommy! Would recommend, couldn't be happier" />
            <CustomerRating name="Daddy" rating={1} description="Absolutely terrible. This company is a joke. I'm going back to GoFather." />
            <CustomerRating name="Mother" rating={5} description="I can't stop yelling Stop, Mommy!" />
          </Stack>
        </Box>
        <Typography variant="body1" sx={{ mt: 2 }}>5 out of 7 based on all the reviews.</Typography>

        <Typography variant="h4" fontWeight="bold" sx={{ mt: 10 }} align="center">
          We&apos;ve got some exciting things planned. Here&apos;s what&apos;s launching later this year
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
        <Copyright />
      </Box>
    </Container>
  )
}

export default App
