import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';

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
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            Heading
          </Typography>
          <Typography>
            This is a media card. You can use this section to describe the content.
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Photo;
