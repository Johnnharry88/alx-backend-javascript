export default function iterateThroughObject(reportWithIterator) {
  const employ = [];
  for (const emp of reportWithIterator) {
    employ.push(emp);
  }

  return employ.join(' | ');
}
