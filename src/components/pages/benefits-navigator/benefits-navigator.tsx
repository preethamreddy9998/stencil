import { Component, h } from '@stencil/core';
//import { href } from 'stencil-router-v2';

@Component({
  tag: 'benefits-navigator',
  styleUrl: 'benefits-navigator.css'
})
export class BenefitsNavigator {

  
  render() {
    return (
    <div class="main_container row">
    <div class="top_banner">
      <img class="banner_image" src="assets/img/5db73cd5dba56c10c8f29c46b996192b.iix"/>
      <div style={{textAlign: 'center'}}>
        <input type="text" class="search_ele" placeholder="Search.."/>
         <p>Benefits Navigator</p>
         <p2>Know where to go when you need care.  Explore our interactive guide below to find your best options for care.</p2>
      </div>
      
    </div>
    <div class="container card_container">
      <div class="card" >
        <div class="card-body">
          <img class="card_image" src="assets/img/kwtg_healthhub.png"/>
          <p>I need preventive care</p>
        </div>
        </div>
        <div class="card" >
        <div class="card-body">
          <img class="card_image" src="assets/img/Get_The_Right_Care.png"/>
          <p>I'm sick or injured</p>
        </div>
        </div>
        <div class="card" >
        <div class="card-body">
          <img class="card_image" src="assets/img/chart.png"/>
          <p>I have an on-going condition or serious diagnosis</p>
        </div>
        </div>
        <div class="card" >
        <div class="card-body">
          <img class="card_image" src="assets/img/rx.png"/>
          <p>I need to fill prescription</p>
        </div>
        </div>
        <div class="card" >
        <div class="card-body">
          <img class="card_image" src="assets/img/mhh.png"/>
          <p>Find a provider, facility or procedure</p>
        </div>
        </div>
        <div class="card" >
        <div class="card-body">
          <img class="card_image" src="assets/img/provider.png"/>
          <p>Preferred facilities</p>
        </div>
        </div>
        <div class="card" >
        <div class="card-body">
          <img class="card_image" src="assets/img/bcbs.png"/>
          <p>Blue Cross Blue Shield customer service</p>
        </div>
        </div>
        <div class="card" >
        <div class="card-body">
          <img class="card_image" src="assets/img/eap2.png"/>
          <p>Emotional, psychological, and social well-being</p>
        </div>
        </div>
      </div>
  </div>)
  }

}
