import { Component, h } from '@stencil/core';

@Component({
  tag: 'footer-component',
  styleUrl: 'footer-component.css'
})
export class FooterComponent {

  render() {
    return (
      <div class="footer">
				<div class="contact_image">
					<img class="con_image" src="assets/img/contact.jpg"/>
				</div>
				<div class="container quick_links">
					<div class="quick_link_details">
						<img src="assets/img/link.jpg" class="link_image" />
						Hr polices
					</div>
					<div class="quick_link_details">
						<img src="assets/img/link.jpg" class="link_image" />
						Hr polices
					</div>
					<div class="quick_link_details">
						<img src="assets/img/link.jpg" class="link_image" />
						Hr polices
					</div>
					<div class="quick_link_details">
						<img src="assets/img/link.jpg" class="link_image" />
						Hr polices
					</div>
				</div>
			</div>
    );
  }

}
