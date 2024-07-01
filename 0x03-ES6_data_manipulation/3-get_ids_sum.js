export default function getStudentIdsSum(alx) {
  return alx.reduce((abc, n) => abc + n.id, 0);
}
