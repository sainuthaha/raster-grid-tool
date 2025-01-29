
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { CellList } from '../List';
import { Cell } from '../../../models/Cell';


const dummyCells: Cell[] = [
  { id: 'Cell 1', visible: true },
  { id: 'Cell 2', visible: true },
  { id: 'Cell 3', visible: false },
  { id: 'Cell 4', visible: true }
];

describe('CellList Component', () => {
  it('should render all cells correctly', () => {
    render(<CellList cells={dummyCells} toggleVisibility={jest.fn()} setHighlightedCellId={jest.fn()} />);
    expect(screen.getByText('Cell 1')).toBeTruthy();
    expect(screen.getByText('Cell 2')).toBeTruthy();
    expect(screen.getByText('Cell 3')).toBeTruthy();
    expect(screen.getByText('Cell 4')).toBeTruthy();
  });

  it('should toggle visibility icon on click', () => {
    const toggleVisibility = jest.fn();
    render(<CellList cells={dummyCells} toggleVisibility={toggleVisibility} setHighlightedCellId={jest.fn()} />);
    
    const cell1VisibilityIcon = screen.getByText('Cell 1').nextSibling;
    fireEvent.click(cell1VisibilityIcon);
    expect(toggleVisibility).toHaveBeenCalledWith('Cell 1');
  });

  it('should set highlighted cell id on mouse enter and leave', () => {
    const setHighlightedCellId = jest.fn();
    render(<CellList cells={dummyCells} toggleVisibility={jest.fn()} setHighlightedCellId={setHighlightedCellId} />);
    
    const cell1 = screen.getByText('Cell 1').parentElement;
    fireEvent.mouseEnter(cell1);
    expect(setHighlightedCellId).toHaveBeenCalledWith('Cell 1');
    
    fireEvent.mouseLeave(cell1);
    expect(setHighlightedCellId).toHaveBeenCalledWith(null);
  });
});