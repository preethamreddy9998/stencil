import { Component, h} from '@stencil/core';

@Component({
  tag: 'home-component',
  styleUrl: 'home-component.css',
  shadow: true,
})
export class HomeComponent {

  render() {
    return (
    <div class="main_container">
    <div class="top_banner">
      <img class="banner_image" src="assets/img/banner.jpg"  />
      <div style={{textAlign: 'center'}}>
        <input type="text" class="search_ele" placeholder="Search.."/>
      </div>
      
    </div>
    <div class="container card_container">
      <div class="card" >
        <div class="card-body">
          <img class="card_image" src="assets/img/download.png"/>
          <p>I need preventive care</p>
        </div>
        </div>
        <div class="card" >
        <div class="card-body">
          <img class="card_image" src="assets/img/download.png"/>
          <p>I need preventive care</p>
        </div>
        </div>
        <div class="card" >
        <div class="card-body">
          <img class="card_image" src="assets/img/download.png"/>
          <p>I need preventive care</p>
        </div>
        </div>
        <div class="card" >
        <div class="card-body">
          <img class="card_image" src="assets/img/download.png"/>
          <p>I need preventive care</p>
        </div>
        </div>
      </div>
  </div>)
  }

}
