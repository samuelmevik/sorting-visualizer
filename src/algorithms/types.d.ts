export type Frame = {
  values: [number, number];
  type: "current" | "sorted" | "swapping" | "comparing";
};

export type Algorithm = {
  name: string;
  description: string;
  fn: (arr: number[]) => Frame[];
};
