
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
        <div class='inner  py-3'>
        <div class="container mx-auto flex justify-between " >
        <div class='logo flex'>
         <h2 class='bars'><i class="fa-solid fa-bars"></i><h2/>
            <img src="../images/logo.png" alt="logo" class='mx-5'>
        </div>
        
        <div class='search'>
            <input type="text" placeholder="Search" 
            class='bg-grey border-2 black outline-none py-2 px-4 rounded-md'
            >
        </div>

        <div class='icons'>
 
            <ul class='text-white'>
            <i class="fa-brands fa-facebook mx-5 icons-sm"></i>
            <i class="fa-brands fa-twitter mx-5 icons-sm"></i>
            
            <i class="fa-brands fa-instagram mx-5 icons-sm"></i>
            <i class="fa-brands fa-youtube mx-5 icons-sm"></i>
            <i class="fa-solid fa-arrow-right-to-bracket mx-5"></i>
            <i class="fa-solid fa-user-plus"></i>

            </ul>
          

          
        </div>

       
        
        

        
    </div>
        </div>


       <div class='container mx-auto my-5'>
       <nav >
           <ul class='flex justify-between'>
               <li><a href="/">Home</a></li>
               <li><a href="/pages/news.html">News</a></li>
               <li><a href="../pages/reviews.html">Reviews</a></li>
               <li><a href="#">Videos</a></li>
               <li class='nav-sm'><a href="#">Latest</a></li>
               <li class='nav-sm'><a href="#">About</a></li>
               <li>
                 <button class='bg-red-600 px-3 py-1 rounded-md text-white'> <i class="fa-solid fa-magnifying-glass"></i> </button>
               </li>

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

