import "./styles/main.scss";

// Page Components & Modules
import Wrapper from './templates/partials/body/wrapper';
import Section from './templates/partials/section';
import Profile from './views/about/profile';

function hideSitePreloader() {
    $('#preloader').remove();
    $('body').removeClass('loading');
}
function router(evt) {
    let url = window.location.hash.slice(1) || '/';
    switch(url){
        case 'category' :
            if(!$('body').hasClass('.home')){
                $('body').removeClass('home');
            } 
            
            break;
        default:
            if(!$('body').hasClass('.home')){
                $('body').addClass('home')
            }
            const ProfileSection = Profile();
            $('.container').html(Section('about', '',true,ProfileSection)); 
            break;

    }
    // route();
    console.log(url);
};


(function() {
    window.addEventListener('load', router);
    window.addEventListener('hashchange', router);

    const WrapperEl = Wrapper();
    $('.wrapper').append(WrapperEl);

    hideSitePreloader();

  })();
  



