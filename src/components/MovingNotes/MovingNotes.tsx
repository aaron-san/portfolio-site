import React from "react";
import "./MovingNotes.css";

type PropTypes = {
  src: string;
  alt: string;
};

function MovingNotes() {
  const ImageCard = (props: PropTypes) => {
    return (
      <div className="image-set">
        <img
          src={`../images/${props.src}`}
          alt={props.alt}
          className="h-32 rounded-t-lg"
        />
        {/* <div className="desc rounded-b-lg">{props.alt}</div> */}
      </div>
    );
  };

  return (
    <div className="container">
      <div className="banner">
        <img src="../images/dallas-skyline.png" alt="Dallas skyline" />
      </div>
      <h2>Moving Notes</h2>
      <div className="flex flex-wrap justify-evenly">
        <div className="city-card">
          <ImageCard src="texas-map.png" alt="Map of Texas" />
          <h3>Texas</h3>
          <ul>
            <li>Warm Weather</li>
            <li>Lower taxes</li>
            <li>Affordable Real Estate?</li>
            <li>Lower electricity bills</li>
            <li>Strong job market</li>
            <li>Food paradise</li>
            <li>Heavy traffic</li>
            <li>Everything is bigger</li>
            <li>
              <a href="https://texas.gov">
                Getting a driver's license, vehicle, voter registrations
              </a>
            </li>
          </ul>
        </div>
        <div className="city-card">
          <h3>Dallas, TX</h3>
          <ul>
            <li>Friendly people</li>
          </ul>
        </div>

        <div className="city-card">
          <ImageCard src="plano-texas.jpg" alt="Plano, TX" />
          <h3>Plano, TX</h3>
          <h4>Pros & Features</h4>
          <ul>
            <li>Thriving suburban area</li>
            <li>25 miles north of Dallas</li>
            <li>Low taxes</li>
            <li>DFW international airport</li>
            <li>Desirable neighborhoods (many options)</li>
            <li>Good schools</li>
            <li>
              Transportation - buses and trains for commuting to work are good
            </li>
            <li>Things to do</li>
            <ul>
              <li>Shopping (Legacy West, The Shops at Legacy, etc.)</li>
              <li>Restaurants (many options)</li>
              <li>Economy (TX has 2nd strongest economy in U.S.)</li>
            </ul>
            <li>
              Nightlife - bars, restaurants, nice date night options, no
              club/loud atmospheres, more calm atmospheres, some live music bars
            </li>
            <li>Safety - 16th safest city in U.S.</li>
            <li>
              Education - some of the best schools in TX o A+ rating based on
              scores, college prep, and diversity
            </li>
            <li>Parks, outdoor activities, kids activities Cons</li>
            <li>Weather - unpredictable/volatile, sunny snowy, etc.</li>
            <li>Older homes & neighborhoods</li>
            <li>
              Traffic - slow, congested, tollways, parking difficulty (Plano has
              grown fast)
            </li>
          </ul>
        </div>
        <div className="city-card">
          <ImageCard src="roundrock-texas.jpg" alt="Round Rock, TX" />
          <h3>Round Rock, TX</h3>
          <ul>
            <li>A suburb of Dallas, TX</li>
          </ul>
          <h4>Pros & Features</h4>
          <ul>
            <li>Economy - lots of undeveloped land and room to grow</li>
            <li>Lots of tech companies moving into Round Rock</li>
            <li>Many things to do!</li>
            <ul>
              <li>Lots of parks</li>
              <li>Huge indoor water park</li>
              <li>Huge park for “Play for all abilities”, (has wi-fi)</li>
            </ul>
            <li>
              Housing - affordable (a little less than in the Austin market,
              usually) ~$320k for a starter home
            </li>
            <li>Easily accessible by I-35 (access to Austin)</li>
            <li>Good schools - highly rated</li>
            <li>Good shopping - premium outlet mall off of I-35</li>
          </ul>
          <h4>Cons</h4>
          <ul>
            <li>Unpredictable weather + Hot TX heat</li>
            <li>Allergies year-round</li>
            <li>Traffic (rush hour is bad on I-35 to downtown!)</li>
            <ul>
              <li>
                If 25 mins is average, add 20-30 mins when there is an accident
              </li>
            </ul>
            <li>
              Suburb (subset of Austin area) - restaurants and nice downtown
              with some live music and bars, but n club or party scenes, a small
              pool hall
            </li>
            <li>No major sports teams (can be a pro!)</li>
          </ul>
        </div>
        <div className="city-card">
          <h3>Frisco, TX</h3>
          <ul>
            <li>Pros</li>
            <ul>
              <li>Has nice outdoor parks</li>
              <li>High income earners</li>
            </ul>
            <li>Cons</li>
            <ul>
              <li>
                Looks like a small town with few attractions and shopping
                centers
              </li>
              <li>Has a few attractions</li>
              <li>Expensive homes</li>
            </ul>
          </ul>
        </div>
        <div className="city-card">
          <h3>Irvine, TX</h3>
          <ul>
            <li>
              Appears to be a quiet suburb with a nice city center featuring a
              Venice-inspired riverway cutting through nice shops, restaurants
              and business offices
            </li>
            <li>Next to the DFW airport</li>
          </ul>
        </div>
        <div className="city-card">
          <h3>Jarrell, TX</h3>
          <ul>
            <li>North of Austin</li>
            <li>Pros</li>
            <ul>
              <li>Affordable homes</li>
              <li>Growing</li>
            </ul>
            <li>Cons</li>
            <ul>
              <li>Weather (central TX weather)</li>
            </ul>
          </ul>
        </div>
        <div className="city-card">
          <h3>Colorado</h3>
        </div>

        <h3>Immigrant Visa for Spouse of a U.S. Citizen</h3>
      </div>
    </div>
  );
}

export default MovingNotes;
