import { Component, h } from '@stencil/core';

@Component({
  tag: 'footer-component',
  styleUrl: 'footer-component.css',
  shadow: true,
})
export class FooterComponent {

  render() {
    return (
      <div>footer</div>
    );
  }

}
