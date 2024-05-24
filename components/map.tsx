"use client";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import L from "leaflet";
import { useEffect, useState } from "react";

const icon = L.icon({ iconUrl: "/images/marker-icon.png" });

const Map: React.FC = () => {
  const position: [number, number] = [-6.2909745, 106.8046102];
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="rounded-lg overflow-hidden mt-10">
      <MapContainer center={position} zoom={15} style={{ height: "400px" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={icon}>
          <Popup>
            Harka Office, Alamanda Tower Lantai 2 Unit 1, Jl. TB Simatupang No.
            23-24, Cilandak Bar., Kec. Cilandak, Kota Jakarta Selatan, DKI
            Jakarta 12430
            <Button
              onClick={() =>
                router.push(
                  "https://www.google.com/maps/place/Harka+Office/@-6.2909745,106.8046102,15z/data=!4m2!3m1!1s0x0:0x14bfaef94a8fffdc?sa=X&ved=1t:2428&ictx=111"
                )
              }
              className="mt-3"
              size="sm"
            >
              View on map
            </Button>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
