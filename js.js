    // brand home page
    var index=0;
    function changeBrand(){
    var imgs=["/img/brand00.jpg","/img/brand01.jpg","/img/brand03.jpg"];
            document.getElementById('brand_link').src=imgs[index];
            index++;
            if(index == 3){
                index = 0;
            }
        }
        setInterval(changeBrand,5000);
    // menu mobile
    var header = document.getElementById('header__navbar-mobile');
    var mobileMenu = document.getElementById('header_mobile-user');
     mobileMenu.onclick = function(){
        var isclosed = header.clientHeight === 32;
         if(isclosed){
             header.style.height='auto';
        }
         else{
              header.style.height='32px';
        }
    }
    //buy amount
    let amountElement = document.getElementById('amount');
        let amount = amountElement.value;
        let render = (amount) =>{
            amountElement.value = amount;
        }
        let handleMinus = () =>{
            if(amount > 1)
             amount--;
            render(amount);
        }
        let handleplus = () =>{
            amount++;
            render(amount);
        }
    //slide
    let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}