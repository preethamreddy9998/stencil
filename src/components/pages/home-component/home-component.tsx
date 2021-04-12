import { Component, h} from '@stencil/core';

@Component({
  tag: 'home-component',
  styleUrl: 'home-component.css',
  shadow: true,
})
export class HomeComponent {

  render() {
    return (<div class="div_container">
        <header-component></header-component>
        <footer-component></footer-component>
    </div>)
  }

}
