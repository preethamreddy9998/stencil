import { Component, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'emotionalsocialwellbeing-component',
  styleUrl: 'emotionalsocialwellbeing-component.css'
})
export class EmotionalsocialwellbeingComponent {
  @Event({ bubbles: true, composed: true }) bNInnerpageRedirect: EventEmitter<string>;

  render() {
    return (
      <div><div class="row">

      <div class="col-md-12">
        <h3 class="mt-top-zero"><font color="#67bd45"><b>Emotional, psychological and social well-being</b></font></h3>
      </div>
      <div class="col-md-12">
        <div onClick={() => this.bNInnerpageRedirect.emit('first')} class="card noneheight">
            <div class="card-body">
              <div class="row">
                <div class="col-md-6">
                  <img src="assets/img/eap.png" style={{maxWidth: '100px'}} role="presentation"/>
                  <br/>Cigna Employee Assistance Program
                </div>
                <div class="col-md-6" style={{borderLeft: '1px solid #67bd45'}}>
                  <br/>Supporting every NextEra Energy employee and their family members' overall emotional health and well-being experience. Access is available 24 hours a day, 365 days per year, regardless if you are on a NextEra Energy medical plan.
                  <p><b>Call Cigna at 800-395-8712 or visit Cigna</b></p>
                </div>
              </div>
            </div>
        </div>
        <div onClick={() => this.bNInnerpageRedirect.emit('second')} class="card noneheight">
            <div class="card-body">
              <div class="row">
                <div class="col-md-6">
                  <img src="assets/img/eap.png" style={{maxWidth: '100px'}} role="presentation"/>
                  <br/>Cigna Employee Assistance Program
                </div>
                <div class="col-md-6" style={{borderLeft: '1px solid #67bd45'}}>
                  <br/>Supporting every NextEra Energy employee and their family members' overall emotional health and well-being experience. Access is available 24 hours a day, 365 days per year, regardless if you are on a NextEra Energy medical plan.
                  <p><b>Call Cigna at 800-395-8712 or visit Cigna</b></p>
                </div>
              </div>
            </div>
        </div>
        <div onClick={() => this.bNInnerpageRedirect.emit('third')} class="card noneheight">
            <div class="card-body">
              <div class="row">
                <div class="col-md-6">
                  <img src="assets/img/eap.png" style={{maxWidth: '100px'}} role="presentation"/>
                  <br/>Cigna Employee Assistance Program
                </div>
                <div class="col-md-6" style={{borderLeft: '1px solid #67bd45'}}>
                  <br/>Supporting every NextEra Energy employee and their family members' overall emotional health and well-being experience. Access is available 24 hours a day, 365 days per year, regardless if you are on a NextEra Energy medical plan.
                  <p><b>Call Cigna at 800-395-8712 or visit Cigna</b></p>
                </div>
              </div>
            </div>
        </div>
      </div>
     
 
 
            
                  
                     
                      </div>
            
            </div>
    );
  }

}
