import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';
import { Grid } from '../Grid/Grid';
import { useGetCommentsQuery } from '../../redux/commentApi';

import { useSelector } from 'react-redux';
import { getFilter } from '../../redux/filterSlice';

export const Comments = () => {
  const { data: comments } = useGetCommentsQuery();

  const filter = useSelector(getFilter);

  const filteredComments = () => {
    return comments.filter(({ content }) =>
      content.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <Grid>
      {comments &&
        filteredComments().map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
    </Grid>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape().isRequired),
};
