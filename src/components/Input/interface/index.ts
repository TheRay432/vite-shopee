// 篩選元件-props類型
export interface InputCheckboxGroupProps {
  /** id */
  id: string;
  /** 篩選項目名稱-大項 */
  name: string;
  /** 篩選項目名稱-大項中的小項  */
  value: InputCheckboxGroupItem[];
}

/** 篩選元件-大項中的小項  */
export interface InputCheckboxGroupItem {
  /** id */
  id: string;
  /** 篩選項目名稱  */
  value: string;
}
