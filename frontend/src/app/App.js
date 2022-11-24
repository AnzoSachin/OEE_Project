import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './App.scss';
import AppRoutes from './AppRoutes';
import Header from './header/Header';


class App extends Component {
  state = {}
  componentDidMount() {
    this.onRouteChanged();
  }
  render () {
    let headerComponent = !this.state.isFullPageLayout ? <Header/> : '';
    
    return (
      <div>
        { headerComponent }
        <div className="az-content-wrapper">
          <AppRoutes/>
        </div>
       
      </div>
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    console.log("ROUTE CHANGED");
    window.scrollTo(0, 0);
    const fullPageLayoutRoutes = ['/login/signin', '/login/signup', '/login/page-404'];
    for ( let i = 0; i < fullPageLayoutRoutes.length; i++ ) {
      if (this.props.location.pathname === fullPageLayoutRoutes[i]) {
        this.setState({
          isFullPageLayout: true
        })
        document.querySelector('.az-content-wrapper').classList.add('p-0');
        break;
      } else {
        this.setState({
          isFullPageLayout: false
        })
        document.querySelector('.az-content-wrapper').classList.remove('p-0');
      }
    }
  }

}

export default withRouter(App);
