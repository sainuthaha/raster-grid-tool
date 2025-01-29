import "./GridSettings.css"; // Importing external CSS for styling

interface GridSettingsProps {
  rows: number;
  columns: number;
  setRows: (rows: number) => void;
  setColumns: (columns: number) => void;
  handleUpdate: () => void; // Added handleUpdate prop
}

const GridSettings: React.FC<GridSettingsProps> = ({ rows, columns, setRows, setColumns, handleUpdate }) => {
  return (
    <div className="grid-settings-container">
      <h3>Grid Settings</h3>
      <div className="input-container">
        <label htmlFor="rows">Rows:</label>
        <input
          id="rows"
          type="number"
          value={rows}
          onChange={(e) => setRows(parseInt(e.target.value, 10))}
          min={1} // Ensures that rows can't be set below 1
        />
      </div>
      <div className="input-container">
        <label htmlFor="columns">Columns:</label>
        <input
          id="columns"
          type="number"
          value={columns}
          onChange={(e) => setColumns(parseInt(e.target.value, 10))}
          min={1} // Ensures that columns can't be set below 1
        />
      </div>
      <button className="update-btn" onClick={handleUpdate}>Update Grid</button>
    </div>
  );
};

export default GridSettings;
