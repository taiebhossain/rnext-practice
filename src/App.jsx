/* eslint-disable react/prop-types */
import { useState } from 'react';
import { initialTravelPlan } from '../data/places.js';

function PlacesTree({ place }) {
  const childPlaces = place.childPlaces;
  return (
    <>
      <li>
        {place.title}
        {childPlaces.length > 0 && (
          <ol>
            {childPlaces.map((place) => (
              <PlacesTree key={place.id} place={place} />
            ))}
          </ol>
        )}
      </li>
    </>
  );
}
export default function App() {
  const [plan, setPlan] = useState(initialTravelPlan);
  const planets = plan.childPlaces;
  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {planets.map((place) => (
          <PlacesTree key={place.id} place={place} />
        ))}
      </ol>
    </>
  );
}
