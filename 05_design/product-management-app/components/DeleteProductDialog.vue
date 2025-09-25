<template>
  <div class="dialog-overlay" @click.self="$emit('close')">
    <div class="dialog">
      <h2>Delete Product</h2>
      <p>Are you sure you want to delete <strong>{{ product.name }}</strong>?</p>
      <div class="actions">
  <button @click="deleteProductFn">Delete</button>
        <button @click="$emit('close')">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProductsApi } from '~/composables/useProductsApi'
const props = defineProps({ product: Object })
const emit = defineEmits(['close', 'deleted'])
const { deleteProduct } = useProductsApi()

async function deleteProductFn() {
  await deleteProduct(props.product.id)
  emit('deleted')
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
.actions {
  display: flex;
  gap: 18px;
  margin-top: 18px;
}
button {
  background: #D4183D;
  color: #fff;
  border: none;
  padding: 8px 32px;
  border-radius: 6.75px;
  font-size: 14px;
  cursor: pointer;
}
button:last-child {
  background: #eee;
  color: #333;
}
</style>
