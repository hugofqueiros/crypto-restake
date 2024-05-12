import React from 'react';
import Avatar from '@mui/material/Avatar';

export const RandomAvatar = () => {
    const randomNum = Math.floor(Math.random() * 1000);
    const imageUrl = `https://source.unsplash.com/random/200x200?sig=${randomNum}`;

    return (
        <Avatar alt="Random Avatar" src={imageUrl} />
    );
};
