export const removeDuplicateFromArray = (arr: string[]) => {
  const newArr = new Set(arr);
  return [...newArr];
};
