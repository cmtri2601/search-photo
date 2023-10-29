import { Card, CardMedia, Grid } from '@mui/material';

export interface IPhoto {
  id: number;
  imageURL: string;
}

const Photo = ({ id, imageURL }: IPhoto) => {
  return (
    <Grid item key={id} xs={12} sm={6} md={4}>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardMedia
          component="div"
          sx={{
            // 16:9
            pt: '56.25%',
          }}
          image={imageURL}
        />
      </Card>
    </Grid>
  );
};

export default Photo;
