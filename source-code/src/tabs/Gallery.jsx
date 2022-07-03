import React, { Component } from 'react';
// import { TiDeleteOutline } from 'react-icons/ti';

import * as ImageService from 'service/image-service';
import { Grid, GridItem } from 'components';

import { Button } from 'components';
import { SearchForm } from 'components';

export class Gallery extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isVisible: false,
    error: null,
    isLoading: false,
  };

  componentDidMount() {
    const { query, page } = this.state;

    this.getPhotos(query, page);
  }

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

      this.setState(prevState => ({
        images: [...prevState.images, ...photos],
        isVisible: currentPage < Math.ceil(total_results / per_page),
      }));
    } catch (error) {
      console.error(error);

      this.setState({
        error,
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
    });
  };

  render() {
    const { images, isVisible, isLoading } = this.state;

    return (
      <>
        <SearchForm onSubmit={this.onHandleSubmit} />

        <Grid>
          {images &&
            images.map(({ id, avg_color, alt, src }) => (
              <GridItem key={id} color={avg_color}>
                <img src={src.large} alt={alt} />
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
