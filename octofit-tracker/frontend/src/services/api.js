/**
 * API service for OctoFit Tracker backend
 */

// Use relative path so CRA dev server proxy can intercept requests
const API_BASE_URL = '/api';

export const apiClient = {
  /**
   * Make a GET request to the API
   * @param {string} endpoint - The endpoint path (e.g., 'health/')
   * @returns {Promise} - The response data
   */
  get: async (endpoint) => {
    try {
      const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Error calling API endpoint ${endpoint}:`, error);
      throw error;
    }
  },

  /**
   * Make a POST request to the API
   * @param {string} endpoint - The endpoint path
   * @param {object} data - The request body
   * @returns {Promise} - The response data
   */
  post: async (endpoint, data) => {
    try {
      const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Error calling API endpoint ${endpoint}:`, error);
      throw error;
    }
  },
};

/**
 * Health check endpoint
 * @returns {Promise} - Health status response
 */
export const healthCheck = () => apiClient.get('health/');
