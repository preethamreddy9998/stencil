import { Component, h} from '@stencil/core';
//import { Route, RouteParams, href, match, staticState } from 'stencil-router-v2';
import { href } from 'stencil-router-v2';
//import { Router } from '../../shared/router';

@Component({
  tag: 'home-component',
  styleUrl: 'home-component.css'
})
export class HomeComponent {

  render() {
    return (
    <div style={{margin: '10% 20%'}}>
      <p></p>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td><a {...href('/benefits')}>Benefits Navigator</a></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td><a href="#">Dashboard</a></td>
          </tr>
        </tbody>
      </table>
    </div>
      
    )
  }

}
