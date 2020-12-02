import { render, fireEvent } from '@testing-library/react';
import BoxForm from './BoxForm';
import Boxes from './Boxes';

it('renders correctly', () => {
    render(<BoxForm/>)
});

it('matches snapshot', () => {
    const {asFragment} = render(<BoxForm/>);
    expect(asFragment()).toMatchSnapshot;
});

it('allows user to create new box', () => {
    const {getByText} = render(<Boxes/>);
    expect(getByText('pink')).not.toBeInTheDocument();
    
})
