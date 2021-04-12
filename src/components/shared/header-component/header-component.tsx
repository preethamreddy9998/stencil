import { Component, h } from '@stencil/core';

@Component({
  tag: 'header-component',
  styleUrl: 'header-component.css'
})
export class HeaderComponent {

  render() {
    return (
      <div class="header_container">
				<div style={{width:'20%',display: 'inline-block'}}>
					<img class="header_image" src="assets/img/AI.PNG"/>
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
			</div>
    );
  }

}
