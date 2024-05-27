import type { RuleExpression } from "vee-validate";

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

/** BaseInput- 類型  */
export enum InputType {
  /** 文字 */
  Text = "text",
  /** 密碼 */
  Password = "password",
  /** 數字 */
  Number = "number",
  /** 檔案 */
  File = "file",
}

/** 基礎input-props */
export interface BaseInputObj {
  /** input類型 */
  inputType?: InputType;
  /** 欄位名稱 */
  name: string;
  /** 預設顯示文字 */
  placeholder?: string;
  /** 驗證規則 */
  rules?: RuleExpression<unknown>;
}

/** 共用- input - props */
export interface BaseInputProps extends BaseInputObj {
  /** 是否錯誤 */
  errors: Partial<Record<string, string | undefined>>;
}
