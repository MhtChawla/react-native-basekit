import axios from 'axios';
import Toast from 'react-native-toast-message';
import {BASE_URL} from './config';

// --------------------- IMP -------------------------------------------------
/* 
use wherever you want to use like this --->
    const xyz = async() => {
      var response = await getData('endpoint','body')
    } 
*/
// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

// ----------------------------------------------------------------------
const getData = async (endPoint, data) => {
  try {
    const result = await axiosInstance.get(endPoint, data);
    if (result) {
      console.log('--- API Response --->', result.data); //console response of every request
      return result;
    } else {
      Toast.show({type: 'error', text1: 'Something went wrong!'});
    }
  } catch (error) {
    Toast.show({
      type: 'error',
      text1: error.response.data?.message || 'Something went wrong!',
    });
    console.log('--- API Error --->', error); // log any error
    throw error;
  }
};
// ----------------------------------------------------------------------
const postData = async (endPoint, data, formData = false) => {
  let headers = {};
  if (formData) {
    headers = {
      'Content-Type': 'multipart/form-data',
    };
  }
  try {
    const result = await axiosInstance.post(endPoint, data, {headers: headers});
    if (result) {
      console.log('--- API Response --->', result.data); //console response of every request
      return result;
    } else {
      Toast.show({type: 'error', text1: 'Something went wrong !'});
    }
  } catch (error) {
    Toast.show({
      type: 'error',
      text1: error.response.data?.message || 'Something went wrong !',
    });
    console.log('--- API Error --->', error); // log any error
    throw error;
  }
};
// ----------------------------------------------------------------------

export {getData, postData, axiosInstance};
