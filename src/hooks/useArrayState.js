import { useMemo, useState, useCallback } from "react";

export function useArrayState(initial = []) {
  const array = useMemo(() => initial, []);
  const [refresh, setRefresh] = useState(0);
  const cb = useCallback((f) => {
    f(array);
    setRefresh((it) => ++it);
  }, []);

  return [array, cb];
}
