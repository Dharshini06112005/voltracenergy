import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const fetchProducts = async (category = '') => {
  const url = category ? `/products?category=${category}` : '/products';
  const response = await apiClient.get(url);
  return response.data;
};

export const fetchProductById = async (id) => {
  const response = await apiClient.get(`/products/${id}`);
  return response.data;
};

export const fetchBlogs = async () => {
  const response = await apiClient.get('/blogs');
  return response.data;
};

export const fetchBlogById = async (id) => {
  const response = await apiClient.get(`/blogs/${id}`);
  return response.data;
};

export const submitContactForm = async (formData) => {
  const response = await apiClient.post('/contact', formData);
  return response.data;
};

export const submitComplaintForm = async (formData) => {
  const response = await apiClient.post('/complaint', formData);
  return response.data;
};

export const submitPartnerForm = async (formData) => {
  const response = await apiClient.post('/partner', formData);
  return response.data;
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
