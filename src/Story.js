import Gallery from "react-photo-gallery";
import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";

import images from "./images.json";

/// Randomize the images so they aren't clumped together in how they are named.
images.sort(() => 0.5 - Math.random());

function Story() {
  return (
    <>
      <div
        style={{
          padding: "8rem 2rem 2rem 2rem",
          textAlign: "left",
          maxWidth: "800px",
          margin:"0 auto"
        }}
      >
        <h1 className="pageTitle">Our Story</h1>
        <h3 style={{fontSize:'1.5rem'}}>It’s a tale as old as time</h3>
        <p>
          Boy flies into Mexican city on the same day as girl did for her solo
          birthday trip. They party at Coco Bongo until 4am. They book flights
          to Costa Rica to see where it goes. It was all really quite typical.
        </p>
        <p>
          The truth is, we are so lucky to have found each other in the way that
          we did. After (really) randomly winding up in Mexico on the same day,
          we immediately hit it off. Will was living in Playa Del Carmen and
          begged Mary to come back for a visit at the end of her birthday trip.
          She promised to come back only if he sent her a daily picture of him
          using his inhaler for his asthma he was refusing to use (first example
          of Mary being a good influence on Will?). After Will dutifully
          followed through and Mary came back, it was effectively all the good
          parts of a cheesy romantic comedy (think laughter, long walks on the
          beach, gelato and a much anticipated first kiss underneath the Mexican
          stars). We decided to go visit Mary’s home in Costa Rica a week later.
        </p>
        <p>
          After blurring the line between first date and moving in together, we
          realized we truly never wanted to be apart from one another. So we
          booked flights to wherever the other person was going to be —
          fortunately for us, that meant we spent the next year chasing summer
          across the world. From Paris to Paros, we danced, scooted and jumped
          off cliffs together. It was (and continues to be) as great as it
          sounds.
        </p>

        <h3 style={{fontSize:'1.5rem'}}>The first time we said "I love you"</h3>
        <p>
          Will made this video for Mary for Christmas 2019. It was originally
          intended as a satirical take on <a href="https://traveler.marriott.com/storybooked/">
             Marriott's Storybooked series
          </a>
          , but it morphed into something much more special than that. The video
          showcases real video and drone footage from their travels together.
          Countries featured include Spain, Greece, Croatia, Bosnia and
          Herzegovina, Costa Rica, France, Indonesia, Italy, Mexico, and Canada.
        </p>
        <YoutubeEmbed embedId="rokGy0huYEA" />
        <h3 style={{ paddingTop: "2em" , fontSize:"1.5rem"}}>The Proposal</h3>
        <p>
          Will knew in 2019 that he was going to propose in 2020. He had a plan
          and unless something crazy happened they would find a home base and
          settle down. He envisioned a romantic destination (perhaps Paris?) and
          friends and family joining for an engagement party afterwards.
        </p>
        <p>
          Well, turns out something crazy <em>did</em> happen and instead Will
          ended up proposing with a picture of a sheep.
        </p>
        <img
          src="https://d26vfj57l1h7c2.cloudfront.net/proposal.png"
          style={{ width: "100%" }}
          alt="Will + Ewe + Mary + Me?"
        />
        <p>
          <strong>And it was perfect!</strong> The day we moved into our new
          house, Will tricked Mary into going to the grocery store alone because
          he had a "work emergency". He quickly setup a picnic in their empty
          living room and built a photo collage on the wall of all the places he
          <em> should</em> have proposed. The center piece of this collage was
          the riddle with the "Ewe" (a female sheep) above.
        </p>
        <p>
          We laughed, cried tears of happiness, and slept on the floor that
          night. It was the best first night in our forever home we could have
          imagined.
        </p>
        <p>Below are all the other photos used in that photo wall.</p>
      </div>
      <Gallery photos={images} direction={"column"} />
    </>
  );
}

export default Story;
