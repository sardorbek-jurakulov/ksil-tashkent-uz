<template>
  <div class="container-fluint d-flex flex-column align-items-center justify-content-center p-3 p-md-5 site-footer site-footer__container">
    <h2 class="m-3 m-md-4 site-footer__title">Узнайте о нас больше</h2>
    <div class="d-flex justify-content-between align-items-center">
      <div class="">
        <div class="p-3 p-md-4 site-footer__working-info-container">
          <h3 class="mb-3 font-weight-bold">Рабочие дни &#128198;</h3>
          <div class="d-flex flex-column">
            <div>
              <p class="d-inline-block border border-top-0 border-right-0 border-left-0 border-secondary">Понедельник - Суббота: 8:00 - 20:00 &#9200;</p>
            </div>
            <div>
              <p class="d-inline-block border border-top-0 border-right-0 border-left-0 border-secondary">Воскресенье - 10:00 - 15:00 &#9200;</p>
            </div>
            <div>
              <p class="d-inline-block border border-top-0 border-right-0 border-left-0 border-secondary">Звонки ежедневно до 22:00 &#9200;</p>
            </div>
          </div>
        </div>
        <div class="site-footer__working-info-container">
          <h3>Наши контакты</h3>
          <p>Телефоны и telegram: 
            <a href="tel:+998995002202">+998 99 500 22 02</a>
            <a href="tel:+998995003303">+998 99 500 33 03</a>
          </p>
          <p>Электронная почта:</p>
          <a href="mailto:info@ksil-tashkent.uz">info@ksil-tashkent.uz</a>
        </div>
      </div>
      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5992.781662252687!2d69.283118!3d41.322114!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b3411210e17%3A0x2665e21a0c15fbfe!2s60%20Amir%20Temur%20Avenue%2C%20Tashkent%2C%20Uzbekistan!5e0!3m2!1sen!2sus!4v1643916282913!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      </div>
    </div>
  </div>
</template>

<script></script>

<style>
.site-footer__container {
  background-color: #ccc;
  background-image: url("@/assets/img/footer/footer-bg.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

.site-footer__working-info-container {
  background-color: rgba(255, 255, 255, 0.5);
  border: 3px solid #fff;
}
</style>