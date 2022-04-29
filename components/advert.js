


var template = document.createElement('template');
template.innerHTML = `
<style>
@import '../styles/index.css';
</style>
<div class="container mx-auto bg">
<div class="ads bg-blue-300 py-4 px-2 rounded-md">

  <h3 class="my-4 font-bold">Adverts shows here</h3>
  dolor sitignissimos incidunt explicabo, modi placeat illo unde sapiente eligendi tenetur eos dolores porro laudantium ratione mollitia omnis autem sed neque?
</div>
</div> 

`;

class Adverts extends HTMLElement {
  
  connectedCallback() {
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    var ads = this.shadowRoot.querySelector("ads");
 
  }
  
  
}

window.customElements.define('the-ads', Adverts);



//footer 

