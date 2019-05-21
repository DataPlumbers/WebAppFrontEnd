import React from 'react';
import { shallow } from '../enzyme';
import Classify from './Classify';

test('addProperty', () => {

    let resultProperties = ["one","two","three","four"];
    let initialProperties = ["one","two","three"];
    let addProperty = "four";

    const wrapper = shallow(<Classify />);
    const instance = wrapper.instance();
    instance.state.property = addProperty;
    instance.state.properties = initialProperties;
    instance.addProperty();

    expect(instance.state.property).toEqual("");
    expect(instance.state.properties).toEqual(resultProperties);
});

test('handPropertiesListChange', () => {
    let resultProperties = ["one","two","four"];
    let initialProperties = ["one","two","three","four"];
    let removeProperty = "three";

    const wrapper = shallow(<Classify />);
    const instance = wrapper.instance();
    instance.state.properties = initialProperties;
    instance.handPropertiesListChange(removeProperty);

    expect(instance.state.properties).toEqual(resultProperties);
});


const fakeEventProperty = {
    "target":{"name":"property", "value":"prop1"}
};

const fakeEventCategory = {
    "target":{"name":"category", "value":"cat1"}
};

test('handleChange', () =>{
    const wrapper = shallow(<Classify />);
    const instance = wrapper.instance();

    instance.handleChange(fakeEventCategory);
    expect(instance.state.category).toEqual("cat1");
    instance.handleChange(fakeEventProperty);
    expect(instance.state.property).toEqual("prop1");
});
