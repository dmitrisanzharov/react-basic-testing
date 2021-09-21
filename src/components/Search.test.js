import { render, screen, fireEvent } from '@testing-library/react';
import Search from './Search'; 

it('was it rendered', ()=> {
    const {queryByTitle} = render(<Search />);
    const searchBar = queryByTitle('mySearchBar');
    expect(searchBar).toBeDefined();
});

describe('is the input actually typing', ()=> {
    it('onChange', ()=> {
        const {queryByTitle} = render(<Search />);
        const searchBar = queryByTitle("mySearchBar");
        fireEvent.change(searchBar, {target: {value: 'testValue'}});
        expect(searchBar.value).toEqual('testValue');
    })
});

test('renders learn react link', () => {
    render(<Search />);
    const linkElement = screen.getByText(/Some random text/i);
    expect(linkElement).toBeInTheDocument();
  });