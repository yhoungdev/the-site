
var template = document.createElement('template');
template.innerHTML = `
    <style>
    @import '../styles/index.css';
   
    </style>
    <style>
        @import '../style.css';
    </style>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.1.1/css/all.css" integrity="sha384-/frq1SRXYH/bSyou/HUp/hib7RVN1TawQYja658FEOodR/FQBKVqT9Ol+Oz3Olq5" crossorigin="anonymous">
    <head>
    
    <header class="header ">
        <div class='inner bg-zinc-600 py-3'>
        <div class="container mx-auto flex justify-between " >
        <div class='logo'>
            <img src="../images/logo.png" alt="logo">
        </div>
        
        <div class='search'>
            <input type="text" placeholder="Search" 
            class='bg-grey border-2 black outline-none py-2 px-4 rounded-md'
            >
        </div>

        <div class='icons'>
 
            <ul class='text-white'>
            <i class="fa-brands fa-facebook mx-5"></i>
            <i class="fa-brands fa-twitter mx-5"></i>
            <i class="fa-brands fa-instagram mx-5"></i>
            <i class="fa-brands fa-youtube mx-5"></i>

            </ul>
          

          
        </div>

        <h2 class='bars'><i class="fa-solid fa-bars"></i><h2/>
        
        

        
    </div>
        </div>


       <div class='container mx-auto my-5'>
       <nav >
           <ul class='flex justify-between'>
               <li><a href="/">Home</a></li>
               <li><a href="#">Store</a></li>
               <li><a href="../pages/news.html">News</a></li>
               <li><a href="#">Review</a></li>
               <li><a href="#">Latest</a></li>
               <li><a href="#">About</a></li>

           </ul>

       </nav>
   </div>

       </div>
    </header>

`;

class Header extends HTMLElement {
  
  connectedCallback() {
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    var header = this.shadowRoot.querySelector("header");
 
  }
  
  
}

window.customElements.define('the-header', Header);



//footer 

