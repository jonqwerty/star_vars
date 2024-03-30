export const isStringInArrays = (
  str: string,
  array1: string[],
  array2: string[],
  array3: string[],
): boolean => {
  return array1.includes(str) || array2.includes(str) || array3.includes(str);
};
