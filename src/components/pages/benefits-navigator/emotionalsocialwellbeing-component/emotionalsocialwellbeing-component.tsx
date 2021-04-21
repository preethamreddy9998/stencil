import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'emotionalsocialwellbeing-component',
  styleUrl: 'emotionalsocialwellbeing-component.css',
  shadow: true,
})
export class EmotionalsocialwellbeingComponent {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
