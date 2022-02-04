import { Container } from '@material-ui/core';
import CircularProgress from '@mui/material/CircularProgress';

import React, { useContext } from 'react';
import { Context } from '../../context';
import Grid from '@mui/material/Grid';
import Card from '../Card/Card';
const Posts = () => {
  const { photos, isLoading } = useContext(Context);
  console.log(photos);

  return (
    <Container>
      <div className='posts'>
        <h2>Most Recent</h2>
        <span className='line'></span>
        <div className='posts-container'>
          <div className='row'>
            {isLoading ? (
              <CircularProgress />
            ) : (
              photos.map((el) => {
                return (
                  <div className='col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center'>
                    <Card el={el} />
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Posts;
