// src/services/apiService.js
import axios from 'axios';

export const getAuthHeaders = (token) => ({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`
});

export const fetchPages = async (url, token) =>
  axios.get(url, { headers: getAuthHeaders(token) });

export const fetchPageById = async (url, token, id) =>
  axios.get(url, { params: { id }, headers: getAuthHeaders(token) });

export const updatePage = async (url, token, payload) =>
  axios.put(url, payload, { headers: getAuthHeaders(token) });
