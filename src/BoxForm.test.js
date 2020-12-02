import { render, fireEvent, getByText } from '@testing-library/react';
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
    const {getByLabelText, queryByText} = render(<Boxes/>);
    expect(queryByText('pink')).not.toBeInTheDocument();
    fireEvent.change(getByLabelText('Height'), {target: {value: '100px'}});
    fireEvent.change(getByLabelText('Width'), {target: {value: '100px'}});
    fireEvent.change(getByLabelText('Background Color'), {target: {value: 'pink'}});
    fireEvent.click(queryByText('New Box'));
    expect(queryByText('pink')).toBeInTheDocument();
})
