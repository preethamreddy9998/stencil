import { Component, h, State } from '@stencil/core';
import { href } from 'stencil-router-v2';
//import { href } from 'stencil-router-v2';

@Component({
  tag: 'benefits-navigator',
  styleUrl: 'benefits-navigator.css'
})
export class BenefitsNavigator {
  @State() sickOrInjured: boolean = false;
  sickOrInjuredMethod(){
    this.sickOrInjured = !this.sickOrInjured;
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
        <div class="row">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a {...href('/home')}>Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">Benefits Navigator</li>
            </ol>
          </nav>
        </div>
        {this.sickOrInjured ? 
              <div class="row">

                <div class="col-md-12">
                  <h3 class="mt-top-zero"><font color="#0096db"><b>Sick or injured</b></font></h3>
                  <p><font color="Red">Call 911 if is an emergency or if you require immediate medical attention for conditions such as severe chest pain, trouble breathing, or serious injuries or wounds, etc.</font></p>
                </div>
                <div class="col-md-12">
                  <div class="card noneheight">
                        <div class="card-body">
                          <h4><b>See a doctor now with 98point6</b></h4> 
                          Colds and flu, pink eye, infections, scrapes, rashes, etc.<br/><br/> <img src="assets/img/cost.png" class="card_image_icon" /> <b> $5 </b>| <img src="assets/img/stopwatch.png" class="card_image_icon"/><b> 5 minutes</b> 
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                  <div class="card noneheight">
                        <div class="card-body">
                          <h4><b>See a doctor now with 98point6</b></h4> 
                          Colds and flu, pink eye, infections, scrapes, rashes, etc.<br/><br/> <img src="assets/img/cost.png" class="card_image_icon" /> <b> $5 </b>| <img src="assets/img/stopwatch.png" class="card_image_icon"/><b> 5 minutes</b> 
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                  <div class="card noneheight">
                        <div class="card-body">
                          <h4><b>See a doctor now with 98point6</b></h4> 
                          Colds and flu, pink eye, infections, scrapes, rashes, etc.<br/><br/> <img src="assets/img/cost.png" class="card_image_icon" /> <b> $5 </b>| <img src="assets/img/stopwatch.png" class="card_image_icon"/><b> 5 minutes</b> 
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                  <div class="card noneheight">
                        <div class="card-body">
                          <h4><b>See a doctor now with 98point6</b></h4> 
                          Colds and flu, pink eye, infections, scrapes, rashes, etc.<br/><br/> <img src="assets/img/cost.png" class="card_image_icon" /> <b> $5 </b>| <img src="assets/img/stopwatch.png" class="card_image_icon"/><b> 5 minutes</b> 
                        </div>
                    </div>
                </div>

                <div class="col-md-12">
                  <img src="assets/img/cost.png" class="card_image_icon" /> = Average out-of-pocket cost (subject to your deductible) | 
                 <img src="assets/img/stopwatch.png" class="card_image_icon"/> = Average wait time 
                </div>

                <div class="col-md-12 float-right">
                   <button id="back-page1-sick" onClick={this.sickOrInjuredMethod.bind(this)} class="backBtn">Back</button>
                </div>

              </div>
         : null }
        {!this.sickOrInjured ? 
          <div class="row">
              <div class="col-lg-6 col-md-12 col-sm-12">
                  <div class="card">
                      <div class="card-body">
                          <img class="card_image" src="assets/img/kwtg_healthhub.png" />
                          <p>I need preventive care</p>
                      </div>
                  </div>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12">
                  <div class="card" onClick={this.sickOrInjuredMethod.bind(this)}>
                      <div class="card-body">
                          <img class="card_image" src="assets/img/Get_The_Right_Care.png" />
                          <p>I'm sick or injured</p>
                      </div>
                  </div>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12">
                  <div class="card">
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
                  <div class="card">
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
           : null }
        
      </div>
  </div>
      )
  }

}
