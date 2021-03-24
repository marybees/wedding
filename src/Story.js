import Gallery from "react-photo-gallery";
import React from 'react';
import YoutubeEmbed from "./YoutubeEmbed";

import images from './images.json';

/// Randomize the images so they aren't clumped together in how they are named.
images.sort( () => .5 - Math.random() );

function Story() {

    return (
        <div style={{padding: '8rem 2rem 2rem 2rem', textAlign: 'center'}}>
            <h1 className='pageTitle'>Our Story</h1>
            <p style={{ padding: '2rem 0'}}>Will made this video for Mary for Christmas 2019. It was originally intended as a satirical take on <a href='https://traveler.marriott.com/storybooked/'>Marriott's Storybooked series</a>, but it morphed into something much more special than that. The video showcases real video and drone footage from their travels together. Countries featured include Spain, Greece, Croatia, Bosnia and Herzegovina, Costa Rica,  France, Indonesia, Italy, Mexico, and Canada.</p>
            <YoutubeEmbed embedId="rokGy0huYEA" />


            <h3>The Proposal</h3>
            <p>Will waited forever despite knowing since the early days that he wanted to propose. He just couldn't find the right spot. Below are all the places, in retrospect, that could have been appropriate.</p>
            <Gallery photos={images} direction={"column"} />

        </div>
    )
}

export default Story
