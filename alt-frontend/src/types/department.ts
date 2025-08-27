import type { DepartmentName } from "../config/department";

export interface Department {
  id: number;
  name: DepartmentName;
  description: string;
  created_at: string;
  updated_at: string;
}
