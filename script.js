//1. destrutturare il  metodo
const {createApp}  = Vue;

//2. montare il metodo 
createApp({
  data(){
    return{
      //3. creare il saluto
      saluto: 'Ciao vue',
      
    }
  }
}).mount('#app')

