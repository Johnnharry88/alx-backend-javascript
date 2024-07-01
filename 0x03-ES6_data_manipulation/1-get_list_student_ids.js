export default function getListStudentIds(alx) {
  if (Array.isArray(alx)) {
    return alx.map((x) => x.id);
  }
  return [];
}
