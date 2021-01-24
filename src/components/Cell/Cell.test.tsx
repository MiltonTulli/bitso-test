import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Cell } from './Cell';

describe('<Cell>', () => {
  let props;

  beforeEach(() => {
    props = {
      position: '1-2',
      active: false,
      handleToggle: jest.fn(),
      size: 100
    };
  });

  it('Should match snapshot', () => {
    const wrapper = renderer.create(<Cell {...props} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('Should display inactive css', () => {
    const wrapper = shallow(<Cell {...props} />);
    const root = wrapper.find('[data-testid="cell"]');
    expect(wrapper).toHaveLength(1);
    expect(root.hasClass(/inactive/)).toBe(true);
  });
  it('Should display active css', () => {
    props.active = true;
    const wrapper = shallow(<Cell {...props} />);
    const root = wrapper.find('[data-testid="cell"]');
    expect(root.hasClass(/active/)).toBe(true);
  });

  it('Should handle cell click', () => {
    const wrapper = shallow(<Cell {...props} />);
    const root = wrapper.find('[data-testid="cell"]');
    root.simulate('click');
    expect(props.handleToggle).toHaveBeenCalledWith(props.position);
  });
});
