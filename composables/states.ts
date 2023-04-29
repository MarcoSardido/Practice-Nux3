export const useCounter = (initialValue: number) => useState<number>("counter", () => initialValue | 0)
export const useColor = () => useState<string>("color", () => 'blue')