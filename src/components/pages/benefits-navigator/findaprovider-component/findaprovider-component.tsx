import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'findaprovider-component',
  styleUrl: 'findaprovider-component.css',
  shadow: true,
})
export class FindaproviderComponent {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
