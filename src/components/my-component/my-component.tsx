import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';
import { Card } from '../card-component/card-component';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {

  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div>
      <header class="header-size">
        <div class="container">
          <div class="row">
            <div class="col-sm-4">
            <button type="button" class="btn btn-success">Primary</button>
            </div>
          </div>
        </div>
      </header>
      <img ng-src="9db7c257dbb15450c38f0763b99619fb.iix" title="ServiceNow" role="presentation" alt="Portal Logo" src="9db7c257dbb15450c38f0763b99619fb.iix"></img><form id="form"> 
    <input type="search" id="query" name="q" placeholder="Search..."/>
    <button>Search</button>
  </form>
  <card-component cardIcon="image" cardLabel="test label" />
  </div>;
  }
}
