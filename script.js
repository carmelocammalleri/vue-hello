//1. destrutturare il  metodo
const {createApp}  = Vue;

//2. montare il metodo 
createApp({
  data(){
    return{
      //3. creare il saluto
      saluto: 'Ciao amante della barba',
      //BONUS
      imageSrc: 'http://placebeard.it/640/480'
    }
  }
}).mount('#app')

