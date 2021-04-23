export type PropertiesTypes<T> = T extends {
  [key: string]: (...args: any[]) => infer R;
}
  ? R
  : never;
