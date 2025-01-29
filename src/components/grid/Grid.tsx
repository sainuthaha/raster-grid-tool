import imageSrc from '../../assets/nature.jpeg';
import { Cell } from '../../models/Cell';

export const Grid: React.FC<{ 
  cells: Cell[];
  rows: number;
  columns: number;
  highlightedCellId: string | null;
}> = ({ cells, rows, columns, highlightedCellId }) => {
  const cellWidth = 100;
  const cellHeight = 100;

  return (
    <div
      style={{
        position: "relative",
        display: "inline-block",
        
        width: columns * cellWidth,
        height: rows * cellHeight,
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: `${columns * cellWidth}px ${rows * cellHeight}px`, // Ensure image covers the grid area
      }}
    >
      {cells.map((cell, index) => {
        const row = Math.floor(index / columns);
        const col = index % columns;
        const left = col * cellWidth;
        const top = row * cellHeight;
        const isHighlighted = highlightedCellId === cell.id;

        // Don't render invisible cells
        if (!cell.visible) return (
          <div
            key={cell.id}
            style={{
              position: "absolute",
              top: top,
              left: left,
              width: cellWidth,
              height: cellHeight,
              backgroundColor: "white", // Invisible cells are shown as white
              border: `2px solid black`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            {cell.id}
          </div>
        );

        return (
          <div
            key={cell.id}
            style={{
              position: "absolute",
              top: top,
              left: left,
              width: cellWidth,
              height: cellHeight,
              border: `2px solid ${isHighlighted ? 'yellow' : 'black'}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              backgroundColor: "transparent", // Show the image for visible cells
            }}
          >
            {cell.id}
          </div>
        );
      })}
    </div>
  );
};
