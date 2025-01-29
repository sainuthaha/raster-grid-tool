import { render, screen } from '@testing-library/react';
import { Cell } from '../../../models/Cell';
import { Grid } from '../Grid';

const dummyCells: Cell[] = [
  { id: 'Cell 1', visible: true },
  { id: 'Cell 2', visible: true },
  { id: 'Cell 3', visible: false },
  { id: 'Cell 4', visible: true }
];

describe('Grid Component', () => {
  const rows = 2;
  const columns = 2;
  const highlightedCellId = 'Cell 1';

  it('should render all visible cells correctly', () => {
    render(
      <Grid 
        cells={dummyCells} 
        rows={rows} 
        columns={columns} 
        highlightedCellId={highlightedCellId} 
      />
    );

    expect(screen.getByText('Cell 1')).toBeTruthy();
    expect(screen.getByText('Cell 2')).toBeTruthy();
  });

  it('should hide invisible cells properly', () => {
    render(
      <Grid 
        cells={dummyCells} 
        rows={rows} 
        columns={columns} 
        highlightedCellId={highlightedCellId} 
      />
    );

    expect(screen.queryByText('Cell 3')).toBeNull();
  });


  it('should not render invisible cells', () => {
    render(
      <Grid 
        cells={dummyCells} 
        rows={rows} 
        columns={columns} 
        highlightedCellId={highlightedCellId} 
      />
    );

    expect(screen.queryByText('Cell 3')).toBeNull();
  });

  it('should render correct number of cells', () => {
    render(
      <Grid 
        cells={dummyCells} 
        rows={rows} 
        columns={columns} 
        highlightedCellId={highlightedCellId} 
      />
    );

    const cellElements = screen.getAllByRole('cell'); // Assuming each cell has role="cell"
    expect(cellElements).toHaveLength(3); // 4 total cells, but 1 is invisible
  });
});
