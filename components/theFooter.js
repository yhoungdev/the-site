
var  template = document.createElement('template');
template.innerHTML = `

 
<style>
  @import '../style.css';
  @import '../styles/index.css';
</style>

<link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.1.1/css/all.css" integrity="sha384-/frq1SRXYH/bSyou/HUp/hib7RVN1TawQYja658FEOodR/FQBKVqT9Ol+Oz3Olq5" crossorigin="anonymous">
  </style>
 <footer class='bg-slate-100 my-5 desktop-fotter'>
   
  <div class='container mx-auto '>
    <ul class='flex justify-between text-slate-500'>
      <li>Home</li>
      <li>Home</li>
      <li>Home</li>
      <li>Home</li>
      <li>Home</li>
      <li>Home</li>
      <li>Home</li>
      <li>Home</li>
      <li>Home</li>
      <li>Home</li>
    </ul>


  </div>

 </footer>

 <footer class='mobile-footer my-5' >

 <div class ='container'>
  <center>

  <ul class='flex gap-10 text-slate-500 my-5 justify-center'>
  <li>Home</li>
  <li>Home</li>
  <li>Home</li>
  <li>Home</li>
 
   </ul>

  </center>
 </div>


 <div class='the-footer bg-black mt-3 text-white py-5 ' style='position:absolute; right:0; left:0'>

    <div class='container mx-auto py-3'>
      <center>
      <ul class='flex justify-center gap-10 my-3'>
      <li><i class="fa-brands fa-facebook text-2xl"></i></li>

      <li><i class="fa-brands fa-twitter  text-2xl"></i></li>
      <li><i class="fa-brands fa-instagram  text-2xl"></i></li>
      <li><i class="fa-brands fa-youtube  text-2xl"></i></li>

    </ul>
      </center>

      <center><small class='text-center'>2022 The Site</small></center>
      <ul class='flex gap-5  py-3 justify-center'>
      <li>Home |</li>
      <li>Home | </li>
      <li>Home |</li>
      <li>Home</li>
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