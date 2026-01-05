import React, { useEffect, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
const Coverage = () => {
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    fetch("/coverageArea.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAreas(data);
      });
  }, []);

  const position = [23.685, 90.3563];
  const mapRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const location = e.target.location.value;
    const district = areas.find((c) =>
      c.district.toLowerCase().includes(location.toLowerCase())
    );
    if (district) {
      const coord = [district.latitude, district.longitude];
      // console.log(district, coord);
      console.log(mapRef);
      // go to the location
      mapRef.current.flyTo(coord, 14);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-5xl text-center">We are available in 64 districts</h2>

      <div>
        <form className="my-4" onSubmit={handleSearch}>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              name="location"
              className="grow"
              placeholder="Search"
            />
          </label>
        </form>
      </div>

      <div className="h-[800px] w-full border">
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          className="h-[800px]"
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {areas.map((area, index) => (
            <Marker key={index} position={[area.latitude, area.longitude]}>
              <Popup>
                <strong> {area.district}</strong> <br />
                Stores locations: {area.covered_area.join(", ")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
