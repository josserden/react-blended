import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useUpdateCommentCountMutation } from '../../redux/commentApi';
import styles from './Button.module.css';

export const Button = ({
  children,
  counter,
  role = 'thumbsUp',
  className,
  id,
  ...props
}) => {
  const [updateCount, setUpdateCount] = useState(counter);
  const [updateCommentCount, { isLoading }] = useUpdateCommentCountMutation();
  const variants = {
    [styles.thumbsUp]: role === 'thumbsUp',
    [styles.thumbsDown]: role === 'thumbsDown',
  };

  const onBtnHandleClick = async () => {
    try {
      await updateCommentCount({
        id,
        [role]: counter + 1,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      className={classNames(styles.button, variants)}
      type='button'
      counter={counter}
      onClick={onBtnHandleClick}
      id={id}
      {...props}
    >
      {children}

      <span className={styles.counter}>
        <span
          className={classNames({
            [styles.ping]: isLoading,
          })}
        ></span>
        {counter}
      </span>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  counter: PropTypes.number.isRequired,
  role: PropTypes.string,
  id: PropTypes.string.isRequired,
};
