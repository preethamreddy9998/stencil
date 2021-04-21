import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'bluecrossblue-component',
  styleUrl: 'bluecrossblue-component.css',
  shadow: true,
})
export class BluecrossblueComponent {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
