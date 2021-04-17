import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ineedprevcare-component',
  styleUrl: 'ineedprevcare-component.css',
  shadow: true,
})
export class IneedprevcareComponent {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
