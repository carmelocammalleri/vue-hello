//1. destrutturare il  metodo
const {createApp}  = Vue;

//2. montare il metodo 
createApp({
  date(){
    return{
      saluto: 'Ciao vue'
    }
  }
}).mount('#app')

