<template>
  <div class="dialog-overlay" @click.self="$emit('close')">
    <div class="dialog">
      <div class="details-title-row">
        <span class="details-title">Product Details</span>
      </div>
      <div class="details-name-row">
        <span class="details-name">{{ product.name }}</span>
      </div>
      <div class="details-desc-row">
        <span class="details-desc">{{ product.description }}</span>
      </div>
      <div class="details-meta-row">
        <span class="details-stock">Stock: {{ product.stock }}</span>
        <span class="details-price">${{ product.price }}</span>
      </div>
      <button class="close-btn" @click="$emit('close')">Close</button>
    </div>
  </div>
</template>

<script setup>
defineProps({ product: Object })
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
.details-title-row {
  margin-bottom: 8px;
}
.details-title {
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #000;
  line-height: 16px;
}
.details-name-row {
  margin-bottom: 8px;
}
.details-name {
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #000;
  line-height: 24px;
}
.details-desc-row {
  margin-bottom: 8px;
}
.details-desc {
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #717182;
  line-height: 24px;
}
.details-meta-row {
  display: flex;
  flex-direction: row;
  gap: 24px;
  font-family: Inter, sans-serif;
  font-size: 14px;
  color: #717182;
  font-weight: 400;
}
.details-stock {
  color: #717182;
}
.details-price {
  color: #030213;
  font-weight: 500;
}
.close-btn {
  margin-top: 18px;
  background: #030213;
  color: #fff;
  border: none;
  padding: 8px 32px;
  border-radius: 6.75px;
  font-size: 14px;
  cursor: pointer;
}
</style>
