<template>
  <div class="container p-5 mb-5 products-types-section products-types-section__container">
    <h2 class="text-center mb-5 products-types-section__title">ОБОРУДОВАНИЕ ДЛЯ ИГРОВЫХ ПЛОЩАДОК</h2>
    <div class="
      d-flex 
      flex-wrap 
      flex-md-row 
      flex-column
      justify-content-center
      justify-content-xl-between
      justify-content-lg-around
      align-items-center 
      products-types-container__items-wrapper
    ">
      <nuxt-link class="
      d-flex 
      flex-column 
      justify-content-center 
      align-items-center 
      mb-3 
      mb-md-4
      products-types-container__item
      " :to="{
        path: '/products/' + 'Горки',
        }">
        <h3 class="
        order-1 
        mb-3
        mb-md-4
        px-2
        products-types-container__item-title
        ">Горки</h3>
        <img class="
        mb-3
        mb-md-4
        products-types-container__item-image
        " src="@/assets/img/products-types/slides.jpg" alt="Горки" width="300" height="200">
      </nuxt-link>
      <a class="
      d-flex 
      flex-column 
      justify-content-center 
      align-items-center 
      mb-3
      mb-md-4
      products-types-container__item
      " href="#" target="_self">
        <h3 class="
        order-1 
        mb-3
        mb-md-4
        px-2
        products-types-container__item-title
        ">Качели</h3>
        <img class="
        mb-3
        mb-md-4
        " src="@/assets/img/products-types/swing.jpg" alt="Качели" width="300" height="200">
      </a>
      <a class="
      d-flex 
      flex-column 
      justify-content-center 
      align-items-center 
      mb-3
      mb-md-4
      products-types-container__item
      " href="#" target="_self">
        <h3 class="
        order-1 
        mb-3
        mb-md-4
        px-2
        products-types-container__item-title
        ">Качалки на пружине</h3>
        <img class="
        mb-3
        mb-md-4
        " src="@/assets/img/products-types/rocking-chairs-on-a-spring.jpg" alt="Качалки на пружине" width="300" height="200">
      </a>
      <a class="
      d-flex 
      flex-column 
      justify-content-center 
      align-items-center 
      mb-3
      mb-md-4
      products-types-container__item
      " href="#" target="_self">
        <h3 class="
        order-1 
        mb-3
        mb-md-4
        px-2
        products-types-container__item-title
        ">Детские комплексы</h3>
        <img class="
        mb-3
        mb-md-4
        " src="@/assets/img/products-types/childrens-complexes.jpg" alt="Детские комплексы" width="300" height="200">
      </a>
      <a class="
      d-flex 
      flex-column 
      justify-content-center 
      align-items-center 
      mb-3
      mb-md-4
      products-types-container__item
      " href="#" target="_self">
        <h3 class="
        order-1 
        mb-3
        mb-md-4
        px-2
        products-types-container__item-title
        ">Песочницы</h3>
        <img class="
        mb-3
        mb-md-4
        " src="@/assets/img/products-types/sandboxes-2.jpg" alt="Песочницы" width="300" height="200">
      </a>
      <a class="
      d-flex 
      flex-column 
      justify-content-center 
      align-items-center 
      mb-3
      mb-md-4
      products-types-container__item
      " href="#" target="_self">
        <h3 class="
        order-1 
        mb-3
        mb-md-4
        px-2
        products-types-container__item-title
        ">Машинки и паровозики</h3>
        <img class="
        mb-3
        mb-md-4
        products-types-container__item-image
        " src="@/assets/img/products-types/cars-and-locomotives.png" alt="Машинки и паровозики" width="300" height="200">
      </a>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.products-types-section__title {
  /* color: #f8c90a; */
  color: #00C851;
}

.products-types-container__item {
  color: #007bff;
  border: 2px solid #ffffff;
  border-radius: 5px;
  transition: box-shadow ease 0.3s;
}

.products-types-container__item:hover {
  color: #0063cc;
  border-color: #00C851;
  text-decoration: none;
  box-shadow: -8px 8px 5px #ccc;
}

.products-types-container__item:active {
  box-shadow: 0px 0px 0px #ccc;
}

.products-types-container__item-title {
  color: #00C851;
}

.products-types-container__item-image {
  min-width: 100%;
}
</style>