import React from "react";

function MovingNotes() {
  return (
    <div className="bg-indigo-500">
      <div className="flex flex-wrap m-3 gap-x-2">
        <img src="../images/texas-map.png" alt="Map of Texas" height="100" />
        <img src="../images/plano-texas.jpg" alt="Plano Texas" height="100" />
        <img
          src="../images/roundrock-texas.jpg"
          alt="Round Rock Texas"
          height="200"
        />
      </div>

      <h2>Moving Notes</h2>
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
      <h3>Dallas, TX</h3>
      <ul>
        <li>Friendly people</li>
      </ul>
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
          Nightlife - bars, restaurants, nice date night options, no club/loud
          atmospheres, more calm atmospheres, some live music bars
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
          Suburb (subset of Austin area) - restaurants and nice downtown with
          some live music and bars, but n club or party scenes, a small pool
          hall
        </li>
        <li>No major sports teams (can be a pro!)</li>
      </ul>
      <h3>Immigrant Visa for Spouse of a U.S. Citizen</h3>
    </div>
  );
}

export default MovingNotes;
