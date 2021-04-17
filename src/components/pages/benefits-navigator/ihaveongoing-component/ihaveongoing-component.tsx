import { Component, h } from '@stencil/core';

@Component({
  tag: 'ihaveongoing-component',
  styleUrl: 'ihaveongoing-component.css'
})
export class IhaveongoingComponent {

  render() {
    return (
      <div class="row">

      <div class="col-md-12">
        <h3 class="mt-top-zero"><font color="#0096db"><b>On-going condition or serious diagnosis</b></font></h3>
      </div>
      <div class="col-md-12">
        
        <div class="card noneheight">
              <div class="card-body">
               I need to speak to my Blue Cross Blue Shield advocate
              </div>
        </div>
        <div class="card noneheight">
              <div class="card-body">
                I need to speak to my Blue Cross Blue Shield advocate
              </div>
        </div>
        <div class="card noneheight">
              <div class="card-body">
                  Annual physical
              </div>
        </div>
        <div class="card noneheight">
              <div class="card-body">
                  Annual physical
              </div>
        </div>
      </div>
     
      

      

    </div>
    );
  }

}
