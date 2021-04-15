import { Component, h } from '@stencil/core';

@Component({
  tag: 'footer-component',
  styleUrl: 'footer-component.css'
})
export class FooterComponent {

  render() {
    return (
		<footer class="row">
			<div class="col-md-12 column kang"> 
				<div class="panel-heading"> 
					<h2>Not finding what you're looking for?<b> We're here to help!</b></h2> 
				</div> 
			</div> 
			<div class="col-md-12 column kang"> 
				<div class="row"> 
					<div class="col-md-3 column ui-sortable"></div> 
					<div class="col-md-3 column ui-sortable"> 
							<div><div class="post-container"> 
							<div class="post-thumb"> 
							<img src="assets/img/hrsubmitRequest.png"  role="presentation"/>
						</div> 
						<div class="post-content"> 
						<h3 class="post-title">Ask HR4U</h3> 
						<p>Ask a question or submit a request to HR.</p> 
						<a class="btn" href="/esc?id=esc_sc_category"> SUBMIT A REQUEST </a> 
						</div> 
						</div></div> 
					</div> 
					<div class="col-md-3 column ui-sortable"> 
						<div><div class="post-container"> 
						<div class="post-thumb">
						<img src="assets/img/hrcontactUsfooter.png" role="presentation"/>
						</div> 
						<div class="post-content"> 
						<h3 class="post-title"> Contact us </h3> 
						<p>Still need some additional support? Employee Services is here to help. Contact us at 844-694-HR4U (4748). </p>
						</div> 
						</div></div> 
					</div> 
					<div class="col-md-3 column ui-sortable"></div> 
				</div> 
			</div>
			<div class="mainquicklinks col-md-12">
				<div class="row justify-content-md-center">
					<div class="col-md-3"></div>
					<div class="col-md-9">
						<p><b>QUICK LINKS</b></p>
					</div>
				</div>
				<div class="row">
					<div class="col-md-3"></div>
					<div class="col-md-6">
						<div class="row">
                   
				   <div class="col-md-4 btmmainquicklinks">
					   <img ng-src="quick link.svg" height="32" width="32" role="presentation" src="assets/img/quicklink.svg"/>
					   <a ng-href="http://sapredirect.fpl.com/eweb.html?url=global/policies//indexCorp.shtml" target="_blank" href="http://sapredirect.fpl.com/eweb.html?url=global/policies//indexCorp.shtml"><b class="ng-binding">HR policies</b></a>
				   </div>
				   
				   <div class="col-md-4 btmmainquicklinks">
					   <img ng-src="quick link.svg" height="32" width="32" role="presentation" src="assets/img/quicklink.svg"/>
					   <a ng-href="https://performancemanager4.successfactors.com/sf/start?company=NEE" target="_blank" href="https://performancemanager4.successfactors.com/sf/start?company=NEE"><b class="ng-binding">HR4U</b></a>
				   </div>
				   
				   <div class="col-md-4 btmmainquicklinks">
					   <img ng-src="quick link.svg" height="32" width="32" role="presentation" src="assets/img/quicklink.svg"/>
					   <a ng-href="https://orgmanagerd48309b38-d7d6b3da3.us2.hana.ondemand.com/orgmanager/orghtml/index.html" target="_blank" href="https://orgmanagerd48309b38-d7d6b3da3.us2.hana.ondemand.com/orgmanager/orghtml/index.html"><b class="ng-binding">Org charts</b></a>
				   </div>
				   
				   <div class="col-md-4 btmmainquicklinks">
					   <img ng-src="quicklink.svg" height="32" width="32" role="presentation" src="assets/img/quicklink.svg"/>
					   <a ng-href="http://nexteraenergy.com/myHealthHub" target="_blank" href="http://nexteraenergy.com/myHealthHub"><b class="ng-binding">myHealthHub - BCBS</b></a>
				   </div>
				   
			   </div>
					</div>
					<div class="col-md-3"></div>
				</div>
        
        <div class="col-md-12 column ui-sortable">
            <div class="center">
                <img src="assets/img/hrfooter-logo.png" width="71" height="31" role="presentation"/> All rights reserved, NextEra Energy Inc. 2020
            </div>
        </div>
    </div>
		</footer>
    );
  }

}
