import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { GridBoard } from './GridBoard';
import { createMatrix } from '../../utils/matrix.utils';

describe('<GridBoard>', () => {
  let props;
  let x = 10;
  let y = 5;

  beforeEach(() => {
    props = {
      matrix: createMatrix(x, y),
      handleToggle: jest.fn(),
      columns: 5
    };
  });

  it('Should match snapshot', () => {
    const wrapper = renderer.create(<GridBoard {...props} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('Should render correct num of rows', () => {
    const wrapper = shallow(<GridBoard {...props} />);
    const rowEl = wrapper.find('[data-testid="row"]');
    expect(rowEl.length).toEqual(y);
  });

  it('Should render correct num of cols', () => {
    const wrapper = shallow(<GridBoard {...props} />);
    const colEl = wrapper.find('[data-testid="col"]');
    expect(colEl.length).toEqual(y * x);
  });
});
