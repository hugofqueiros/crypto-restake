import React from 'react';
import Avatar from '@mui/material/Avatar';

export const RandomAvatar = () => {
    // Generate a random number to be used as part of the URL to fetch a random image
    const randomNum = Math.floor(Math.random() * 1000);
    // URL to fetch a random image (replace 'example.com' with your image provider)
    const imageUrl = `https://source.unsplash.com/random/200x200?sig=${randomNum}`;

    return (
        <Avatar alt="Random Avatar" src={imageUrl} />
    );
};
