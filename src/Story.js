import React from 'react';
import YoutubeEmbed from "./YoutubeEmbed";

function Story() {
    return (
        <div style={{padding: '8rem 2rem 2rem 2rem', textAlign: 'center'}}>
            <h1 className='pageTitle'>Our Story</h1>
            <h3>Will and Mary met in Brazil in 2018.</h3>
            <h3 style={{ padding: '2rem 0'}}>Will made this video for Mary for Christmas 2019. It was originally intended as a satirical take on <a href='https://traveler.marriott.com/storybooked/'>Marriott's Storybooked series</a>, but it morphed into something much more special than that. The video showcases real video and drone footage from their travels together. Countries featured include Spain, Greece, Croatia, Bosnia and Herzegovina, Costa Rica,  France, Indonesia, Italy, Mexico, and Canada.</h3>
            <YoutubeEmbed embedId="rokGy0huYEA" />
        </div>
    )
}

export default Story
