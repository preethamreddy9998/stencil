//import {HomeComponent} from 'home-component/home-component';
//import { RouterHistory } from '@stencil/router';
import { Component, Host, h } from '@stencil/core';
import { Route } from 'stencil-router-v2';
import { Router } from '../../shared/router';


@Component({
  tag: 'main-component',
  styleUrl: 'main-component.css'
})
export class MainComponent {
  render() {
    return (
      <Host>
        <div class="container-fluid">
            <div class="row">
              <div class="col">
                 
                  <Router.Switch>
                    <Route path="/" to="/benefits" />
                    <Route path="/main" to="/benefits" />
                    <Route path="/home">
                          <home-component></home-component>
                    </Route>
                    <Route path="/benefits">
                          <benefits-navigator></benefits-navigator>
                    </Route>

                    </Router.Switch>
                    
              </div>
            </div>
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