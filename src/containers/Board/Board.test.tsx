import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Board } from './Board';
import { createMatrix } from '../../utils/matrix.utils';
import { withRouter } from '../../utils/test';

describe('<Board>', () => {
  let props;

  beforeEach(() => {
    props = {
      columns: 5,
      rows: 5,
      matrix: createMatrix(5, 5),
      islands: 3,
      activeCells: 3,
      init: jest.fn(),
      toggleCell: jest.fn()
    };
  });

  it('Should match snapshot', () => {
    const wrapper = renderer.create(withRouter(<Board {...props} />)).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('Should init on didmount', () => {
    shallow(<Board {...props} />);
    expect(props.init).toHaveBeenCalled();
  });

  it('Should trigger toggleCellStatus', () => {
    const stringTest = '1-2';
    const wrapper = shallow(<Board {...props} />);
    const instance = wrapper.instance();
    (instance as Board).toggleCellStatus(stringTest);
    expect(props.toggleCell).toHaveBeenCalledWith(stringTest);
  });
});
