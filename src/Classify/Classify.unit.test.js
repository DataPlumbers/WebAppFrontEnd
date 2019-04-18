import React from 'react';
import { shallow } from '../enzyme';
import Classify from './Classify';

test('addProperty', () => {
   const properties = [];
   const wrapper = shallow(<Classify />);
   const instance = wrapper.instance();

   instance.setState({properties: properties});
   expect((instance.state.properties.length == 0)).toBeTruthy();
   instance.setState({property: "name"});
   instance.addProperty();
   expect((instance.state.properties.length == 1)).toBeTruthy();
   expect(instance.state.property).toEqual("");
});

test('handPropertiesListChange', () => {
   const properties = [];
   const wrapper = shallow(<Classify />);
   const instance = wrapper.instance();
   
   instance.setState({properties: properties});
   expect((instance.state.properties.length == 0)).toBeTruthy();
   instance.setState({property: "name"});
   instance.addProperty();
   expect((instance.state.properties.length == 1)).toBeTruthy();
   instance.handPropertiesListChange("name");
   expect((instance.state.properties.length == 0)).toBeTruthy();
});
