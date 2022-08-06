import { Component } from 'react';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

export class Gallery extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isVisible: false,
    error: null,
    isLoading: false,
    isEmpty: false,
  };

  // Потрібно лише перед тим, щоб показати що працює и не налаштований submit
  // componentDidMount() {
  //   const { query, page } = this.state;

  //   this.getPhotos(query, page);
  // }

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      this.getPhotos(query, page);
    }
  }

  getPhotos = async (query, page) => {
    if (!query) {
      return;
    }

    this.setState({
      isLoading: true,
    });

    try {
      const {
        photos,
        total_results,
        per_page,
        page: currentPage,
      } = await ImageService.getImages(query, page);

      if (photos.length === 0) {
        this.setState({
          isEmpty: true,
        });
      }

      this.setState(prevState => ({
        images: [...prevState.images, ...photos],
        isVisible: currentPage < Math.ceil(total_results / per_page),
      }));
    } catch (error) {
      console.error(error);

      this.setState({
        error: error.message,
      });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  onHandleSubmit = value => {
    this.setState({
      query: value,
      page: 1,
      images: [],
      error: null,
      isEmpty: false,
    });
  };

  render() {
    const { images, isVisible, isLoading, isEmpty, error } = this.state;

    return (
      <>
        <SearchForm onSubmit={this.onHandleSubmit} />

        {error && (
          <Text textAlign="center">❌ Something went wrong - {error}</Text>
        )}

        {isEmpty && (
          <Text textAlign="center">Sorry. There are no images ... 😭</Text>
        )}

        <Grid>
          {images.length > 0 &&
            images.map(({ id, avg_color, alt, src }) => (
              <GridItem key={id}>
                <CardItem color={avg_color}>
                  <img src={src.large} alt={alt} />
                </CardItem>
              </GridItem>
            ))}
        </Grid>

        {isVisible && (
          <Button onClick={this.onLoadMore} disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Load more'}
          </Button>
        )}
      </>
    );
  }
}
