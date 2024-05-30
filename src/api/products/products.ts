import instance from "@/api/index";
import type { CardObj } from "@/components/Card/class/index-obj";

/** 取得所有產品資料 */
export const getAllProducts = () => {
  return instance.get<CardObj[]>("/products");
};
