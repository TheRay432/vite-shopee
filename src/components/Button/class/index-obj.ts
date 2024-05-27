/** 共用-按鈕元件-props */
export interface IButtonProps {
  /** 顯示資料 */
  dataOption: IButtonOption;
  /** 按鈕背景顏色 */
  bgColor?: string;
}
/** 共用-按鈕元件-顯示資料 */
export interface IButtonOption {
  /** 顯示文字 */
  content: string;
  /** 顯示圖示(可選) */
  icon?: string;
}
