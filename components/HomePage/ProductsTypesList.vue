<template>
  <div class="container p-5 mb-5 products-types-container">
    <h2 class="text-primary text-center mb-5">ОБОРУДОВАНИЕ ДЛЯ ИГРОВЫХ ПЛОЩАДОК</h2>
    <div class="
      d-flex 
      flex-wrap 
      flex-md-row 
      flex-column
      justify-content-xl-between
      justify-content-lg-around
      justify-content-md-between
      align-items-center 
      products-types-container-items-wrapper 
      border border-primary
    ">
      <a class="
        d-flex 
        flex-column justify-content-center align-items-center mb-5 products-types-container-item" href="#" target="_self">
        <h3 class="order-1 mb-4">Горки</h3>
        <img class="mb-4" src="@/assets/img/products-types/slides.jpg" alt="Горки" width="300" height="200">
      </a>
      <a class="d-flex flex-column justify-content-center align-items-center mb-5 products-types-container-item" href="#" target="_self">
        <h3 class="order-1 mb-4">Качели</h3>
        <img class="mb-4" src="@/assets/img/products-types/swing.jpg" alt="Качели" width="300" height="200">
      </a>
      <a class="d-flex flex-column justify-content-center align-items-center mb-5 products-types-container-item" href="#" target="_self">
        <h3 class="order-1 mb-4">Качалки на пружине</h3>
        <img class="mb-4" src="@/assets/img/products-types/rocking-chairs-on-a-spring.jpg" alt="Качалки на пружине" width="300" height="200">
      </a>
      <a class="d-flex flex-column justify-content-center align-items-center mb-5 products-types-container-item" href="#" target="_self">
        <h3 class="order-1 mb-4">Детские комплексы</h3>
        <img class="mb-4" src="@/assets/img/products-types/childrens-complexes.jpg" alt="Детские комплексы" width="300" height="200">
      </a>
      <a class="d-flex flex-column justify-content-center align-items-center mb-5 products-types-container-item" href="#" target="_self">
        <h3 class="order-1 mb-4">Песочницы</h3>
        <img class="mb-4" src="@/assets/img/products-types/sandboxes-2.jpg" alt="Песочницы" width="300" height="200">
      </a>
      <a class="d-flex flex-column justify-content-center align-items-center mb-5 products-types-container-item" href="#" target="_self">
        <h3 class="order-1 mb-4">Машинки и паровозики</h3>
        <img class="mb-4" src="@/assets/img/products-types/cars-and-locomotives.png" alt="Машинки и паровозики" width="300" height="200">
      </a>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.products-types-container-item {
  color: #007bff;
  border: 2px solid #ffffff;
  border-radius: 5px;
  transition: box-shadow ease 0.3s;
}

.products-types-container-item:hover {
  color: #0063cc;
  border: 2px solid #0063cc;
  text-decoration: none;
  box-shadow: -8px 8px 5px #ccc;
}

.products-types-container-item:active {
  box-shadow: 0px 0px 0px #ccc;
}
</style>