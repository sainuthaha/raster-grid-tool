import { useState } from "react";
import { Grid } from "./components/grid/Grid";
import { Cell } from "./models/Cell";
import { CellList } from "./components/list/List";
import GridSettings from "./components/gridsettings/GridSettings";
import GridDetails from "./components/gridDetails/GridDetails";

const CELL_SIZE = 100; // Define cell size for consistent calculations

const App: React.FC = () => {
  const [rows, setRows] = useState(3);
  const [columns, setColumns] = useState(3);
  const [cells, setCells] = useState<Cell[]>(() => {
    const totalCells = rows * columns;
    return Array.from({ length: totalCells }, (_, i) => ({
      id: `Cell ${i + 1}`,
      visible: true,
    }));
  });

  const [newRows, setNewRows] = useState(rows);
  const [newColumns, setNewColumns] = useState(columns);
  const [highlightedCellId, setHighlightedCellId] = useState<string | null>(null);

  // Compute grid height based on cell size and rows
  const gridHeight = rows * CELL_SIZE;

  // Handle update button click to update grid size and cells
  const handleUpdate = () => {
    setRows(newRows);
    setColumns(newColumns);
    const totalCells = newRows * newColumns;
    setCells(Array.from({ length: totalCells }, (_, i) => ({
      id: `Cell ${i + 1}`,
      visible: true,
    })));
  };

  return (
   <div
      style={{
        display: "flex",
        alignItems: "center",      // Centers content vertically
        flexDirection: "column",   // Stack the content vertically
        width: "100%",             // Full width of the page
      }}
    >
      <GridDetails />
      <GridSettings
        rows={newRows}
        columns={newColumns}
        setRows={setNewRows}
        setColumns={setNewColumns}
        handleUpdate={handleUpdate}
      />

     
      <div style={{ display: "flex", gap: "10px", marginTop: "20px", justifyContent: "center", width: "100%" }}>
        {/* List Component in the first column */}
        <div
          style={{
            flex: 1,
            maxHeight: `${gridHeight}px`, // Set the height equal to the grid height
            overflowY: "auto", // Enable vertical scrolling if the content overflows
            border: "2px solid black", // Add border to the list container
            minWidth: "250px", // Optional: Set a minimum width for the list
          }}
        >
          <CellList
            cells={cells}
            toggleVisibility={(id: string) => {
              setCells((prevCells) =>
                prevCells.map((cell) =>
                  cell.id === id ? { ...cell, visible: !cell.visible } : cell
                )
              );
            }}
            setHighlightedCellId={setHighlightedCellId}
          />
        </div>

        {/* Grid Component in the second column */}
        <div
          style={{
            flex: 1,
            height: `${gridHeight}px`, // Set the height equal to the grid height
           
            minWidth: "250px", // Optional: Set a minimum width for the grid
          }}
        >
          <Grid
            cells={cells}
            rows={rows}
            columns={columns}
            highlightedCellId={highlightedCellId}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
