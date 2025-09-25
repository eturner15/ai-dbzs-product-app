import { ref } from 'vue'
import axios from 'axios'

const API_BASE = 'http://localhost:8000/products/'

export function useProductsApi() {
  const products = ref([])
  const loading = ref(false)
  const error = ref(null)

  const fetchProducts = async () => {
    loading.value = true
    try {
      const res = await axios.get(API_BASE)
      products.value = res.data
    } catch (e) {
      error.value = e
    } finally {
      loading.value = false
    }
  }

  const fetchProduct = async (id) => {
    try {
      const res = await axios.get(`${API_BASE}/${id}`)
      return res.data
    } catch (e) {
      error.value = e
    }
  }

  const createProduct = async (product) => {
    try {
      const res = await axios.post(API_BASE, product)
      return res.data
    } catch (e) {
      error.value = e
    }
  }

  const updateProduct = async (id, product) => {
    try {
      const res = await axios.put(`${API_BASE}/${id}`, product)
      return res.data
    } catch (e) {
      error.value = e
    }
  }

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${API_BASE}/${id}`)
    } catch (e) {
      error.value = e
    }
  }

  return {
    products,
    loading,
    error,
    fetchProducts,
    fetchProduct,
    createProduct,
    updateProduct,
    deleteProduct
  }
}
