<template>
  <div class="banner">
    <div class="banner__main-info-wrapper">
      <h2 class="banner__heading">ДЕТСКИЕ ПЛОЩАДКИ</h2>
      <img class="banner__logo-image" src="@/assets/img/logo-first.png" width="620" height="410" alt="ДЕТСКИЕ ПЛОЩАДКИ">
      <a class="banner__site-link" href="WWW.KSIL-TASHKENT.UZ" target="_self">WWW.KSIL-TASHKENT.UZ</a>
      <div class="banner__contact-number-link-wrapper">
        <a class="banner__contact-number-link" href="tel:+998995002202">+998 99 500 22 02</a>
        <a class="banner__contact-number-link" href="tel:+998995003303">+998 99 500 33 03</a>
      </div>
    </div>
    <a class="banner__more-info-button" href="#" target="_self"> &#10095; </a>
  </div>
</template>

<script></script>

<style scoped>
.banner {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #e8e4ec;
  background-image: url("@/assets/img/childrens complexes.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  padding-left: 30px;
  padding-right: 30px;
}

.banner__main-info-wrapper {
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  box-shadow: 0px 0px 4px 3px #fff;
  padding-top: 30px;
  padding-bottom: 10px;
  padding-left: 40px;
  padding-right: 40px;
}

.banner__main-info-wrapper > * {
  margin-bottom: 20px;
}

.banner__heading {
  font-weight: bold;
  color: #fff;
  font-size: 60px;
}

.banner__logo-image {
  order: -1;
  width: 540px;
  height: 360px;
}

.banner__site-link {
  font-size: 30px;
  color: #fff;
  border-bottom-style: solid;
  border-bottom-color: rgba(255, 255, 255, 0);
  border-bottom-width: 1px;
  border-top-style: solid;
  border-top-color: rgba(255, 255, 255, 0);
  border-top-width: 1px;
}

.banner__site-link:hover {
  color: #fff;
  text-decoration: none;
  border-bottom-color: rgba(255, 255, 255, 1);
  transition: border-bottom-color ease 0.5s;
}

.banner__site-link:active {
  color: #fff;
  text-decoration: none;
  border-top-color: rgba(255, 255, 255, 1);
  border-bottom-color: rgba(255, 255, 255, 1);
  transition: border-bottom-color ease 0.5s, border-bottom-color ease 0.5s;
}

.banner__contact-number-link-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.banner__contact-number-link {
  color: #fff;
  font-size: 35px;
  border-bottom-style: solid;
  border-bottom-color: rgba(255, 255, 255, 0);
  border-bottom-width: 1px;
  border-top-style: solid;
  border-top-color: rgba(255, 255, 255, 0);
  border-top-width: 1px;
}

.banner__contact-number-link:hover {
  color: #fff;
  text-decoration: none;
  border-bottom-color: rgba(255, 255, 255, 1);
  transition: border-bottom-color ease 0.5s;
}

.banner__contact-number-link:active {
  color: #fff;
  text-decoration: none;
  border-top-color: rgba(255, 255, 255, 1);
  border-bottom-color: rgba(255, 255, 255, 1);
  transition: border-top-color ease 0.5s, border-bottom-color ease 0.5s;
}

.banner__more-info-button {
  position: absolute;
  bottom: 3%;
  right: 50%;
  color: #fff;
  transform: rotate(90deg);
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  box-shadow: 0px 0px 4px 3px #fff;
  padding-top: 5px;
  padding-bottom: 5px; 
  padding-left: 30px; 
  padding-right: 15px; 
  font-size: 25px;
}

.banner__more-info-button:hover {
  color: #ccc;
  box-shadow: 0px 0px 4px 3px #ccc;
  text-decoration: none;
  transition: color ease 0.5s, box-shadow ease 0.5s;
}

.banner__more-info-button:active {
  color: #888;
  box-shadow: 0px 0px 4px 3px #888;
  text-decoration: none;
  transition: color ease 0.5s, box-shadow ease 0.5s;
}

@media only screen and (max-width: 1200px) {
  .banner {
    padding-left: 20px;
    padding-right: 20px;
  }
  
  .banner__main-info-wrapper {
    min-height: 60vh;
    padding-top: 25px;
    padding-bottom: 15px;
    padding-left: 30px;
    padding-right: 30px;
  }
  
  .banner__heading {
    font-size: 40px;
  }
  
  .banner__logo-image {
    width: 450px;
    height: 300px;
  }
  
  .banner__site-link {
   font-size: 20px;
  }
  
  .banner__contact-number-link {
    font-size: 25px;
  }
  
  .banner__more-info-button {
    padding-top: 5px;
    padding-bottom: 5px; 
    padding-left: 25px; 
    padding-right: 10px; 
    font-size: 20px;
  }
}

@media only screen and (max-width: 992px) {
  .banner {
    padding-left: 15px;
    padding-right: 15px;
  }
  
  .banner__main-info-wrapper {
    min-height: 55vh;
    padding-top: 20px;
    padding-bottom: 10px;
    padding-left: 25px;
    padding-right: 25px;
  }
  
  .banner__heading {
    font-size: 35px;
  }
  
  .banner__logo-image {
    width: 380px;
    height: 250px;
  }
  
  .banner__site-link {
   font-size: 18px;
  }
  
  .banner__contact-number-link {
    font-size: 20px;
  }
  
  .banner__more-info-button {
    padding-top: 5px;
    padding-bottom: 5px; 
    padding-left: 20px; 
    padding-right: 10px; 
    font-size: 18px;
  }
}

@media only screen and (max-width: 720px) {
  .banner {
    padding-left: 15px;
    padding-right: 15px;
  }
  
  .banner__main-info-wrapper {
    min-height: 40vh;
    padding-top: 20px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
  }

  .banner__main-info-wrapper > * {
    margin-bottom: 7px;
  }
  
  .banner__heading {
    font-size: 25px;
  }
  
  .banner__logo-image {
    width: 190px;
    height: 130px;
  }
  
  .banner__site-link {
   font-size: 15px;
  }

  .banner__contact-number-link-wrapper {
    flex-direction: column;
  }
  
  .banner__contact-number-link {
    color: #fff;
    font-size: 15px;
    margin-bottom: 5px;
  }
  
  .banner__more-info-button {
    padding-top: 5px;
    padding-bottom: 5px; 
    padding-left: 20px; 
    padding-right: 10px; 
    font-size: 12px;
  }
}

@media only screen and (max-width: 540px) {
  .banner {
    padding-left: 10px;
    padding-right: 10px;
  }
  
  .banner__main-info-wrapper {
    min-height: 40vh;
    padding-top: 15px;
    padding-bottom: 8px;
    padding-left: 15px;
    padding-right: 15px;
  }

  .banner__main-info-wrapper > * {
    margin-bottom: 5px;
  }
  
  .banner__heading {
    font-size: 20px;
  }
  
  .banner__logo-image {
    width: 150px;
    height: 100px;
  }
  
  .banner__site-link {
    font-size: 13px;
    font-weight: bold;
  }
  
  .banner__contact-number-link {
    color: #fff;
    font-size: 13px;
    font-weight: bold;
  }
  
  .banner__more-info-button {
    padding-top: 5px;
    padding-bottom: 5px; 
    padding-left: 20px; 
    padding-right: 10px; 
    font-size: 12px;
  }
}
</style>