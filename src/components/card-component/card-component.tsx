import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'card-component',
//   styleUrl: 'card-component.css',
  shadow: true,
})
export class Card {

  /**
   * The card image
   */
  @Prop() cardIcon: string;

  /**
   * card label
   */
  @Prop() cardLabel: string;

  render() {
    return (
        <div>
            <img src={this.cardIcon} role="presentation" alt={this.cardLabel}  />
            <label style={{color: '#000'}}>{this.cardLabel}</label>
        </div>
    )
  }
}
