<template>
  <div class="dialog-overlay" @click.self="$emit('close')">
    <form class="dialog" @submit.prevent="submitForm">
      <h2>{{ product ? 'Edit Product' : 'Add Product' }}</h2>
      <label>
        Name
        <input v-model="form.name" required />
      </label>
      <label>
        Description
        <textarea v-model="form.description" required></textarea>
      </label>
      <label>
        Price
        <input type="number" v-model="form.price" required min="0" step="0.01" />
      </label>
      <label>
        Stock
        <input type="number" v-model="form.stock" required min="0" step="1" />
      </label>
      <div class="actions">
        <button type="submit">{{ product ? 'Update' : 'Create' }}</button>
        <button type="button" @click="$emit('close')">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { useProductsApi } from '~/composables/useProductsApi'
const props = defineProps({ product: Object })
const emit = defineEmits(['close', 'created', 'updated'])
const { createProduct, updateProduct } = useProductsApi()
const form = ref({ name: '', description: '', price: 0, stock: 0 })

onMounted(() => {
  if (props.product) {
    form.value = { ...props.product }
  }
})
watch(() => props.product, (val) => {
  if (val) form.value = { ...val }
})

async function submitForm() {
  if (props.product) {
    await updateProduct(props.product.id, form.value)
    emit('updated')
  } else {
    await createProduct(form.value)
    emit('created')
  }
}
</script>

<style scoped>
/* Figma pixel-perfect dialog styles */
.dialog-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.dialog {
  background: #fff;
  border-radius: 8.75px;
  padding: 32px 32px 32px 32px;
  min-width: 350px;
  box-shadow: 0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  gap: 18px;
}
label {
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-family: Inter, sans-serif;
  font-size: 14px;
  color: #000;
}
input, textarea {
  margin-top: 8px;
  padding: 8px;
  border-radius: 6.75px;
  border: 1px solid #ddd;
  font-size: 14px;
  font-family: Inter, sans-serif;
}
.actions {
  display: flex;
  gap: 18px;
  margin-top: 18px;
}
button[type="submit"] {
  background: #030213;
  color: #fff;
  border: none;
  padding: 8px 32px;
  border-radius: 6.75px;
  font-size: 14px;
  cursor: pointer;
}
button[type="button"] {
  background: #eee;
  color: #333;
  border: none;
  padding: 8px 32px;
  border-radius: 6.75px;
  font-size: 14px;
  cursor: pointer;
}
</style>
