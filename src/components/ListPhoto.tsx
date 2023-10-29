import { CircularProgress, ImageList, ImageListItem } from '@mui/material';
import Container from '@mui/material/Container';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

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
  isLoadingMore: boolean;
  isAllPhoto: boolean;
  photos: IPhoto[];
  onLoadMore: () => void;
}

const ListPhoto = ({ isLoading, isLoadingMore, isAllPhoto, photos, onLoadMore }: IListPhoto) => {
  const { ref: lastPageRef, inView } = useInView();

  useEffect(() => {
    if (inView) {
      onLoadMore();
    }
  }, [inView]);

  /* Loading */
  if (isLoading) {
    return (
      <Container sx={{ m: 3 }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <>
      {/* No image */}
      {!photos.length && !isLoading && (
        <p>No photo was found. Please enter what you want to search for!</p>
      )}

      {/* Show list image */}
      <ImageList sx={{ width: '100%', height: '100%' }} cols={8} rowHeight={200} gap={8}>
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

        {/* Loading More */}
        {isLoadingMore && (
          <Container sx={{ m: 3 }}>
            <CircularProgress />
          </Container>
        )}

        {/* Show message when all photos have been loaded */}
        {isAllPhoto && (
          <Container sx={{ m: 3 }}>
            <p>All photos have been loaded!</p>
          </Container>
        )}

        <div ref={lastPageRef}></div>
      </ImageList>
    </>
  );
};

export default ListPhoto;
