<template>
  <div>
    <div> 
      <b-navbar toggleable="sm" type="light" variant="warning">
        <b-navbar-brand href="#">Adoptino</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#Adopta">Adopta</b-nav-item>
            <b-nav-item href="#Reporta">Reporta</b-nav-item>
            <b-nav-item href="#Aliados">Aliados</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>

            <b-nav-item-dropdown text="Lang" variant="warning" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

           <!--  <b-nav-item-dropdown right>
              <template #button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown> -->
          </b-navbar-nav>
          <b-navbar-nav>
            <router-link class="nav-link" to="/login">Login</router-link>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <div class="container mt-5">
      <h2 id="Adopta">ADOPTA</h2>
      <p>
        ¡Encuentra el amor que un peludito tiene para tí! 
      </p>
      <section class="carousel">
            <div class="carousel__container">
          
              <div class="carousel-item">
                <img class="carousel-item__img" src="./img/perrito01.jpg" alt="Perrito01"/>
                <div class="carousel-item__details">
                  <div>
                    <a href="index2.html"><img class="carousel-item__details--img" src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/64/000000/external-home-contact-flatart-icons-lineal-color-flatarticons-1.png" alt="Home icon by Icons8"> </a>
                    <img class="carousel-item__details--img" src="https://img.icons8.com/doodle/48/000000/money.png" alt="Money icon by Icons8"> 

                  </div>
                  <p class="carousel-item__details--title">Perrito01</p>
                  <p class="carousel-item__details--subtitle">Info Perrito01</p>
                </div>
              </div>
        
              <div class="carousel-item">
                <img class="carousel-item__img" src="./img/perrito02.jpg" alt="Perrito02" />
                <div class="carousel-item__details">
                  <div> 
                    <a href="index2.html"><img class="carousel-item__details--img" src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/64/000000/external-home-contact-flatart-icons-lineal-color-flatarticons-1.png" alt="Home icon by Icons8"> </a>
                    <img class="carousel-item__details--img" src="https://img.icons8.com/doodle/48/000000/money.png" alt="Money icon by Icons8">
                  </div>
                  <p class="carousel-item__details--title">Perrito02</p>
                  <p class="carousel-item__details--subtitle">Info Perrito02</p>
                </div>
              </div>
        
              <div class="carousel-item">
                <img class="carousel-item__img" src="./img/perrito03.jpg" alt="Perrito03"/>
                <div class="carousel-item__details">
                  <div>
                    <a href="index2.html"><img class="carousel-item__details--img" src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/64/000000/external-home-contact-flatart-icons-lineal-color-flatarticons-1.png" alt="Home icon by Icons8"> </a>
                    <img class="carousel-item__details--img" src="https://img.icons8.com/doodle/48/000000/money.png" alt="Money icon by Icons8">
                  </div>
                  <p class="carousel-item__details--title">Perrito03</p>
                  <p class="carousel-item__details--subtitle">Info Perrito03</p>
                </div>
              </div>
        
              <div class="carousel-item">
                <img class="carousel-item__img" src="./img/perrito04.jpg" alt="Perrito04" />
                <div class="carousel-item__details">
                  <div>             
                    <a href="index2.html"><img class="carousel-item__details--img" src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/64/000000/external-home-contact-flatart-icons-lineal-color-flatarticons-1.png" alt="Home icon by Icons8"> </a>
                    <img class="carousel-item__details--img" src="https://img.icons8.com/doodle/48/000000/money.png" alt="Money icon by Icons8">
                  </div>
                  <p class="carousel-item__details--title">Perrito04</p>
                  <p class="carousel-item__details--subtitle">Perrito04</p>
                </div>
              </div>
        
              <div class="carousel-item">
                <img class="carousel-item__img" src="./img/perrito05.jpg" alt="Perrito05"  />
                <div class="carousel-item__details">
                  <div>             
                    <a href="index2.html"><img class="carousel-item__details--img" src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/64/000000/external-home-contact-flatart-icons-lineal-color-flatarticons-1.png" alt="Home icon by Icons8"> </a>
                    <img class="carousel-item__details--img" src="https://img.icons8.com/doodle/48/000000/money.png" alt="Money icon by Icons8">
                  </div>
                  <p class="carousel-item__details--title">Perrito05</p>
                  <p class="carousel-item__details--subtitle">Perrito05</p>
                </div>
              </div>
        
              <div class="carousel-item">
                <img class="carousel-item__img" src="./img/perrito06.jpg" alt="Perrito06"  />
                <div class="carousel-item__details">
                  <div>             
                    <a href="index2.html"><img class="carousel-item__details--img" src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/64/000000/external-home-contact-flatart-icons-lineal-color-flatarticons-1.png" alt="Home icon by Icons8"> </a>
                    <img class="carousel-item__details--img" src="https://img.icons8.com/doodle/48/000000/money.png" alt="Money icon by Icons8">
                  </div>
                  <p class="carousel-item__details--title">Perrito06</p>
                  <p class="carousel-item__details--subtitle">Info Perrito06</p>
                </div>
              </div>
        
              <div class="carousel-item">
                <img class="carousel-item__img" src="./img/michi01.jpg" alt="Michi01"  />
                <div class="carousel-item__details">
                  <div>             
                    <a href="index2.html"><img class="carousel-item__details--img" src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/64/000000/external-home-contact-flatart-icons-lineal-color-flatarticons-1.png" alt="Home icon by Icons8"> </a>
                    <img class="carousel-item__details--img" src="https://img.icons8.com/doodle/48/000000/money.png" alt="Money icon by Icons8">
                  </div>
                  <p class="carousel-item__details--title">Michi01</p>
                  <p class="carousel-item__details--subtitle">Info Michi01</p>
                </div>
              </div>
        
              <div class="carousel-item">
                <img class="carousel-item__img" src="./img/michi02.jpg" alt="Michi02" />
                <div class="carousel-item__details">
                  <div>             
                    <a href="index2.html"><img class="carousel-item__details--img" src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/64/000000/external-home-contact-flatart-icons-lineal-color-flatarticons-1.png" alt="Home icon by Icons8"> </a>
                    <img class="carousel-item__details--img" src="https://img.icons8.com/doodle/48/000000/money.png" alt="Money icon by Icons8">
                  </div>
                  <p class="carousel-item__details--title">Michi02</p>
                  <p class="carousel-item__details--subtitle">Info Michi02</p>
                </div>
              </div>
        
            </div>
      </section>

      <br/><br/>

      <section>
        <h2 id="Reporta">¡REPORTA!</h2>
        <p>
          ¿Te lo encontraste? ¡Busquemos a su humano!
          <br/>
          ¿Lo perdiste? ¡Busquemos a tú peludito!
        </p>
        <br/><br/>
        
      </section>
<!-- carrousel de imagenes -->

      <section class="carousel">
    <div class="carousel__container">
  
      <div class="carousel-item">
        <img class="carousel-item__img" src="./img/perrito01.jpg" alt="Perrito01"/>
        <div class="carousel-item__details">
          <div>
            <img class="carousel-item__details--img" src="./img/tel.png" alt="teléfono-icono"> 
          </div>
          <p class="carousel-item__details--title">Perrito01</p>
          <p class="carousel-item__details--subtitle">Info Perrito01</p>
        </div>
      </div>

      <div class="carousel-item">
        <img class="carousel-item__img" src="./img/perrito02.jpg" alt="Perrito02" />
        <div class="carousel-item__details">
          <div>
            <img class="carousel-item__details--img" src="./img/tel.png" alt="teléfono-icono" > 
          </div>
          <p class="carousel-item__details--title">Perrito02</p>
          <p class="carousel-item__details--subtitle">Info Perrito02</p>
        </div>
      </div>

      <div class="carousel-item">
        <img class="carousel-item__img" src="./img/perrito03.jpg" alt="Perrito03"/>
        <div class="carousel-item__details">
          <div>             
            <img class="carousel-item__details--img" src="./img/tel.png" alt="teléfono-icono" >  
          </div>
          <p class="carousel-item__details--title">Perrito03</p>
          <p class="carousel-item__details--subtitle">Info Perrito03</p>
        </div>
      </div>

      <div class="carousel-item">
        <img class="carousel-item__img" src="./img/perrito04.jpg" alt="Perrito04" />
        <div class="carousel-item__details">
          <div>             
            <img class="carousel-item__details--img" src="./img/tel.png" alt="teléfono-icono" > 
          </div>
          <p class="carousel-item__details--title">Perrito04</p>
          <p class="carousel-item__details--subtitle">Perrito04</p>
        </div>
      </div>

      <div class="carousel-item">
        <img class="carousel-item__img" src="./img/perrito05.jpg" alt="Perrito05"  />
        <div class="carousel-item__details">
          <div>             
            <img class="carousel-item__details--img" src="./img/tel.png" alt="teléfono-icono" >  
          </div>
          <p class="carousel-item__details--title">Perrito05</p>
          <p class="carousel-item__details--subtitle">Perrito05</p>
        </div>
      </div>

      <div class="carousel-item">
        <img class="carousel-item__img" src="./img/perrito06.jpg" alt="Perrito06"  />
        <div class="carousel-item__details">
          <div>             
            <img class="carousel-item__details--img" src="./img/tel.png" alt="teléfono-icono" > 
          </div>
          <p class="carousel-item__details--title">Perrito06</p>
          <p class="carousel-item__details--subtitle">Info Perrito06</p>
        </div>
      </div>

      <div class="carousel-item">
        <img class="carousel-item__img" src="./img/michi01.jpg" alt="Michi01"  />
        <div class="carousel-item__details">
          <div>             
            <img class="carousel-item__details--img" src="./img/tel.png" alt="teléfono-icono" > 
          </div>
          <p class="carousel-item__details--title">Michi01</p>
          <p class="carousel-item__details--subtitle">Info Michi01</p>
        </div>
      </div>

      <div class="carousel-item">
        <img class="carousel-item__img" src="./img/michi02.jpg" alt="Michi02" />
        <div class="carousel-item__details">
          <div>             
            <img class="carousel-item__details--img" src="./img/tel.png" alt="teléfono-icono" > 
          </div>
          <p class="carousel-item__details--title">Michi02</p>
          <p class="carousel-item__details--subtitle">Info Michi02</p>
        </div>
      </div>

    </div>
      </section>
      <br/><br/>

    <section>
        <h2 id="Aliados">ALIADOS</h2>
        <p>
            Encuentra una fundación a la que puedas apoyar
        </p>
        <br/><br/>
    </section>

    
<!-- carrousel de imagenes -->

<section class="carousel">
    <div class="carousel__container">
  
      <div class="carousel-item">
        <img class="carousel-item__img" src="./img/fundacion01.jpg" alt="Fundación01"/>
        <div class="carousel-item__details">
          <div>
            <a href="https://www.facebook.com/avoicesorg"><img class="carousel-item__details--img" src="./img/fb-logo.png" alt="fb-logo"> </a>
            <a href="https://www.instagram.com/avoicesorg"><img class="carousel-item__details--img" src="./img/ig-logo.png" alt="ig-logo"> </a>
            <a href="https://www.avoices.org/"><img class="carousel-item__details--img" src="https://img.icons8.com/doodle/48/000000/domain.png" alt="Website icon by Icons8"> </a> 
          </div>
          <p class="carousel-item__details--title">Animal Voices</p>
          <p class="carousel-item__details--subtitle"> <img class="carousel-item__details--img2" src="https://img.icons8.com/office/50/000000/worldwide-location--v1.png" alt="Location icon by Icons8">Bogotá</p>
        </div>  
      </div>

      <div class="carousel-item">
        <img class="carousel-item__img" src="./img/fundacion02.jpg" alt="Fundación02" />
        <div class="carousel-item__details">
          <div>             
            <a href="https://www.facebook.com/manejohumanitario"><img class="carousel-item__details--img" src="./img/fb-logo.png" alt="fb-logo"> </a>
            <a href="https://www.instagram.com/manejohumanitario/"><img class="carousel-item__details--img" src="./img/ig-logo.png" alt="ig-logo"> </a>
          </div>
          <p class="carousel-item__details--title">Manejo Humanitario<br/> de Fauna Callejera</p>
          <p class="carousel-item__details--subtitle"><img class="carousel-item__details--img2" src="https://img.icons8.com/office/50/000000/worldwide-location--v1.png" alt="Location icon by Icons8">Bogotá</p>
        </div>
      </div>

      <div class="carousel-item">
        <img class="carousel-item__img" src="./img/fundacion03.jpg" alt="Fundación03"/>
        <div class="carousel-item__details">
          <div>             
            <img class="carousel-item__details--img" src="./img/fb-logo.png" alt="fb-logo">
            <img class="carousel-item__details--img" src="./img/ig-logo.png" alt="ig-logo">
          </div>
          <p class="carousel-item__details--title">Bienestar Animal Ibagué</p>
          <p class="carousel-item__details--subtitle"><img class="carousel-item__details--img2" src="https://img.icons8.com/office/50/000000/worldwide-location--v1.png" alt="Location icon by Icons8">Ibagué</p>
        </div>
      </div>

      <div class="carousel-item">
        <img class="carousel-item__img" src="./img/fundacion01.jpg" alt="Fundación04" />
        <div class="carousel-item__details">
          <div>             
            <img class="carousel-item__details--img" src="./img/fb-logo.png" alt="fb-logo">
            <img class="carousel-item__details--img" src="./img/ig-logo.png" alt="ig-logo">
          </div>
          <p class="carousel-item__details--title">Fundación04</p>
          <p class="carousel-item__details--subtitle">Fundación04</p>
        </div>
      </div>

      <div class="carousel-item">
        <img class="carousel-item__img" src="./img/fundacion01.jpg" alt="Fundación05"  />
        <div class="carousel-item__details">
          <div>             
            <img class="carousel-item__details--img" src="./img/fb-logo.png" alt="fb-logo">
            <img class="carousel-item__details--img" src="./img/ig-logo.png" alt="ig-logo">
          </div>
          <p class="carousel-item__details--title">Fundación05</p>
          <p class="carousel-item__details--subtitle">Fundación05</p>
        </div>
      </div>

      <div class="carousel-item">
        <img class="carousel-item__img" src="./img/fundacion01.jpg" alt="Fundación06"  />
        <div class="carousel-item__details">
          <div>             
            <img class="carousel-item__details--img" src="./img/fb-logo.png" alt="fb-logo">
            <img class="carousel-item__details--img" src="./img/ig-logo.png" alt="ig-logo">
          </div>
          <p class="carousel-item__details--title">Fundación06</p>
          <p class="carousel-item__details--subtitle">Info Fundación06</p>
        </div>
      </div>

      <div class="carousel-item">
        <img class="carousel-item__img" src="./img/fundacion01.jpg" alt="Fundación07"  />
        <div class="carousel-item__details">
          <div>             
            <img class="carousel-item__details--img" src="./img/fb-logo.png" alt="fb-logo">
            <img class="carousel-item__details--img" src="./img/ig-logo.png" alt="ig-logo">
          </div>
          <p class="carousel-item__details--title">Fundación07</p>
          <p class="carousel-item__details--subtitle">Info Fundación07</p>
        </div>
      </div>

      <div class="carousel-item">
        <img class="carousel-item__img" src="./img/fundacion01.jpg" alt="Fundación08" />
        <div class="carousel-item__details">
          <div>             
            <img class="carousel-item__details--img" src="./img/fb-logo.png" alt="fb-logo">
            <img class="carousel-item__details--img" src="./img/ig-logo.png" alt="ig-logo">
          </div>
          <p class="carousel-item__details--title">Fundación08</p>
          <p class="carousel-item__details--subtitle">Info Fundación08</p>
        </div>
      </div>

    </div>
  </section>

  <br/><br/><br/>






          <!-- <section id="">
        <h1 class="mb-4">Primera sección</h1>
        <b-row>
          <b-col sm="6" md="4" lg="3">
            <b-card
              title="Card Title"
              img-src=""
              img-alt="Image"
              img-top
              tag="article"
              class="mb-2"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </b-col>
          <b-col sm="6" md="4" lg="3">
            <b-card
              title="Card Title"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              class="mb-2"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </b-col>
          <b-col sm="6" md="4" lg="3">
            <b-card
              title="Card Title"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              class="mb-2"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </b-col>
          <b-col sm="6" md="4" lg="3">
            <b-card
              title="Card Title"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              class="mb-2"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </b-col>
        </b-row>
      </section>
      <section id="section2" class="mt-5">
        <h1 class="mb-4">Segunda sección</h1>
        <b-row>
          <b-col sm="6" md="4" lg="3">
            <b-card
              title="Card Title"
              img-src="https://placekitten.com/1000/300"
              img-alt="Image"
              img-top
              tag="article"
              class="mb-2"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </b-col>
          <b-col sm="6" md="4" lg="3">
            <b-card
              title="Card Title"
              img-src="https://placekitten.com/1000/300"
              img-alt="Image"
              img-top
              tag="article"
              class="mb-2"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </b-col>
          <b-col sm="6" md="4" lg="3">
            <b-card
              title="Card Title"
              img-src="https://placekitten.com/1000/300"
              img-alt="Image"
              img-top
              tag="article"
              class="mb-2"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </b-col>
          <b-col sm="6" md="4" lg="3">
            <b-card
              title="Card Title"
              img-src="https://placekitten.com/1000/300"
              img-alt="Image"
              img-top
              tag="article"
              class="mb-2"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </b-col>
        </b-row>
      </section> -->
    </div>
    <transition name="fade">
      <a v-if="!isVisibleUpButton" href="#" class="back-to-top"><b-icon-arrow-up-circle-fill font-scale="3"></b-icon-arrow-up-circle-fill></a>
    </transition>
    <footer class="d-flex bg-dark text-light align-items-center px-3 py-2">
      <div class="text-center w-100">
        <strong class="mr-auto">Footer</strong>
        <section>
        <a href="./contactanos.html"><h2>CONTÁCTANOS</h2></a>
        <a href="./terminos.html"><h2>TÉRMINOS Y CONDICIONES</h2></a>        
        </section>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isVisibleUpButton: true,
      scrollPosition: 0,
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollPosition = window.scrollY
    }
  },
  watch: {
    scrollPosition() {
      if (this.scrollPosition > 100) {
        this.isVisibleUpButton = false;
      } else {
        this.isVisibleUpButton = true;
      }
    }
  },
}
</script>
<style>
.back-to-top {
  position: fixed;
  right: 15px;
  bottom: 15px;
  z-index: 99999;
}

.header {
  align-items: center;
  color: white;
  display: flex;
  height: 100px;
  justify-content: space-between;
  top: 0px;
  width: 100%;
  background: #F7B034
}

.header__img {
  margin-left: 30px;
  width: 200px;
}

.header__menu {
	margin-right: 30px;
  background-color: #F7B034;
}

.header__menu ul {
  display: none;
  list-style: none;
  margin: 0px 0px 0px -14px;
  padding: 0px;
  position: absolute;
  width: 100px;
  text-align: right;
  background-color: #F7B034;
}

.header__menu:hover ul, ul:hover {
	display: block;
  
}

.header__menu li {
  margin: 10px 0px;
  
}

.header__menu li a {
  color: white;
  text-decoration: none; 
}

.header__menu li a:hover {
  font-weight: bolder;
  color: #F77428;
  
}

.header__menu--profile {
  align-items: center;
  display: flex;
  cursor: pointer;
  background-color: #F7B034;
}

.header__menu--profile img {
  margin-right: 8px;
  width: 40px;
  background-color: #F7B034;
}


*{
  margin: 0px;
  padding: 0px;
}

a:link, a:visited, a:hover, a:active{
    color: rgb(255, 255, 255);
    font-size: 12px;
    text-decoration: none;
}

body {
    margin: 0px;
    background: #222222;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

h1{
    color: #F77428;
    font-size: 40px;
    text-align-last:center;
    font-family: 'Gill Sans MT';
}

h2{
    color: #F7B034;
    font-size: 25px;
    text-align-last: center;
}

h4{
  color: rgb(241, 241, 241);
    font-size: 25px;
    text-align-last: left;
  }
label{
  margin-left:  50px;
  width: 300px;
  text-align: center;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

#ingrese{
  margin-top: 30px;
  width: 100%px;
  height: 300px;
  border-radius: 5%;
  display:block;
  
}

p{
    font-size: 16px;
    text-align-last: center;
    color: rgb(255, 255, 255);
}
.menu{
  display:inline-flex;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content: space-between;
  align-items: stretch;
  align-content:flex-start;
  width: 100%;
  height: 40px;
  background-color: rgb(187, 100, 183);
  
  
}

.menu a:hover {
  font-weight: bolder;
  color: #F7B034;
  
}

.a{
  display:inline-flex;
  order:0;
  flex:0 1 auto;
  align-self:auto;
  height: auto;
  width:7%;
  margin-left: 3%;
  padding: 10px;
  text-align: center;
  background-color: #F7B034;
}
.b{
  display:inline-flex;
  order:0;
  flex:0 1 auto;
  align-self:auto;
  height: auto;
  width: 5%;
  padding: 10px;
  text-align: center;
}
.c{
  display:inline-flex;
  order:0;
  flex:0 1 auto;
  align-self:auto;
  height: auto;
  width:5%;
  padding: 10px;
  text-align: center;
}
.d{
  display:inline-flex;
  order:0;
  flex:0 1 auto;
  align-self:auto;
  height: auto;
  width: 5%;
  padding: 10px;
  text-align: center;
}
.e{
  display:inline-flex;
  order:0;
  flex:0 1 auto;
  align-self:auto;
  height: auto;
  width: 7%;
  padding: 10px;
  text-align: center;
  margin-right: 3%;
}


#contenido{
  width: 100%;
  
}

html {
  overflow-x: hidden;
  }

footer{
  background-color: #494949;
}

.carousel {
  overflow: scroll;
  padding-left: 30px;
  width: 100%;
  height: 400px;
}

.carousel__container {
  transition: 450ms -webkit-transform;
  transition: 450ms transform;
  transition: 450ms transform, 450ms -webkit-transform;
  font-size: 0;
  white-space: nowrap;
  margin: 70px 0px;
  padding-bottom: 50px;
}

.carousel__container:hover .carousel-item {
  opacity: 0.3;
}

.carousel__container:hover .carousel-item:hover {
  -webkit-transform: scale(1.5);
          transform: scale(1.5);
  opacity: 1;
}

.carousel-item {
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  display: inline-block;
  width: 200px;
  height: 250px;
  margin-right: 10px;
  font-size: 20px;
  cursor: pointer;
  transition: 450ms all;
  -webkit-transform-origin: center left;
          transform-origin: center left;
}

.carousel-item:hover ~ .carousel-item {
  -webkit-transform: translate3d(100px, 0, 0);
          transform: translate3d(100px, 0, 0);
}

.carousel-item__img {
  width: 200px;
  height: 250px;
  -o-object-fit: cover;
     object-fit: cover;
}

.carousel-item__details {
  align-items: flex-start;
  background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%);
  bottom: 0;
  display: flex;
  font-size: 10px;
  flex-direction: column;
  justify-content: flex-end;
  left: 0;
  opacity: 0;
  transition: 450ms opacity;
  padding: 10px;
  position: absolute;
  right: 0;
  top: 0;
}

.carousel-item__details--img {
  width: 20px;
}

.carousel-item:hover .carousel-item__details {
  opacity: 1;
}

.carousel-item__details--title {
  color: white;
  margin: 5px 0px 0px 0px;
  font-size: 12px;
}

.carousel-item__details--subtitle {
  color: white;
  font-size: 8px;
  margin: 3px 0px;
}

.carousel-item__details--img2 {
  width: 10px;
}

.contenedorsillo{

  width: 100%;
  height: 100%;
  background:black;
  margin: 10px auto;
  display: grid;
  grid-gap:5px;
  grid-template-columns: repeat(2,1fr);
  grid-template-rows: repeat(5, auto);
  
  grid-template-areas: "header header"
                      "menudo  menudo"
                      "ingrese Registro"
                      "ingrese Registro"
                      "footer footer";
  
  }
  .contenedorsillo .header {
  grid-area: header;
  align-items: center;
  grid-column-start: 1;
  grid-column-end: -1;
  background: #8f57fd;
  color: white;
  display: flex;
  justify-content: space-between;
  top: 0px;
  width: 100%;
  }
  
  
  .contenedorsillo .menu{
  grid-area:menudo;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  text-align: center;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: rgb(187, 100, 183);
  padding: 8px; 
  }
  label{
  margin-left:  50px;
  text-align: left;
  color:white;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
  .contenedorsillo .ingrese{
  grid-area:ingrese;
  width: 100%;
  background-color: rgb(14, 0, 32);
  display:block;
  justify-content: center;
  text-align: left;
  border-radius: 2%;
  }
  .contenedorsillo .Registro{
  grid-area: Registro;
  background-color: rgb(51, 0, 75);
  display:block;
  justify-content:left;
  text-align: left;
  border-radius: 5%;
  width:100%;
  }
  .contenedorsillo .footer{
  grid-area: footer;
  width: 100%;
  background: #7f4fdf;
  }
  
  @media screen and (max-width: 720px){
  .contenedorsillo{
  grid-template-areas:  "header header"
                      "menudo  menudo"
                      "ingrese  Registro"
                      "ingrese  Registro"
                      "footer footer";
  }
  }
</style>