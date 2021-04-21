import { Component, h } from '@stencil/core';
import { href } from 'stencil-router-v2';

@Component({
  tag: 'preferredfacilities-component',
  styleUrl: 'preferredfacilities-component.css'
})
export class PreferredfacilitiesComponent {
  outsideLink(link) {
    window.location = link
  }
  render() {
    return (
      <div class="row">

      <div class="col-md-12">
        <h3 class="mt-top-zero"><font color="#0096db"><b>Preferred facilities</b></font></h3>
        <p class="blackfont">NextEra Energy is committed to helping employees be well physically, emotionally and financially. Below is a listing of convenient facilities that are rated high in quality and cost transparency. For a full list of facilities available to you, please visit myHealthHub.</p>
      </div>
      <div class="col-md-12">
        <h4><font color="#67bd45"><b>NextEra Energy Clinics – South Florida Residents</b></font></h4>
        <div class="row">
            <div class="col-md-6 col-xl-3">
              <div class="card heightpreferred nohover">
                    <div class="card-body">
                      <div id="junoclinic"> 
                        <b>Juno Beach Office</b>
                        <br/> 
                        <a href="tel:5616946212">561-694-6212</a>
                        <br/>
                        <br/> 
                        <a href="mailto:Health@NEE.com">Health@NEE.com</a> 
                        <br/>
                        <br/> 
                        <font class="smallfontsize">Monday and Wednesday<br/> 7 a.m.- 7 p.m. ET<br/> Tuesday, Thursday and Friday<br/> 7 a.m.-5 p.m. ET</font> 
                        </div>
                    </div>
              </div>
            </div>
            <div class="col-md-6 col-xl-3">
              <div class="card heightpreferred nohover">
                    <div class="card-body">
                      <div id="junoclinic"> 
                        <b>Juno Beach Office</b>
                        <br/> 
                        <a href="tel:5616946212">561-694-6212</a>
                        <br/>
                        <br/> 
                        <a href="mailto:Health@NEE.com">Health@NEE.com</a> 
                        <br/>
                        <br/> 
                        <font class="smallfontsize">Monday and Wednesday<br/> 7 a.m.- 7 p.m. ET<br/> Tuesday, Thursday and Friday<br/> 7 a.m.-5 p.m. ET</font> 
                        </div>
                    </div>
              </div>
            </div>
            <div class="col-md-6 col-xl-3">
              <div class="card heightpreferred nohover">
                    <div class="card-body">
                      <div id="junoclinic"> 
                        <b>Juno Beach Office</b>
                        <br/> 
                        <a href="tel:5616946212">561-694-6212</a>
                        <br/>
                        <br/> 
                        <a href="mailto:Health@NEE.com">Health@NEE.com</a> 
                        <br/>
                        <br/> 
                        <font class="smallfontsize">Monday and Wednesday<br/> 7 a.m.- 7 p.m. ET<br/> Tuesday, Thursday and Friday<br/> 7 a.m.-5 p.m. ET</font> 
                        </div>
                    </div>
              </div>
            </div>
            <div class="col-md-6 col-xl-3">
              <div class="card heightpreferred nohover">
                    <div class="card-body">
                      <div id="junoclinic"> 
                        <b>Juno Beach Office</b>
                        <br/> 
                        <a href="tel:5616946212">561-694-6212</a>
                        <br/>
                        <br/> 
                        <a href="mailto:Health@NEE.com">Health@NEE.com</a> 
                        <br/>
                        <br/> 
                        <font class="smallfontsize">Monday and Wednesday<br/> 7 a.m.- 7 p.m. ET<br/> Tuesday, Thursday and Friday<br/> 7 a.m.-5 p.m. ET</font> 
                        </div>
                    </div>
              </div>
            </div>
        </div>
       
      </div>
      <div class="col-md-12">
        <br/>
        <h4><font color="#67bd45"><b>Hospitals - South Florida</b></font></h4>
        <p class="blackfont">Jupiter Medical has received a 4-star rating for Overall Hospital Quality from the Centers for Medicare & Medicaid Services. As the only hospital to receive a 4-star rating in the Treasure Coast region, Jupiter Medical Center remains the highest ranked hospital in Palm Beach, Martin, St. Lucie and Indian River counties. Ranked #1 for safety, quality and patient satisfaction, Jupiter Medical Center is the leading destination for world-class healthcare in Palm Beach County and the Treasure Coast region.</p>

        <p class="blackfont">For a full list of facilities available to you, please visit myHealthHub.</p>
        
        <div class="row">
        <div class="col-md-6">
              <div class="card noneheight" onClick={() => this.outsideLink('https://www.jupitermed.com/')}>
                    <div class="card-body">
                      <img src="assets/img/jmc.png" style={{maxWidth: '100px'}}/><br/> <a href="tel:5612500665">(561) 250-0665</a><br/><br/> <a href="https://www.jupitermed.com/" target="_blank">https://www.jupitermed.com/</a> <br/><br/> <font class="smallfontsize"><a href="https://goo.gl/maps/m7ND4VuDo67dgi7y7" target="_blank">1210 S. Old Dixie Hwy. <br/> Jupiter, FL 33458</a></font><br/>
                    </div>
              </div>
            </div>
        </div>
      </div>
      <div class="col-md-12">
        <br/>
        <h4 ><font color="#67bd45"><b>Urgent care facilities</b></font></h4>
        <p class="blackfont">MD Now provides comprehensive healthcare services at more than 40 physician-led, state-of-the-art clinics across Florida 365 days a year from 8:00 AM to 8:00 PM. Walk in or call 888-636-6991.</p>

        <p class="blackfont">For a full list of facilities available to you, please visit myHealthHub.</p>
        
        <div class="row">
        <div class="col-md-6">
              <div class="card noneheight">
                    <div class="card-body" onClick={() =>
                       this.outsideLink('https://www.mymdnow.com/locations/')}>
                    <img src="assets/img/mdnow.png" style={{maxWidth: '100px'}} /><br/><br/> Find an MD Now location near you 
                    </div>
                    
              </div>
            </div>
        </div>
      </div>
      

      

    </div>
    );
  }

}
