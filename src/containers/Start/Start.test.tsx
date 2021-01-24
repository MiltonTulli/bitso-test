import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Start } from './Start';
import { withRouter } from '../../utils/test';

describe('<Start>', () => {
  let props;

  beforeEach(() => {
    props = {
      saveMatrixDimensions: jest.fn()
    };
  });

  it('Should match snapshot', () => {
    const wrapper = renderer.create(withRouter(<Start {...props} />)).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('Should trigger onChange', () => {
    const wrapper = shallow(<Start {...props} />);
    const select = wrapper
      .find('Landing')
      .dive()
      .find('[data-testid="changeMatrixSize"]');
    select.simulate('change', { target: { value: '5x10' } });
    expect(props.saveMatrixDimensions).toHaveBeenCalledWith({ columns: 5, rows: 10 });
  });
});
