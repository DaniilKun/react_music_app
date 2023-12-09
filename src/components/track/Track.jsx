import React from 'react';
import styles from './Track.module.scss';
import { IconButton } from '@mui/material';
import { PlayArrow } from '@mui/icons-material';
import secondsToMMSS from '../../utils/secondsToMMSS';

const Track = ({ title, preview, artists, duration }) => {

  const formattedDuration = secondsToMMSS(duration)

  return (
    <div className={styles.track}>
      <IconButton>
        <PlayArrow />
      </IconButton>
      <img className={styles.preview} src={preview} alt="" />
      <div className={styles.credits}>
        <b>{title}</b>
        <p>{artists}</p>
      </div>
      <p>{formattedDuration}</p>
    </div>
  );
};

export default Track;
