import axios from 'axios';

export const findAll = async () => await axios.get('http://localhost:9000/api/bills/');
export const create = async (name, type, value) => await axios.post('http://localhost:9000/api/bills/', { name, type, value });
export const remove = async (id) => await axios.delete(`http://localhost:9000/api/bills/${id}`);
