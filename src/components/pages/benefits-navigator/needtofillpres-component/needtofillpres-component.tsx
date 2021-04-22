import { Component, h } from '@stencil/core';

@Component({
  tag: 'needtofillpres-component',
  styleUrl: 'needtofillpres-component.css'
})
export class needtofillpresComponent {

  render() {
    return (
     <div><div class="row">

     <div class="col-md-12">
       <h3 class="mt-top-zero"><font color="#67bd45"><b>Prescription</b></font></h3>
     </div>
     <div class="col-md-6">
                       <div class="card noneheight">
                             <div class="card-body">
                             <img src="assets/img/rxss.png" style={{maxWidth: '90px'}} /><br/><br/> Save money on your prescriptions
                             </div>
                       </div>
                       </div>
     <div class="col-md-6">
               <div class="card noneheight">
                     <div class="card-body">
                     <img src="assets/img/cvscaremark.png" style={{maxWidth: '90px'}} /><br/><br/> CVS Caremark - Shop prices on prescriptions 
                     </div>
               </div>
             </div>
          </div>
        </div>
    )
  }
}