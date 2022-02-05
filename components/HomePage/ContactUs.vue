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
    mb-3
    mb-md-4
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
      <li class="
      p-1 
      p-md-2 
      m-1 
      m-md-2 
      d-flex 
      align-items-center 
      justify-content-center 
      align-self-stretch 
      contact-us__features-item
      ">- Гибкие цены</li>
      <li class="
      p-1 
      p-md-2 
      m-1 
      m-md-2 
      d-flex 
      align-items-center 
      justify-content-center 
      align-self-stretch 
      contact-us__features-item
      ">- Гарантийный период</li>
      <li class="
      p-1 
      p-md-2 
      m-1 
      m-md-2 
      d-flex 
      align-items-center 
      justify-content-center 
      align-self-stretch 
      contact-us__features-item
      ">- Монтажное сопровождение</li>
      <li class="
      p-1 
      p-md-2 
      m-1 
      m-md-2 
      d-flex 
      align-items-center 
      justify-content-center 
      align-self-stretch 
      contact-us__features-item
      ">- Регулярный осмотр объектов</li>
      <li class="
      p-1 
      p-md-2 
      m-1 
      m-md-2 
      d-flex 
      align-items-center 
      justify-content-center 
      align-self-stretch 
      contact-us__features-item
      ">- Паспорта и сертификаты</li>
      <li class="
      p-1 
      p-md-2 
      m-1 
      m-md-2 
      d-flex 
      align-items-center 
      justify-content-center 
      align-self-stretch 
      contact-us__features-item
      ">- Отгрузка по Узбекистану-1 день</li>
    </ul>
    <button 
      type="button" 
      class="w-25 mb-4 mb-md-5 btn btn-success contact-us__button" 
      data-toggle="modal" 
      data-target="#contactUsModel"
      >связаться с нами</button>

    <!-- The Modal -->
    <div class="modal fade" id="contactUsModel">
      <div class="modal-dialog">
        <div class="modal-content">
        
          <!-- Modal Header -->
          <div class="modal-header">
            <h4 class="modal-title">Обратное связь</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>
          
          <!-- Modal body -->
          <div class="modal-body">
            <AppControlInput type="text" v-model="firstName">Имя <span class="text-danger">*</span></AppControlInput>
            <AppControlInput type="text" v-model="lastName">Фамилия <span class="text-danger">*</span></AppControlInput>
            <AppControlInput type="email" v-model="email">Email <span class="text-danger">*</span></AppControlInput>
            <AppControlInput type="tel" v-model="phoneNumber">Контактный телефон <span class="text-danger">*</span></AppControlInput>
            <AppControlInput controlType="textarea" v-model="referenceText">Комментарий или сообщение <span class="text-danger">*</span></AppControlInput>
          </div>
          
          <!-- Modal footer -->
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">Закрыть</button>
          </div>
          
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  head: {
    script: [
      { src: 'https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js' },
      { src: 'https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js' },
      { src: 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js' },
    ],
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      referenceText: ''
    }
  }
}
</script>

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

/* Modal partition */
</style>