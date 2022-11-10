import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { BiMailSend } from 'react-icons/bi';
import { useAddCommentMutation } from '../../redux/commentApi';
import styles from './Form.module.css';
import { Spinner } from '../Spinner/Spinner';

export const Form = () => {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [addComment, { isLoading, isSuccess }] = useAddCommentMutation();

  const onHandleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setAuthor(value);
        return;

      case 'text':
        setContent(value);
        return;

      default:
        return;
    }
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();

    if (content.trim() === '' || author.trim() === '') {
      toast.error('All fields must be filled !');
      return;
    }

    try {
      await addComment({ author, content });
      toast.success('Comment added !');
    } catch (error) {
      toast.error('❌', error.message);
      console.error(error);
    }

    setAuthor('');
    setContent('');
  };

  return (
    <div className={styles.formWrapper}>
      <form className={styles.form} onSubmit={onHandleSubmit}>
        <label className={styles.label}>
          <span className={styles.labelName}>Full name</span>
          <input
            type='text'
            name='name'
            className={styles.input}
            value={author}
            onChange={onHandleChange}
          />
        </label>

        <label className={styles.label}>
          <span className={styles.labelName}>Your comment</span>
          <textarea
            className={styles.input}
            name='text'
            rows='5'
            value={content}
            onChange={onHandleChange}
          ></textarea>
        </label>

        <button className={styles.formBtn}>
          {isLoading ? (
            <Spinner size='sm' />
          ) : (
            <>
              <BiMailSend className={styles.icon} />
              Send
            </>
          )}
        </button>
      </form>
    </div>
  );
};
