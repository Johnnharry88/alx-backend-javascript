export default function clearSet(set, startString) {
  if (startString === undefined || startString.length === 0) {
    return '';
  }
  
  const results = [];

  for (const alx of set.values()) {
    if (typeof alx === 'string' && alx.startsWith(startString)) {
      const alxRes = alx.substring(startString.length);
      
      if (alxRes && alxRes !== alx) {
        results.push(alxRes);
      }
    }
  }

  return results.join('-');
}
