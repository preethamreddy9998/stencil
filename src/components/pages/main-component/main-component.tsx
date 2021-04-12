//import {HomeComponent} from 'home-component/home-component';
//import { RouterHistory } from '@stencil/router';
import { Component, Host, h } from '@stencil/core';
import { Route } from 'stencil-router-v2';
import { Router } from '../../shared/router';


@Component({
  tag: 'main-component',
  styleUrl: 'main-component.css',
  shadow: true,
})
export class MainComponent {

  render() {
    return (
      <Host>
        <div class="div_container">
            <header-component></header-component>
            <Router.Switch>
              <Route path="/" to="/home" />
              <Route path="/main" to="/home" />
              <Route path="/home">
                    <home-component></home-component>
              </Route>

              </Router.Switch>
              <footer-component></footer-component>
          </div>

      </Host>

      
    );
  }

}
/*

              <Route path="/main">
                  <h1>Main</h1>
                  <a {...href('/blog/Hello')}>Go to Hello</a>
                  <button >Login</button>
                </Route>
                <div class="div_container">
        <header-component></header-component>
        <stencil-router titleSuffix=" - My App">
        <stencil-route-switch scrollTopOffset={0}>
        <stencil-route url="/" component="home-component" exact={true} />
          <stencil-route url="['home-component', 'home-component']" component="home-component" />
          
          <stencil-route component="home-component" />
        </stencil-route-switch>
      </stencil-router>
        <footer-component></footer-component>
    </div> */