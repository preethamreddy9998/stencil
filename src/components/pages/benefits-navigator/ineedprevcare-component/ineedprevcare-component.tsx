import { Component, h } from '@stencil/core';

@Component({
  tag: 'ineedprevcare-component',
  styleUrl: 'ineedprevcare-component.css'
})
export class IneedprevcareComponent {

  render() {
    return (
      <div class="row">

      <div class="col-md-12">
        <h3 class="mt-top-zero"><font color="#0096db"><b>Preventive Care</b></font></h3>
        <p class="blackfont">Click here for a list of your preventive care services</p>
      </div>
      <div class="col-md-12">
        <h3><font color="#67bd45">Find a provider for...</font></h3>
        <div class="card noneheight">
              <div class="card-body">
                  Annual physical
              </div>
        </div>
        <div class="card noneheight">
              <div class="card-body">
              Colonoscopy
              </div>
        </div>
        <div class="card noneheight">
              <div class="card-body">
              Woman's wellness visit
              </div>
        </div>
        <div class="card noneheight">
              <div class="card-body">
              Dental cleaning
              </div>
        
        </div>
        <div class="card noneheight">
              <div class="card-body">
              Eye exam
              </div>
              </div>
      </div>
      <div class="col-md-12">
        <h3><font color="#67bd45">Learn more about...</font></h3>
        <div class="card noneheight">
              <div class="card-body">
                Preventive care services
              </div>
        </div>
        <div class="card noneheight">
              <div class="card-body">
                Health incentives
              </div>
        </div>
        
      </div>
      

      

    </div>
    );
  }

}
