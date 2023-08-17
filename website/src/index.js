import "./styles/main.scss";

// Page Components & Modules
import Wrapper from './templates/partials/body/wrapper';
import Section from './templates/partials/section';
import Profile from './views/about/profile';

const bio = () => {
    return `<div class="section-txt-btn">
        <p>Hello! I'm Amit Rathi. Senior Web Developer specializing in front-end development. Experienced with all stages of development cycle for dynamic web projects. Well-versed in numerous programming languages including C++, PHP, SQL and JavaScript. Strong background in project management and customer relations. Enjoys reading articles on Medium, attending meetups, and sharing great memes.</p>
    </div>`
}

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
            $('.container').append(bio());
            break;

    }
};


(function() {
    window.addEventListener('load', router);
    window.addEventListener('hashchange', router);

    const WrapperEl = Wrapper();
    $('.wrapper').append(WrapperEl);

    hideSitePreloader();

  })();
  



