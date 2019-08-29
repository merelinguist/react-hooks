import useStorage, { JSONValue } from './useStorage';

/**
 * Stores a key/value pair statefully in [`localStorage`](https://developer.mozilla.org/docs/Web/API/Window/localStorage).
 *
 * @see [`useState` hook](https://reactjs.org/docs/hooks-reference.html#usestate), which exposes a similar interface
 *
 * @param key Identifier to associate the stored value with.
 * @param initialValue Value used when no item exists with the given key. Lazy initialization is available by using a function which returns the desired value.
 * @param errorCallback Method to execute in case of an error, e.g. when the storage quota has been exceeded or the user has denied permission to persist data.
 * @returns A statefully stored value, and a function to update it.
 *
 * @example
 * const Example = () => {
 *   const [visitCount, setVisitCount] = useLocalStorage<number>('visitCount', 0);
 *   useEffect(() => {
 *     setVisitCount(count => count + 1);
 *   }, []);
 *   // ...
 * };
 */
export default function useLocalStorage<T extends JSONValue>(
  key: string,
  initialValue: T | (() => T) | null = null,
  errorCallback?: (error: DOMException) => void,
): [T, React.Dispatch<React.SetStateAction<T>>] {
  return useStorage(() => localStorage, key, initialValue, errorCallback);
}
