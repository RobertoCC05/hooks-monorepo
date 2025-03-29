import { useState } from "react";

export function useCustomState(initialValue) {
  const [state, setState] = useState(initialValue);
  return [state, setState];
}
