import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'header-component',
  styleUrl: 'header-component.css'
})
export class HeaderComponent {
	@State() navHRopen: boolean = false;
	@State() navServicenopen: boolean = false;
	@State() navMyItemsopen: boolean = false;
	@State() message: string = 'abc';
	outsideLink(link) {
		window.location = link
	  }
	menuHRToggle() {
		this.navHRopen = !this.navHRopen;
		this.navServicenopen = false;
		this.navMyItemsopen = false;
		this.message = 'cvf'
	  }
	  menuServicesToggle() {
		this.navServicenopen = !this.navServicenopen;
		this.navHRopen = false;
		this.navMyItemsopen = false;
		this.message = 'cvf'
	  }
	  menuMyItemsToggle() {
		this.navMyItemsopen = !this.navMyItemsopen;
		this.navHRopen = false;
		this.navServicenopen = false;
		this.message = 'cvf'
	  }
  render() {
    return (
      
			<div class="row headerContainer">
				<div class="col">
					<img class="header_image" src="assets/img/AskHr4u.iix"/>
				</div>
				<div class="col">
					<div class="float-right">
					<nav class="navbar navbar-expand-lg navbar-light">
						<div class="container-fluid">
							<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span class="navbar-toggler-icon"></span>
							</button>
							<div class="collapse navbar-collapse" id="navbarSupportedContent">
							<ul class="navbar-nav me-auto mb-2 mb-lg-0">
								
								<li class="nav-item dropdown">
									<a class="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={this.menuHRToggle.bind(this)}>
										<i class="fa fa-address-book" aria-hidden="true"></i> HR Apps
									</a>
									<ul class={{
										'dropdown-menu': true,
										'show': this.navHRopen
										}} aria-labelledby="navbarDropdown">
										<li onClick={() => this.outsideLink('http://myportal.fplu.fpl.com/irj/servlet/prt/portal/prtroot/pcd!3aportal_content!2fApplications!2fcom.fpl.hr.iview.ssosfrecruit')}><a class="dropdown-item" href="#">HR4U (SuccessFactors)</a></li>
										<li onClick={() => this.outsideLink('https://neesnsysdev.service-now.com/esc?id=hr_apps')}><a class="dropdown-item" href="#">More apps</a></li>
									</ul>
								</li>
								<li class="nav-item dropdown">
									<a class="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={this.menuServicesToggle.bind(this)}>
										<i class="fa fa-address-book" aria-hidden="true"></i> Services
									</a>
									<ul class={{
										'dropdown-menu': true,
										'show': this.navServicenopen
										}} aria-labelledby="navbarDropdown">
										<li onClick={() => this.outsideLink('https://neesnsysdev.service-now.com/esc?id=esc_sc_category')}><a class="dropdown-item" href="#">Request catalog</a></li>
										<li onClick={() => this.outsideLink('https://neesnsysdev.service-now.com/esc?id=esc_knowledge_home')}><a class="dropdown-item" href="#">Knowledge articles</a></li>
									</ul>
								</li>
								<li class="nav-item dropdown">
									<a class="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={this.menuMyItemsToggle.bind(this)}>
										<i class="fa fa-address-book" aria-hidden="true"></i> My Items
									</a>
									<ul class={{
										'dropdown-menu': true,
										'show': this.navMyItemsopen
										}} aria-labelledby="navbarDropdown">
										<li onClick={() => this.outsideLink('https://neesnsysdev.service-now.com/esc?id=hr_my_requests')}><a class="dropdown-item" href="#">My requests</a></li>
										<li onClick={() => this.outsideLink('https://neesnsysdev.service-now.com/esc?id=hrm_todos_page')}><a class="dropdown-item" href="#">My to-dos</a></li>										
									</ul>
								</li>
								<li onClick={() => this.outsideLink('https://neesnsysdev.service-now.com/esc?id=hr_favorites')}class="nav-item">
									<a href="#"><i class="fa fa-address-book onlyIcons" aria-hidden="true"></i></a>
								</li>
								{/* <li class={{
										'dropdown-menu': true,
										'show': this.navHRopen
										}} aria-labelledby="navbarDropdown">
										<li onClick={() => this.outsideLink('https://neesnsysdev.service-now.com/esc?id=hr_user_profile&sys_id=197e25ca1b2224100a90cae5624bcb02')}><a class="dropdown-item" href="#">My profile</a></li>
										<li onClick={() => this.outsideLink('https://neesnsysdev.service-now.com/esc?id=actsub_notif_pref')}><a class="dropdown-item" href="#">Notifications & subscriptions</a></li>
									</li> */}
								<li onClick={() => this.outsideLink('https://neesnsysdev.service-now.com/esc?id=hr_user_profile&sys_id=197e25ca1b2224100a90cae5624bcb02')}class="nav-item">
								<a href="#"><i class="fa fa-address-book onlyIcons" aria-hidden="true"></i></a>
								</li>
								<li class="nav-item">
								<a href="#"><i class="fa fa-address-book onlyIcons" aria-hidden="true"></i></a>
								</li>
							</ul>
							</div>
						</div>
						</nav>

					</div>
				</div>
			</div>
			
    );
  }

}


/*<div style={{width:'20%',display: 'inline-block'}}>
					
					<i class="fa fa-address-book" aria-hidden="true"></i>
				</div>
				
				<div class="nav_bar_header" style={{display: 'inline-block', width:'70%',textAlign: 'right',paddingRight:'20px'}}>
					<div class="dropdown">
						<button class="dropbtn">Dropdown</button>
						<div class="dropdown-content">
						<a href="#">Link 1</a>
						<a href="#">Link 2</a>
						<a href="#">Link 3</a>
						</div>
					  </div>
					  <div class="dropdown">
						<button class="dropbtn">Dropdown</button>
						<div class="dropdown-content">
						<a href="#">Link 5</a>
						<a href="#">Link 2</a>
						<a href="#">Link 3</a>
						</div>
					  </div>
					  <div class="dropdown">
						<button class="dropbtn">Dropdown</button>
						<div class="dropdown-content">
						
						<a href="#">Link 3</a>
						</div>
					  </div>
					  <img src="assets/img/logout.jpg" style={{height:'20px'}} />
				</div>
				// index.html with transpiler
@Listen('backgroundToggle')
function toggleBackground(e) {
  console.log('recieved event', e);
  document.getElementsByTagName('side-menu')[0].style.display = 'none';
}
	//@Event() backgroundToggle: EventEmitter;
	https://itnext.io/creating-a-side-menu-component-with-stencil-using-events-listen-and-slot-ed06c612bc6
	
		//this.backgroundToggle.emit(e);
		 */