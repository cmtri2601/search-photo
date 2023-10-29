import { CircularProgress, ImageList, ImageListItem } from '@mui/material';
import Container from '@mui/material/Container';

interface ISource {
  original: string;
}
interface IPhoto {
  id: number;
  url: string;
  alt: string;
  src: ISource;
}

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
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {photos.map(item => (
          <ImageListItem key={item.id}>
            <img
              srcSet={`${item.src.original}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.src.original}?w=164&h=164&fit=crop&auto=format`}
              alt={item.alt}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
};

export default ListPhoto;
