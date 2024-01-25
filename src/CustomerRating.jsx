import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import PropTypes from 'prop-types';

CustomerRating.propTypes = {
  name: PropTypes.string,
  rating: PropTypes.number,
  description: PropTypes.string,
};

export default function CustomerRating({ name, rating, description }) {
  return (
    <Card sx={{ width: "300px", p: 2 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {name}
        </Typography>
        <Rating
            readOnly
            value={rating}
            max={7}
        />
        <Typography sx={{ my: 1.5 }} color="text.secondary">
          {description}
        </Typography>
        <Typography variant="caption">
            Stop, Mommy! Customer
        </Typography>
      </CardContent>
    </Card>
  );
}
