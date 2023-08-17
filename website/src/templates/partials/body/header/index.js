import backgroundimg from "../../../../assets/img/cover-l.jpg";
import nav from "./nav";
const Header = (backgroundImg = true ) => { 
    const backgroundImgHTML =  backgroundImg ? `<div class="head-bg" style="background-image: url('${backgroundimg}')"></div>` : ''; 
    return `<header class="header">
		${backgroundImgHTML}
		<div class="head-bar animated">
			<div class="head-bar-inner">
				<div class="nav-wrap">
					${nav()}
					<button class="btn-mobile btn-mobile-nav">Menu</button>
				</div>
				<!-- .nav-wrap -->
			</div>
		</div>
	</header>
	<!-- .header -->`
}

export default Header;

