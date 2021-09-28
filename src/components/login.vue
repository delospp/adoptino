<template>
  <div class="login">
    <div class="mt-5 sm login-content">
      <b-img src="https://github.com/delospp/adoptino/blob/master/src/components/img/adoptino.png?raw=true" fluid alt="Responsive image" style="width:150px"></b-img>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
          id="input-group-1"
          label="Correo:"
          label-for="input-1"
          description="No compartiremos su información personal con nadie"
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Ingrese su correo electronico"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Password:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.name"
            type="contraseña"
            placeholder="Ingrese su contraseña"
            required
          ></b-form-input>
        </b-form-group>        

        <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
          <b-form-checkbox-group
            v-model="form.checked"
            id="checkboxes-4"
            :aria-describedby="ariaDescribedby"
          >
            <b-form-checkbox value="me" >Acepto términos y condiciones</b-form-checkbox>
            <b-form-checkbox value="that">Quiero recibir información<br> de Adoptino en mi correo</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>

        <b-button type="submit" variant="dark" class="mr-2">Ingresar</b-button>
        <b-button type="reset" variant="dark">Regresar</b-button>
      </b-form>      
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
        this.$router.push('admin')
      },
      onReset(event) {
        event.preventDefault()
        this.$router.push('/')
      }
    }
  }
</script>
<style>
  .login {
    display: flex;
    justify-content: center;
    align-content: center;
  }
  .login .login-content{
    background-color: #F7B034;
    padding: 15px;
    max-width: 400px;
    border-radius: 10px;
    
  }
</style>