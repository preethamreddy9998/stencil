import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ihaveongoing-component',
  styleUrl: 'ihaveongoing-component.css',
  shadow: true,
})
export class IhaveongoingComponent {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
