/** 檢核是否為英文數字 */
export function checkIsNum(value: string): boolean {
  return /^[0-9]+$/.test(value);
}
