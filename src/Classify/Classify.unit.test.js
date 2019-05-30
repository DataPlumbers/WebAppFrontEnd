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


const mockEventProperty = {
    "target":{"name":"property", "value":"prop1", "label":"Property"}
};

const mockEventCategory = {
    "target":{"name":"category", "value":"cat1", "label":"Category"}
};

test('handleChange', () =>{
    const wrapper = shallow(<Classify />);
    const instance = wrapper.instance();

    instance.handleChange(mockEventCategory);
    expect(instance.state.category).toEqual("cat1");
    instance.handleChange(mockEventProperty);
    expect(instance.state.property).toEqual("prop1");
});

test('onSelectCategory', () =>{
    const wrapper = shallow(<Classify />);
    const instance = wrapper.instance();
    instance.state.category = "category";
    instance.state.selectedCategory = null;

    instance.onSelectCategory(mockEventCategory.target.name);
    expect(instance.state.selectedCategory).toEqual("category");

});
