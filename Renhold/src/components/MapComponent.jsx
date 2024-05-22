import { useState } from "react";
import { APIProvider, Map } from "@vis.gl/react-google-maps";

/**
 * Retrieves the current geolocation of the user.
 * @returns {Promise<Position>} A promise that resolves to the current position of the user.
 */
function getGeoLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

/**
 * Renders a map component with the provided props.
 *
 * @component
 * @param {Object} props - The props for the MapComponent.
 * @returns {JSX.Element} - The rendered MapComponent.
 */
export function MapComponent({ ...props }) {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  const [location, setLocation] = useState({ lat: 1, lng: 0 });

  const userLocation = getGeoLocation();
  userLocation.then((location) =>
    setLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    }),
  );

  return (
    <>
      <APIProvider apiKey={apiKey}>
        <Map defaultCenter={location} {...props} />
      </APIProvider>
    </>
  );
}
