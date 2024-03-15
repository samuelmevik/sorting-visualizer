export type Frame = {
  values: [number, number];
  type: FrameType;
};

export type FrameType = "default" | "sorted" | "swapping" | "comparing";

export type Algorithm = {
  name: string;
  description: string;
  fn: (arr: number[]) => Frame[];
};
