import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Photo, { IPhoto } from './Photo';
import { CircularProgress } from '@mui/material';

interface IListPhoto {
  isLoading: boolean;
  photos: IPhoto[];
}

const ListPhoto = ({ isLoading, photos }: IListPhoto) => {
  return (
    <>
      {/* Loading */}
      {isLoading && (
        <Container sx={{ m: 3 }}>
          <CircularProgress />
        </Container>
      )}

      {/* No image */}
      {!photos.length && !isLoading && (
        <p>No photo was found. Please enter what you want to search for!</p>
      )}

      {/* Show list image */}
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {photos.map(photo => (
            <Photo {...photo} />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default ListPhoto;
