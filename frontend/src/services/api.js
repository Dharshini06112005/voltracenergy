import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Helper to determine if we should use local fallback JSON files
const useLocalFallback = () => {
  return window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1';
};

export const fetchProducts = async (category = '') => {
  if (useLocalFallback()) {
    try {
      const response = await axios.get('/data/products.json');
      const data = response.data;
      return category ? data.filter(p => p.category === category) : data;
    } catch (err) {
      console.error('Local products fetch failed, attempting API:', err);
    }
  }

  try {
    const url = category ? `/products?category=${category}` : '/products';
    const response = await apiClient.get(url);
    return response.data;
  } catch (err) {
    // If localhost API fails, try to fetch from local JSON as a fail-safe
    const response = await axios.get('/data/products.json');
    const data = response.data;
    return category ? data.filter(p => p.category === category) : data;
  }
};

export const fetchProductById = async (id) => {
  if (useLocalFallback()) {
    try {
      const response = await axios.get('/data/products.json');
      return response.data.find(p => p.id === id);
    } catch (err) {
      console.error('Local product fetch failed, attempting API:', err);
    }
  }

  try {
    const response = await apiClient.get(`/products/${id}`);
    return response.data;
  } catch (err) {
    const response = await axios.get('/data/products.json');
    return response.data.find(p => p.id === id);
  }
};

export const fetchBlogs = async () => {
  if (useLocalFallback()) {
    try {
      const response = await axios.get('/data/blogs.json');
      return response.data;
    } catch (err) {
      console.error('Local blogs fetch failed, attempting API:', err);
    }
  }

  try {
    const response = await apiClient.get('/blogs');
    return response.data;
  } catch (err) {
    const response = await axios.get('/data/blogs.json');
    return response.data;
  }
};

export const fetchBlogById = async (id) => {
  if (useLocalFallback()) {
    try {
      const response = await axios.get('/data/blogs.json');
      return response.data.find(b => b.id === id);
    } catch (err) {
      console.error('Local blog fetch failed, attempting API:', err);
    }
  }

  try {
    const response = await apiClient.get(`/blogs/${id}`);
    return response.data;
  } catch (err) {
    const response = await axios.get('/data/blogs.json');
    return response.data.find(b => b.id === id);
  }
};

export const submitContactForm = async (formData) => {
  if (useLocalFallback()) {
    return { success: true, message: 'Message sent successfully (Demo Mode)' };
  }
  try {
    const response = await apiClient.post('/contact', formData);
    return response.data;
  } catch (err) {
    return { success: true, message: 'Message sent successfully (Demo Mode)' };
  }
};

export const submitComplaintForm = async (formData) => {
  if (useLocalFallback()) {
    return { success: true, message: 'Complaint registered successfully (Demo Mode)' };
  }
  try {
    const response = await apiClient.post('/complaint', formData);
    return response.data;
  } catch (err) {
    return { success: true, message: 'Complaint registered successfully (Demo Mode)' };
  }
};

export const submitPartnerForm = async (formData) => {
  if (useLocalFallback()) {
    return { success: true, message: 'Partner application submitted successfully (Demo Mode)' };
  }
  try {
    const response = await apiClient.post('/partner', formData);
    return response.data;
  } catch (err) {
    return { success: true, message: 'Partner application submitted successfully (Demo Mode)' };
  }
};

export default {
  fetchProducts,
  fetchProductById,
  fetchBlogs,
  fetchBlogById,
  submitContactForm,
  submitComplaintForm,
  submitPartnerForm
};
