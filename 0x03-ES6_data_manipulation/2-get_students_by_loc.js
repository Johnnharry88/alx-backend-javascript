export default function getStudentsByLocation(alx, city) {
  return alx.filter((a) => a.location === city);
}
