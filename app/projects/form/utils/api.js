const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

/**
 * API Service for Menu Items
 */
export const menuApi = {
  /**
   * Get all menu items, optionally filtered by category
   * @param {string} category - Optional category filter: 'drinks', 'meals', 'others', 'snacks'
   * @returns {Promise<Array>} Array of menu items
   */
  getAll: async (category = null) => {
    try {
      const url = category
        ? `${API_BASE_URL}/api/menu-items?category=${category}`
        : `${API_BASE_URL}/api/menu-items`;
      
      const response = await fetch(url, {
        cache: 'no-store', // Always fetch fresh data
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching menu items:', error);
      throw error;
    }
  },

  /**
   * Get single menu item by ID
   * @param {number} id - Menu item ID
   * @returns {Promise<Object>} Menu item object
   */
  getOne: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/menu-items/${id}`, {
        cache: 'no-store',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching menu item:', error);
      throw error;
    }
  },

  /**
   * Create a new menu item (Admin only)
   * @param {FormData} formData - FormData containing menu item fields
   * @returns {Promise<Object>} Created menu item
   */
  create: async (formData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/admin/menu-items`, {
        method: 'POST',
        body: formData,
        // Don't set Content-Type header - browser will set it with boundary for FormData
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error creating menu item:', error);
      throw error;
    }
  },

  /**
   * Update a menu item (Admin only)
   * @param {number} id - Menu item ID
   * @param {FormData|Object} data - FormData (if image) or Object (if no image)
   * @returns {Promise<Object>} Updated menu item
   */
  update: async (id, data) => {
    try {
      const isFormData = data instanceof FormData;
      
      // Log what we're sending
      if (isFormData) {
        console.log('Sending FormData update:');
        for (let pair of data.entries()) {
          if (pair[1] instanceof File) {
            console.log(`  ${pair[0]}: [File] ${pair[1].name} (${pair[1].size} bytes)`);
          } else {
            console.log(`  ${pair[0]}: ${pair[1]}`);
          }
        }
      } else {
        console.log('Sending JSON update:', data);
      }
      
      const headers = isFormData ? {} : { 'Content-Type': 'application/json' };
      const body = isFormData ? data : JSON.stringify(data);

      const response = await fetch(`${API_BASE_URL}/api/admin/menu-items/${id}`, {
        method: 'PUT',
        headers,
        body,
      });

      console.log('Update response status:', response.status, response.statusText);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log('Update response data:', responseData);
      return responseData;
    } catch (error) {
      console.error('Error updating menu item:', error);
      throw error;
    }
  },

  /**
   * Delete a menu item (Admin only)
   * @param {number} id - Menu item ID
   * @returns {Promise<Object>} Success message
   */
  delete: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/admin/menu-items/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error deleting menu item:', error);
      throw error;
    }
  },
};



