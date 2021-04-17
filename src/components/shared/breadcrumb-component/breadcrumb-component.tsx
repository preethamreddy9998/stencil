import { Component, h } from '@stencil/core';
import { href } from 'stencil-router-v2';

@Component({
  tag: 'breadcrumb-component',
  styleUrl: 'breadcrumb-component.css'
})
export class BreadcrumbComponent {

  render() {
    return (
      <div class="row">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a {...href('/home')}>Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">Benefits Navigator</li>
            </ol>
          </nav>
        </div>
    );
  }

}
