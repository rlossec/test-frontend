import { ToolCard } from "../components/Card/ToolCard";
import { Button } from "../components/common/base/buttons/Button";
import { useTools } from "../hooks/useTools";
import { PlusIcon } from "../icons/actions/PlusIcon";

export const ToolsPage = () => {
  const { tools, loading, error } = useTools();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-text-light">Tools Catalogue</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <PlusIcon className="w-4 h-4" />
            <p className="text-sm">Add Tool</p>
          </Button>
        </div>
      </div>

      {/* Tools List */}
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </ul>
    </div>
  );
};
