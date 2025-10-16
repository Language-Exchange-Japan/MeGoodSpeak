/**
 * Safely sets nested object values in a form data structure
 * @param obj - The form data object to update
 * @param path - The dot-notation path to the property (e.g., "profileOptions.age")
 * @param value - The value to set
 * @returns A new object with the updated value
 */
export function setNestedValue<T>(obj: T, path: string, value: unknown): T {
  const keys = path.split(".");
  const newObj = JSON.parse(JSON.stringify(obj)) as T;
  let curr: Record<string, unknown> = newObj as Record<string, unknown>;
  for (let i = 0; i < keys.length - 1; i++) {
    if (!(keys[i] in curr)) {
      curr[keys[i]] = {};
    }
    curr = curr[keys[i]] as Record<string, unknown>;
  }
  curr[keys[keys.length - 1]] = value;
  return newObj;
}
