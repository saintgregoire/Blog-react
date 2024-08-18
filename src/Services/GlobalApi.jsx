import axios from "axios"

const BASE_URL= 'https://swapi.dev/api/';

const getPost = () => axios.get(BASE_URL+'people/');

export default{
  getPost
}