<template>
  <div class="container d-flex flex-column align-items-center justify-content-center mb-4 mb-md-5 about-us-section about-us-section__container">
    <h2 class="mb-3 mb-md-4 about-us-section__title">О НАС</h2>
    <div class="d-flex align-items-center justify-content-center flex-column flex-lg-row about-us-section__content-wrapper">
      <p class="w-75 d-flex align-items-center justify-content-center mb-3 mb-lg-0 p-0 p-lg-4 text-justify about-us-section__description">
        Игровое и спортивное оборудование для детских площадок - специализация компании КСИЛ-ТАШКЕНТ в Узбекистане.
        На нашем сайте представлены: горки, карусели, качели, балансиры, качалки, игровые комплексы.
        Сегодня «КСИЛ» — это крупнейшее российское предприятие в области изготовления оборудования детских игровых комплексов и садово-парковой мебели, включающее в свою структуру разработку, все этапы производства и обслуживание.
        Сфера деятельности компании «КСИЛ» простирается от Атлантики до Тихого океана и охватывает более 20 стран мира.
      </p>
      <div class="w-75 align-self-lg-stretch about-us-section__media-information"></div>
    </div>
  </div>
</template>

<script></script>

<style>
.about-us-section__media-information {
  background-color: #ccc;
  background-image: url('@/assets/img/banner-bg.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

@media only screen and (max-width: 992px) {
  .about-us-section__media-information {
    padding-bottom: 50%;
  }
}
</style>