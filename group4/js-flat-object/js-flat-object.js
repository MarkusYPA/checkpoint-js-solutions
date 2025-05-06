export function flattenAndMap(obj, mapper) {
  const flattened = {};
  //let originalKeysCount = 0;
  //let transformedKeysCount = 0;

  function recurse(current, path) {

    for (const [key, value] of Object.entries(current)) {
      const newPath = path ? `${path}.${key}` : key;

      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {

        // Continue flattening for nested objects
        recurse(value, newPath);

      } else {
        //originalKeysCount++;
        
        if (Array.isArray(value)) {
          // Map each element in the array
          flattened[newPath] = value.map(mapper);
        } else {
          flattened[newPath] = mapper(value);
        }
      }
    }

  }

  recurse(obj, '');

  return {
    flattened: flattened,
    //originalKeysCount,
    //transformedKeysCount,
    originalKeysCount: Object.keys(flattened).length,
    transformedKeysCount: Object.keys(flattened).length
  };
}

// Evidently originalKeysCount and transformedKeysCount are always equal and the number of keys in the result?
