import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
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
    const cell = screen.getByText('Cell 1');
    expect(cell).toHaveStyle('background-color: transparent');
  });

  it('should render all invisible cells correctly', () => {
    render(
      <Grid 
        cells={dummyCells} 
        rows={rows} 
        columns={columns} 
        highlightedCellId={highlightedCellId} 
      />
    );

    expect(screen.getByText('Cell 3')).toBeTruthy();
    const cell = screen.getByText('Cell 3');
    expect(cell).toHaveStyle('background-color: white');
  });


  it('should apply highlight to the selected cell', () => {
    render(
      <Grid 
        cells={dummyCells} 
        rows={rows} 
        columns={columns} 
        highlightedCellId={highlightedCellId} 
      />
    );
    
    const highlightedCell = screen.getByText('Cell 1');
    const normalCell = screen.getByText('Cell 2');

    expect(highlightedCell).toHaveStyle('border: 2px solid yellow');
    expect(normalCell).toHaveStyle('border: 2px solid black');
  });

});
