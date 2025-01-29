import "./GridDetails.css"; // Import external CSS for styling

const GridDetails = () => {
  return (
    <div className="grid-details-container">
      <h1 className="grid-title">Interactive Raster Grid</h1>
      <p className="grid-subtitle">
        Customize and interact with the grid dynamically by adjusting rows, columns, and visibility.
      </p>
      <hr className="divider" />
    </div>
  );
};

export default GridDetails;
