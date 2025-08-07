import instance from './axios';

const getListsProducts = () => instance.get('/products')

export default {getListsProducts}