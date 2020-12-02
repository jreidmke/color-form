import { render, screen } from '@testing-library/react';
import Boxes from './Boxes';

it('renders correctly', () => {
    render(<Boxes/>)
});

it('matches snapshot', () => {
    const {asFragment} = render(<Boxes/>);
    expect(asFragment()).toMatchSnapshot;
});
