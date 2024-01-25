import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function ProTip() {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: 'text.secondary' }}>
        {'Show some'}
        <FavoriteIcon sx={{ mx: 1, verticalAlign: 'middle' }} />
        {'by screaming #StopMommy!'}
    </Typography>
  );
}
