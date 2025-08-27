import { useNavigate } from "react-router-dom";
import { ToolCard } from "../../components/tools/ToolCard";
import { IconButton } from "../../components/common/base/buttons/IconButton";
import { useTools } from "../../hooks/useTools";
import { PlusIcon } from "../../icons/actions/PlusIcon";
import { useState } from "react";

import { DEPARTMENTS, type DepartmentName } from "../../config/department";
import { ChipsFilter } from "../../components/common/forms/advanced/ChipsFilter";
import {
  MAX_TOOL_COST,
  TOOL_CATEGORIES,
  TOOL_STATUSES,
  type ToolCategory,
  type ToolStatus,
} from "../../config/tool";
import { RangeSlider } from "../../components/common/forms/simple/RangeSlider";

export const ToolsPage = () => {
  const { tools, loading, error } = useTools();
  const navigate = useNavigate();

  const [selectedDepartments, setSelectedDepartments] = useState<
    DepartmentName[]
  >([]);
  const [selectedStatus, setSelectedStatus] = useState<ToolStatus[]>([]);
  const [rangeCost, setRangeCost] = useState<[number, number]>([
    0,
    MAX_TOOL_COST,
  ]);
  const [selectedCategories, setSelectedCategories] = useState<ToolCategory[]>(
    []
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleAddTool = () => {
    navigate("/tools/add");
  };

  //  Filtres

  const handleDepartmentFilterChange = (departments: DepartmentName[]) => {
    setSelectedDepartments(departments);
  };

  const handleStatusFilterChange = (statuses: ToolStatus[]) => {
    setSelectedStatus(statuses);
  };

  const handleCostFilterChange = (value: [number, number]) => {
    setRangeCost(value);
  };

  const handleCategoryFilterChange = (categories: ToolCategory[]) => {
    setSelectedCategories(categories);
  };

  // --- Filtrage ---
  const filteredTools = tools.filter((tool) => {
    // Département
    if (
      selectedDepartments.length > 0 &&
      !selectedDepartments.includes(tool.owner_department as DepartmentName)
    ) {
      return false;
    }

    // Statut
    if (selectedStatus.length > 0 && !selectedStatus.includes(tool.status)) {
      return false;
    }

    // Catégorie
    if (
      selectedCategories.length > 0 &&
      !selectedCategories.includes(tool.category as ToolCategory)
    ) {
      return false;
    }

    if (tool.monthly_cost < rangeCost[0] || tool.monthly_cost > rangeCost[1]) {
      return false;
    }

    return true;
  });

  // Management
  //  CRUD Operations
  //  - Add New Tool: Modal/page avec form validation
  //  - Tool Details: Vue détaillée (modal ou route)
  //  - Bulk Operations: Multi-select avec actions
  //  - Status Management: Enable/Disable/Archive workflows

  return (
    <div>
      {/* Title */}
      <div className="flex justify-between items-center my-8">
        <h1 className="text-2xl font-bold text-text-light">Tools Catalogue</h1>
        <div className="flex items-center gap-2">
          <IconButton
            icon={<PlusIcon />}
            label="Add Tool"
            variant="solid"
            ariaLabel="Add Tool"
            onClick={handleAddTool}
            className="bg-success text-background"
          />
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 items-start my-8">
        <ChipsFilter
          label="Departments"
          options={DEPARTMENTS}
          selectedOptions={selectedDepartments}
          onChange={handleDepartmentFilterChange}
        />
        <ChipsFilter
          label="Status"
          options={TOOL_STATUSES}
          selectedOptions={selectedStatus}
          onChange={handleStatusFilterChange}
        />
        <RangeSlider
          label="Cost"
          min={0}
          max={MAX_TOOL_COST}
          value={rangeCost}
          onChange={handleCostFilterChange}
          className="w-96"
          showValue={true}
          showTooltip={true}
        />
        <ChipsFilter
          label="Category"
          options={TOOL_CATEGORIES}
          selectedOptions={selectedCategories}
          onChange={handleCategoryFilterChange}
        />
      </div>

      {/* Tools List */}
      <div className="flex flex-col gap-4">
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </ul>
      </div>
    </div>
  );
};
