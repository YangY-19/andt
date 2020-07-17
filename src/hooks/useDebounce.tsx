import { useState, useEffect } from "react";
function useDebounce(value: any, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    let handle = window.setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handle);
    };
  }, [value, delay]);
  return debouncedValue;
}

export default useDebounce;
