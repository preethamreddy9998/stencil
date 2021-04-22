import { Component, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'iamsick-component',
  styleUrl: 'iamsick-component.css'
})
export class IamsickComponent {
  @Event({ bubbles: true, composed: true }) bNInnerpageRedirect: EventEmitter<string>;

  render() {
    return (
      <div class="row">

                <div class="col-md-12">
                  <h3 class="mt-top-zero"><font color="#0096db"><b>Sick or injured</b></font></h3>
                  <p><font color="Red">Call 911 if is an emergency or if you require immediate medical attention for conditions such as severe chest pain, trouble breathing, or serious injuries or wounds, etc.</font></p>
                </div>
                <div class="col-md-12">
                  <div onClick={() => this.bNInnerpageRedirect.emit('ninetyeightpointimsick')} class="card noneheight">
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

                

              </div>
    );
  }

}


/***<!-- */