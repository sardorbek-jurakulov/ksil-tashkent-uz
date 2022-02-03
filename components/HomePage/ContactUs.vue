<template>
  <div class="
  container-fluid
  d-flex
  flex-column
  align-items-center
  justify-content-center
  mb-4
  mb-md-5
  p-4
  p-md-5
  contact-us contact-us__container
  ">
    <h2 class="
    text-center 
    text-dark 
    mb-4
    mb-md-5
    contact-us__title
    ">СВЯЖИТЕСЬ С НАМИ</h2>
    <ul class="
    w-75
    d-flex
    pl-0
    mb-3
    mb-md-4
    align-items-center
    justify-content-around
    flex-wrap
    contact-us__features-list
    ">
      <li class="p-1 p-md-2 m-1 m-md-2 d-flex align-items-center justify-content-center align-self-stretch contact-us__features-item">- Гибкие цены</li>
      <li class="p-1 p-md-2 m-1 m-md-2 d-flex align-items-center justify-content-center align-self-stretch contact-us__features-item">- Гарантийный период</li>
      <li class="p-1 p-md-2 m-1 m-md-2 d-flex align-items-center justify-content-center align-self-stretch contact-us__features-item">- Монтажное сопровождение</li>
      <li class="p-1 p-md-2 m-1 m-md-2 d-flex align-items-center justify-content-center align-self-stretch contact-us__features-item">- Регулярный осмотр объектов</li>
      <li class="p-1 p-md-2 m-1 m-md-2 d-flex align-items-center justify-content-center align-self-stretch contact-us__features-item">- Паспорта и сертификаты</li>
      <li class="p-1 p-md-2 m-1 m-md-2 d-flex align-items-center justify-content-center align-self-stretch contact-us__features-item">- Отгрузка по Узбекистану-1 день</li>
    </ul>
    <button class="w-25 mb-4 mb-md-5 btn btn-success contact-us__button">связаться с нами</button>
  </div>
</template>

<script></script>

<style scoped>
.contact-us__container {
  background-color: #ccc;
  background-image: url("@/assets/img/contact-with-us/contact-with-us-2.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

.contact-us__features-list {
  list-style-type: none;
  
}

.contact-us__features-item {
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  border: 1px solid #fff;
  width: 48%;
  font-weight: bold;
}
</style>