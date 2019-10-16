import React from 'react'
import { shallow } from 'enzyme'
import AppInfo from '../Components/AppInfo'

describe('<AppInfo />', () => {
  it('renders header', () => {
    const component = shallow(<AppInfo />)
    const header = <p className="header_overrideUI">BMI Calculator</p>
    expect(component.contains(header)).toEqual(true)
  });

  it('renders three list elements', () => {
    const component = shallow(<AppInfo />)
    expect(component.find('div')).toHaveLength(5);
  });
});