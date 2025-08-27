import { useNavigate } from "react-router-dom";
import { ToolCard } from "../../components/Card/ToolCard";
import { IconButton } from "../../components/common/base/buttons/IconButton";
import { useTools } from "../../hooks/useTools";
import { PlusIcon } from "../../icons/actions/PlusIcon";

export const ToolsPage = () => {
  const { tools, loading, error } = useTools();
  const navigate = useNavigate();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleAddTool = () => {
    navigate("/tools/add");
  };

  // TODO: Catalogue complet
  //Tous les outils du JSON (15+) avec:
  //- Grid cards

  //  Filtres
  //  Search by :
  //  - Department: All, Engineering, Marketing, Design, etc.
  //  - Status: Active, Expiring, Unused
  //  - Cost Range: Slider ou input ranges
  //  - Category: Communication, Development, Design, etc.
  //
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
      <div className="flex justify-between items-center my-8">
        {/* Departments */}
        {/* Status */}
        {/* Cost Range : Slider */}
        {/* Category */}
      </div>

      {/* Tools List */}
      <div className="flex flex-col gap-4">
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </ul>
      </div>
    </div>
  );
};
