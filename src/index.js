//files
import './scss/main.scss';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

/*Scroll menu*/
window.onscroll = function() {navbar()};

function navbar() {
    if (document.body.scrollTop > 750 || document.documentElement.scrollTop > 750) {
      document.getElementById("navbar").classList.add('scroll-nav');
      document.getElementById("navbar").classList.remove('my-4');
    }else{
        document.getElementById("navbar").classList.remove('scroll-nav');
        document.getElementById("navbar").classList.add('my-4');
    }
}
/*Scroll menu*/