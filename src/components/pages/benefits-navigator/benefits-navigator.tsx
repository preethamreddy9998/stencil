import { Component, h, State } from '@stencil/core';
//import { href } from 'stencil-router-v2';
//import { href } from 'stencil-router-v2';

@Component({
  tag: 'benefits-navigator',
  styleUrl: 'benefits-navigator.css'
})
export class BenefitsNavigator {
  @State() sickOrInjured: boolean = false;
  @State() ineedPreventive: boolean = false;
  @State() ihaveongoing: boolean = false;
  @State() preferredfacilities: boolean = false;
  hideMe(value){
    if(value == 'sickOrInjured'){
      this.sickOrInjured = true;
    }else if(value == 'ineedPreventive'){
      this.ineedPreventive = true;
    }else if(value == 'ihaveongoing'){
      this.ihaveongoing = true;
    }else if(value == 'preferredfacilities'){
      this.preferredfacilities = true;
    }else {
      this.sickOrInjured = false;
      this.ineedPreventive = false;
      this.ihaveongoing = false;
      this.preferredfacilities = false;
    }
    
  }
  render() {
    return (
    <div class="main_container row">
      <div class="top_banner benefits_banner col-md-12">
          <h1>Benefits Navigator</h1>
          <p2>Know where to go when you need care. Explore our interactive guide below to find your best options for care.</p2>
      </div>
      <form class="col-md-12 top_banner_form">
          <div class="form-row">
              <div class="col-md-4 mb-3"></div>
              <div class="col-md-4 mb-3">
                  <div class="input-group">
                      <input type="text" class="form-control form-control-lg" placeholder="Search.." />
                      <div class="input-group-append input-group-append-lg">
                          <span class="input-group-text input-group-text-lg">@</span>
                      </div>
                  </div>
              </div>
          </div>
      </form>
  
      <div class="container">
        <breadcrumb-component></breadcrumb-component>
        {this.sickOrInjured ? <iamsick-component></iamsick-component> : null }
        {this.ineedPreventive ? <ineedprevcare-component></ineedprevcare-component> : null }
        {this.ihaveongoing ? <ihaveongoing-component></ihaveongoing-component> : null }
        {this.preferredfacilities ? <preferredfacilities-component></preferredfacilities-component> : null }
        
        {(!this.sickOrInjured && !this.ineedPreventive && !this.preferredfacilities && !this.ihaveongoing) ? 
          <div class="row">
              <div class="col-lg-6 col-md-12 col-sm-12">
                  <div class="card" onClick={() => this.hideMe('ineedPreventive')}>
                      <div class="card-body">
                          <img class="card_image" src="assets/img/kwtg_healthhub.png" />
                          <p>I need preventive care</p>
                      </div>
                  </div>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12">
                  <div class="card" onClick={() => this.hideMe('sickOrInjured')}>
                      <div class="card-body">
                          <img class="card_image" src="assets/img/Get_The_Right_Care.png" />
                          <p>I'm sick or injured</p>
                      </div>
                  </div>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12">
                  <div class="card" onClick={() => this.hideMe('ihaveongoing')}>
                      <div class="card-body">
                          <img class="card_image" src="assets/img/chart.png" />
                          <p>I have an on-going condition or serious diagnosis</p>
                      </div>
                  </div>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12">
  
                  <div class="card">
                      <div class="card-body">
                          <img class="card_image" src="assets/img/rx.png" />
                          <p>I need to fill prescription</p>
                      </div>
                  </div>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12">
                  <div class="card">
                      <div class="card-body">
                          <img class="card_image" src="assets/img/mhh.png" />
                          <p>Find a provider, facility or procedure</p>
                      </div>
                  </div>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12">
                  <div class="card" onClick={() => this.hideMe('preferredfacilities')}>
                      <div class="card-body">
                          <img class="card_image" src="assets/img/provider.png" />
                          <p>Preferred facilities</p>
                      </div>
                  </div>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12">
                  <div class="card">
                      <div class="card-body">
                          <img class="card_image" src="assets/img/bcbs.png" />
                          <p>Blue Cross Blue Shield customer service</p>
                      </div>
                  </div>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12">
                  <div class="card">
                      <div class="card-body">
                          <img class="card_image" src="assets/img/eap2.png" />
                          <p>Emotional, psychological, and social well-being</p>
                      </div>
                  </div>
              </div>
          </div>
           : <div class="col-md-12 float-right">
           <button id="back-page1-sick" onClick={this.hideMe.bind(this)} class="backBtn">Back</button>
        </div> }
        
      </div>
  </div>
      )
  }

}
