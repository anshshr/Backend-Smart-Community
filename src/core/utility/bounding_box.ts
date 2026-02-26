export default function getBoundingBox(
  lat: number,
  lng: number,
  radiusKm: number,
) {
  const latDelta = radiusKm / 111;

  const lngDelta = radiusKm / (111 * Math.cos((lat * Math.PI) / 180));

  return {
    minLat: lat - latDelta,
    maxLat: lat + latDelta,
    minLng: lng - lngDelta,
    maxLng: lng + lngDelta,
  };
}
