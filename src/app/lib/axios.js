// src/lib/axios.js
import axios from 'axios';

// Make axios always send cookies/credentials
axios.defaults.withCredentials = true;

// Optional: base URL if needed
// axios.defaults.baseURL = '/api';

export default axios;