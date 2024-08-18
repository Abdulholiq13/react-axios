import axios from 'axios';
import { memo } from 'react';

const mainUrl = axios.create({
	baseURL: 'https://dummyjson.com',
});

export default mainUrl;
