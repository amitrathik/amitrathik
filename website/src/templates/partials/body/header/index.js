import backgroundimg from "../../../../assets/img/cover-l.jpg";

const Header = (backgroundImg = true ) => { 
    const backgroundImgHTML =  backgroundImg ? `<div class="head-bg" style="background-image: url('${backgroundimg}')"></div>` : ''; 
    return `<header class="header">
		${backgroundImgHTML}
	</header>
	<!-- .header -->`
}

export default Header;

