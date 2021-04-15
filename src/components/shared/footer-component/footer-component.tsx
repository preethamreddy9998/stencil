import { Component, h } from '@stencil/core';

@Component({
  tag: 'footer-component',
  styleUrl: 'footer-component.css'
})
export class FooterComponent {

  render() {
    return (
      <div class="footer">
				<div class="banner_image">
					<img class="ban_image" src="assets/img/5db73cd5dba56c10c8f29c46b996192b.iix"/>
				</div>
				<p>
                <b>Quick links</b>
			    </p>

				<div class="container quick_links">
					<div class="quick_link_details">
						<img src="assets/img/link.jpg" class="link_image" />
						Hr polices
					</div>
					<div class="quick_link_details">
						<img src="assets/img/link.jpg" class="link_image" />
						HR4U
					</div>
					<div class="quick_link_details">
						<img src="assets/img/link.jpg" class="link_image" />
						Org charts
					</div>
					<div class="quick_link_details">
						<img src="assets/img/link.jpg" class="link_image" />
						myHealthHub - BCBS
					</div>
				</div>
			</div>
    );
  }

}
