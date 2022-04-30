
var  template = document.createElement('template');
template.innerHTML = `

 
<style>
  @import '../style.css';
  @import '../styles/index.css';
</style>

<link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.1.1/css/all.css" integrity="sha384-/frq1SRXYH/bSyou/HUp/hib7RVN1TawQYja658FEOodR/FQBKVqT9Ol+Oz3Olq5" crossorigin="anonymous">
  </style>
 <footer class='bg-slate-300 my-5'>
    <div class='container flex justify-between mx-auto footer'>

      <div class='links'>
        <ul>
         <li><a href='#'>About</a></li>
          <li><a href='#'>Contact</a></li>
          <li><a href='#'>Terms</a></li>
          <li><a href='#'>Privacy</a></li>

        </ul>
      </div>

      <div class='links'>
      <ul>
       <li><a href='#'>About</a></li>
        <li><a href='#'>Contact</a></li>
        <li><a href='#'>Terms</a></li>
        <li><a href='#'>Privacy</a></li>

      </ul>
    </div>


      <div class='links'>
        <ul>
         <li><a href='#'>About</a></li>
          <li><a href='#'>Contact</a></li>
          <li><a href='#'>Terms</a></li>
          <li><a href='#'>Privacy</a></li>
          
        </ul>
      </div>

      <div class='links'>
        <ul>
         <li><a href='#'>About</a></li>
          <li><a href='#'>Contact</a></li>
          <li><a href='#'>Terms</a></li>
          <li><a href='#'>Privacy</a></li>
          
        </ul>
      </div>

    </div>

 </footer>

`;

class Footer extends HTMLElement {
  
  connectedCallback() {
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    var  footer = this.shadowRoot.querySelector("footer");
 
  }
  
  
}

window.customElements.define('the-footer', Footer);