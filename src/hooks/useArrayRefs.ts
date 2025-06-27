import { useRef, useCallback } from 'react';

export default function useArrayRefs<T>() {
  const refs = useRef<(T)[]>([]);

  const setRefs = useCallback((index: number) => {
    return (element: T) => {
      refs.current[index] = element;
    };
  }, []);

  return [refs, setRefs] as const;
}