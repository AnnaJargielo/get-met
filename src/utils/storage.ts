const storage = localStorage;

export function getValue<T>(key: string) {
  const value = storage.getItem(key);

  return value && (JSON.parse(value) as T);
}

export function setValue<T>(key: string, value: T) {
  storage.setItem(key, JSON.stringify(value));
}
