import { VisibilityOffOutlined } from "@mui/icons-material";
import { Cell } from "../../models/Cell";
import VisibilityIcon from "@mui/icons-material/Visibility";

export const CellList: React.FC<{
  cells: Cell[];
  toggleVisibility: (id: string) => void;
  setHighlightedCellId: (id: string | null) => void;
}> = ({ cells, toggleVisibility, setHighlightedCellId }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowY: "auto",
        padding: "10px",
        height: "100%",
      }}
    >
      {cells.map((cell) => (
        <div
          key={cell.id}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px", // Adds spacing between elements
            padding: "5px",
            cursor: "pointer",
          }}
          onMouseEnter={() => setHighlightedCellId(cell.id)}
          onMouseLeave={() => setHighlightedCellId(null)}
        >
          <span
            style={{
              fontWeight: "bold",
              color: "black",
            }}
            onClick={() => toggleVisibility(cell.id)}
          >
            {cell.id}
          </span>
          {cell.visible ? (
            <VisibilityIcon style={{ color: "black" }} onClick={() => toggleVisibility(cell.id)} />
          ) : (
            <VisibilityOffOutlined style={{ color: "black" }} onClick={() => toggleVisibility(cell.id)} />
          )}
        </div>
      ))}
    </div>
  );
};
