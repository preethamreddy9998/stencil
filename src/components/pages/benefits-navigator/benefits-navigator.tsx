import { Component, h, Listen, State } from '@stencil/core';
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
  @State() needtofillpres: boolean = false;
  @State() findaprovider: boolean = false;
  @State() emotionalSocialWell: boolean = false;
  @State() bluecrossBlue: boolean = false;
  @State() showModal:boolean = false;
  @State() reDirectUrl:any = '';
  @State() showModalBodyText:any = '';
  @State() showModalBodyImage:any = 'assets/img/mhh.png';
  @Listen('bNInnerpageRedirect',{target: "body"})
    getChangedValue(event: CustomEvent) {
      debugger;
        if (event.detail) {
            this.reDirectLink(event.detail);
        }
    }
  hideMe(value){
    if(value == 'sickOrInjured'){
      this.sickOrInjured = true;
    }else if(value == 'ineedPreventive'){
      this.ineedPreventive = true;
    }else if(value == 'ihaveongoing'){
      this.ihaveongoing = true;
    }else if(value == 'preferredfacilities'){
      this.preferredfacilities = true;
    }else if(value == 'needtofillpres'){
        this.needtofillpres = true;
      }else if(value == 'findaprovider'){
        this.findaprovider = true;
      }else if(value == 'emotionalSocialWell'){
        this.emotionalSocialWell = true;
      }else if(value == 'bluecrossBlue'){
        this.bluecrossBlue = true;
      }else {
      this.sickOrInjured = false;
      this.ineedPreventive = false;
      this.ihaveongoing = false;
      this.preferredfacilities = false;
      this.needtofillpres = false;
      this.findaprovider = false;
      this.emotionalSocialWell = false;
      this.bluecrossBlue = false;
    }
    
  }
  reDirectLink(link){
    let targetBlank = false;
    if(link == 'findaprovider'){
      targetBlank = true;
      this.reDirectUrl = 'https://secure.healthx.com/v3app/publicservice/loginv1/login.aspx?bc=c5a67008-e408-48dc-b606-716eba433d06&serviceid=632232d6-e343-4eb0-8e5e-807ab7c92c23';
      this.showModalBodyText = 'You will be redirected to myHealthHub .......';
      this.showModalBodyImage = 'assets/img/mhh.png';
    }
    if(link == 'bluecrossBlue'){
      this.showModalBodyText = 'bluecrossBlue <a href="">aaaaa</a>';
      this.showModalBodyImage = 'assets/img/mhh.png';
    }
    if(link == 'annualPhysical'){
      targetBlank = true;
      this.reDirectUrl = 'https://secure.healthx.com/v3app/publicservice/loginv1/login.aspx?bc=c5a67008-e408-48dc-b606-716eba433d06&serviceid=632232d6-e343-4eb0-8e5e-807ab7c92c23';
      this.showModalBodyText = 'You will be redirected to myHealthHub .......';
      this.showModalBodyImage = 'assets/img/mhh.png';
    }

    if(link == 'colonoscopy'){
      this.showModalBodyText = 'surgeryplus';
      this.showModalBodyImage = 'assets/img/Get_The_Right_Care.png';
    }

    if(link == 'ninetyeightpointimsick'){
      targetBlank = true;
      this.reDirectUrl = 'https://secure.healthx.com/v3app/publicservice/loginv1/login.aspx?bc=c5a67008-e408-48dc-b606-716eba433d06&serviceid=632232d6-e343-4eb0-8e5e-807ab7c92c23';
      this.showModalBodyText = 'You will be redirected to ninetyeightpointimsick.......';
      this.showModalBodyImage = 'assets/img/mhh.png';
    }




if(link == 'first'){
  this.showModalBodyText = 'abcd';
  this.showModalBodyImage = 'assets/img/Get_The_Right_Care.png';
}


    
    this.showModal=true;
    if(targetBlank){
      setTimeout(()=>{
        window.open(this.reDirectUrl, '_blank');
      },2000);
    }
    
  }
  closeModal(){
    this.showModal=false;
  }
  popupurl(){
    this.closeModal();
  }
  render() {
    return (
    <div>
      
     
  
      <div>
        
        {this.sickOrInjured ? <iamsick-component></iamsick-component> : null }
        {this.ineedPreventive ? <ineedprevcare-component></ineedprevcare-component> : null }
        {this.ihaveongoing ? <ihaveongoing-component></ihaveongoing-component> : null }
        {this.preferredfacilities ? <preferredfacilities-component></preferredfacilities-component> : null }
        {this.needtofillpres ? <needtofillpres-component></needtofillpres-component> : null }
        {this.findaprovider ? <findaprovider-component></findaprovider-component> : null }
        {this.emotionalSocialWell ? <emotionalsocialwellbeing-component></emotionalsocialwellbeing-component> : null }
        {this.bluecrossBlue ? <bluecrossblue-component></bluecrossblue-component> : null }
        
        {(!this.sickOrInjured && !this.ineedPreventive && !this.preferredfacilities && !this.ihaveongoing && !this.needtofillpres && !this.findaprovider && !this.emotionalSocialWell && !this.bluecrossBlue) ? 
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
  
                  <div class="card"  onClick={() => this.hideMe('needtofillpres')}>
                      <div class="card-body">
                          <img class="card_image" src="assets/img/rx.png" />
                          <p>I need to fill prescription</p>
                      </div>
                  </div>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12">
                  <div class="card" onClick={() => this.reDirectLink('findaprovider')}>
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
                  <div class="card" onClick={() => this.reDirectLink('bluecrossBlue')}>
                      <div class="card-body">
                          <img class="card_image" src="assets/img/bcbs.png" />
                          <p>Blue Cross Blue Shield customer service</p>
                      </div>
                  </div>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12">
                  <div class="card" onClick={() => this.hideMe('emotionalSocialWell')}>
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

      <div tabindex="-1" role="dialog" class={{
										'modal': true,
                    'fade': true,
										'show': this.showModal
										}}>
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title"></h5>
              <button type="button" onClick={this.closeModal.bind(this)}  class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body" style={{textAlign: 'center'}}>
              <img src={this.showModalBodyImage} role="presentation"/>
              <p style={{color: 'black'}} innerHTML={this.showModalBodyText}></p>
            </div>
            <div class="modal-footer">
              &nbsp;
            </div>
            
          </div>
        </div>
      </div>
      <div onClick={this.closeModal.bind(this)} class={{
										'modal-backdrop': true,
                    'fade': true,
										'show': this.showModal
										}}></div>
  </div>
      )
  }
}

/** <div onClick={this.closeModal.bind(this)} class={{
										'modalBackground': true,
										'show': true
										}}></div> */
