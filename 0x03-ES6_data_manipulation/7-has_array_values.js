export default function hasValuesfromArray(set, alx) {
  return alx.every((value) => set.has(value));
}
