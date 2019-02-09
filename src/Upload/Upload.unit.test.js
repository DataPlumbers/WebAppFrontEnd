import React from 'react';
import { shallow } from '../enzyme';
import Upload from './Upload';

test('filterByFileSize', () => {
   const ONE_MB_IN_BYTES = 1048576; // 1 MB in bytes
   const MAX_FILE_SIZE = ONE_MB_IN_BYTES * 10; // 10 MB

   let files = [{size: 1000000}, {size: 1000000000}];
   let expected = [{size: 1000000}];
   const wrapper = shallow(<Upload />);
   const instance = wrapper.instance();

   expect(instance.filterByFileSize(files, MAX_FILE_SIZE)).toEqual(expected);
});

test('isFilesListEmpty', () => {
   let files = [{size: 1000000}, {size: 5000}];
   const wrapper = shallow(<Upload />);
   const instance = wrapper.instance();

   instance.setState({files: files});
   expect(instance.isFilesListEmpty()).toBeFalsy();

   instance.setState({files: []});
   expect(instance.isFilesListEmpty()).toBeTruthy();
});

test('removeFile', () => {
   let files = [{size: 1000000}, {size: 5000}];
   let expected = [{size: 1000000}];
   const wrapper = shallow(<Upload />);
   const instance = wrapper.instance();

   instance.setState({files: files});
   instance.removeFile(1);
   expect(instance.state.files).toEqual(expected);
   instance.removeFile(0);
   expect(instance.state.files).toEqual([]);
});


test('removeAllFiles', () => {
   let files = [{size: 1000000}, {size: 5000}];
   let expected = [];
   const wrapper = shallow(<Upload />);
   const instance = wrapper.instance();

   instance.setState({files: files});
   instance.removeAllFiles();
   expect(instance.state.files).toEqual(expected);
});
