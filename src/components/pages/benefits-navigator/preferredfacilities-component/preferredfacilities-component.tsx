import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'preferredfacilities-component',
  styleUrl: 'preferredfacilities-component.css',
  shadow: true,
})
export class PreferredfacilitiesComponent {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
