import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import logo from "../../assets/images/anzologo.png"
export class Header extends Component {
  closeMenu(e) {
    e.target.closest(".dropdown").classList.remove("show");
    e.target.closest(".dropdown .dropdown-menu").classList.remove("show");
  }

  toggleHeaderMenu(e) {
    e.preventDefault();
    document.querySelector("body").classList.toggle("az-header-menu-show");
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      document.querySelector("body").classList.remove("az-header-menu-show");
    }
  }
 
  render() {
    return (
      <div>
        <div className="az-header">
          <div className="container">
            <div className="az-header-left">
              <a href="#/" className="az-logo">
               <img src={logo} style = {{height:"70px"}}></img>
              </a>
              <a
                id="azMenuShow"
                onClick={event => this.toggleHeaderMenu(event)}
                className="az-header-menu-icon d-lg-none"
                href="#/"
              >
                <span></span>
              </a>
            </div>
            <div className="az-header-menu">
              <div className="az-header-menu-header">
                {/* <Link to="/" className="az-logo">
                  <span></span> azia
                </Link> */}
                <a
                  href="#/"
                  onClick={(event) => this.toggleHeaderMenu(event)}
                  className="close"
                >
                  &times;
                </a>
              </div>
              <ul className="nav">
                <li
                  className={
                    this.isPathActive("/dashboard")
                      ? "nav-item active"
                      : "nav-item"
                  }
                >
                  <Link to="/dashboard" className="nav-link">
                  <i style = {{padding:"4px"}} class="fa-solid fa-clock"></i> Dashboard
                  </Link>
                </li>

                <li   className={
                    this.isPathActive("/plantdashboard")
                      ? "nav-item"
                      : ""
                  }>
                  
                   
                  
                    <Link to="/plantdashboard" className="nav-link">
                    <i style = {{padding:"4px"}} class="fa-solid fa-clock"></i> Plant Dashboard
                    </Link>
                   
                 
                </li>

                <li className="nav-item">
                  <Dropdown
                    className={
                      this.isPathActive("")
                        ? "nav-item"
                        : ""
                    }
                  >
                    <Dropdown.Toggle as={"a"} className="nav-link with-sub">
                    <i style = {{padding:"4px"}} class="fa-solid fa-bars-progress"></i> Line Status
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="az-menu-sub">
                      <Link
                        to="/linebreakdown"
                        className={
                          this.isPathActive("/linebreakdown")
                            ? "nav-link active"
                            : "nav-link"
                        }
                      >  <i style = {{padding:"4px"}} class="fa-solid fa-bars-progress"></i> Line BreakDown
                      </Link>
                      <Link
                        to="/previouslinebreakdown"
                        className={
                          this.isPathActive("/previouslinebreakdown")
                            ? "nav-link active"
                            : "nav-link"
                        }
                      > <i style = {{padding:"4px"}} class="fa-solid fa-bars-progress"></i>  Previous Line BreakDown
                      </Link>
                      <Link
                        to="/breakdownreport"
                        className={
                          this.isPathActive("/breakdownreport")
                            ? "nav-link active"
                            : "nav-link"
                        }
                      ><i style = {{padding:"4px"}} class="fa-solid fa-pen-to-square"></i> BreakDown Report
                      </Link>
                      <Link
                        to="/shiftbreakdownreport"
                        className={
                          this.isPathActive("/shiftbreakdownreport")
                            ? "nav-link active"
                            : "nav-link"
                        }
                      > <i style = {{padding:"4px"}} class="fa-solid fa-pen-to-square"></i>Shift BreakDown Report
                      </Link>
                      <Link
                        to="/officercomments"
                        className={
                          this.isPathActive("/officercomments")
                            ? "nav-link active"
                            : "nav-link"
                        }
                      ><i style = {{padding:"4px"}}  class="fa-solid fa-user"></i> Officer comment
                      </Link>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>

                <li className="nav-item">
                  <Dropdown
                    className={
                      this.isPathActive("")
                        ? "nav-item"
                        : "nav-item"
                    }
                  >
                    <Dropdown.Toggle as={"a"} className="nav-link with-sub">
                    <i style = {{padding:"4px"}} class="fa-solid fa-book"></i>Complaints
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="az-menu-sub">
                      <Link
                        to="/bookcomplaint"
                        className={
                          this.isPathActive("bookcomplaint")
                            ? "nav-link active"
                            : "nav-link"
                        }
                      > <i style = {{padding:"4px"}} class="fa-solid fa-book"></i> Book/Update Complaint
                      </Link>
                      <Link
                        to="complaintreport"
                        className={
                          this.isPathActive("complaintreport")
                            ? "nav-link active"
                            : "nav-link"
                        }
                      ><i style = {{padding:"4px"}} class="fa-solid fa-pen-to-square"></i> Complaint Report
                      </Link>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>

                <li className="nav-item">
                  <Dropdown
                    className={
                      this.isPathActive("")
                        ? "nav-item"
                        : "nav-item"
                    }
                  >
                    <Dropdown.Toggle as={"a"} className="nav-link with-sub">
                    <i style = {{padding:"4px"}} class="fa-solid fa-layer-group"></i>Batch
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="az-menu-sub">
                      <Link
                        to="/batch"
                        className={
                          this.isPathActive("/batch")
                            ? "nav-link active"
                            : "nav-link"
                        }
                      >  <i style = {{padding:"4px"}} class="fa-solid fa-layer-group"></i> Manage Batch
                      </Link>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>

                <li className="nav-item">
                  <Dropdown
                    className={
                      this.isPathActive("/general-pages")
                        ? "nav-item active"
                        : "nav-item"
                    }
                  >
                    <Dropdown.Toggle as={"a"} className="nav-link with-sub">
                    <i style = {{padding:"4px"}} class="fa-solid fa-pen-to-square"></i>Report
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="az-menu-sub">
                      <Dropdown
                        
                        >

                      <Dropdown.Toggle as={"a"} className="nav-link with-sub">
                      <i style = {{padding:"4px"}} class="fa-solid fa-magnifying-glass-chart"></i>  Analysis
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="az-menu-sub">
                    <Link
                        to="/breakdownanalysis"
                        className={
                          this.isPathActive("/breakdownanalysis")
                            ? "nav-link active"
                            : "nav-link"
                        }
                        style = {{left:"100px"}}
                      >  <i style = {{padding:"4px"}} class="fa-solid fa-magnifying-glass-chart"></i> BreakDown Analysis
                      </Link>
                      <Link
                        to="/oeetrends"
                        className={
                          this.isPathActive("oeetrends")
                            ? "nav-link active"
                            : "nav-link"
                        }
                        style = {{left:"100px"}}
                      ><i style = {{padding:"4px"}} class="fa-solid fa-chart-simple"></i>OEE Trends
                      </Link>
                      <Link
                        to="/breakdowntrend"
                        className={
                          this.isPathActive("/breakdowntrend")
                            ? "nav-link active"
                            : "nav-link"
                        }
                        style = {{left:"100px"}}
                      ><i style = {{padding:"4px"}} class="fa-solid fa-chart-pie"></i> BreakDown Trends
                      </Link>

                    </Dropdown.Menu>

                      </Dropdown>
                      {/* <Link
                        to="/general-pages/signin"
                        className={
                          this.isPathActive("/general-pages/signin")
                            ? "nav-link active"
                            : "nav-link"
                        }
                      >
                        Analysis
                      </Link> */}

                      <Link
                        to="/general-pages/signin"
                        className={
                          this.isPathActive("/general-pages/signin")
                            ? "nav-link active"
                            : "nav-link "
                        }
                        style = {{marginTop:"6px",paddingTop:"6px" }}
                      > <i style = {{padding:"4px"}} class="fa-solid fa-pen-to-square"></i> WhyWhy Report
                      </Link>






                       <Dropdown>
                       <Dropdown.Toggle as={"a"} className="nav-link with-sub"  style = {{marginTop:"6px",paddingTop:"6px" }}>
                       <i style = {{padding:"4px"}} class="fa-solid fa-pen-to-square"></i>Fugai Report
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="az-menu-sub">
                    <Link
                        to="/employewisefugaireport"
                        className={
                          this.isPathActive("employewisefugaireport")
                            ? "nav-link active"
                            : "nav-link"
                        }
                      >
                       <i style = {{padding:"4px"}} class="fa-solid fa-user-tie"></i> Employees wise
                      </Link>
                      <Link
                        to="/datewisefugaireport"
                        className={
                          this.isPathActive("/datewisefugaireport")
                            ? "nav-link active"
                            : "nav-link"
                        }
                      >
                      <i style = {{padding:"4px"}}  class="fa-solid fa-database"></i>  Data Wise
                      </Link>

                    </Dropdown.Menu>
                      


                       </Dropdown>



                     



                           <Dropdown>
                           <Dropdown.Toggle as={"a"} className="nav-link with-sub"  style = {{marginTop:"6px",paddingTop:"6px" }}>
                           <i style = {{padding:"4px"}} class="fa-solid fa-pen-to-square"></i>  OEE Report
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="az-menu-sub">
                    <Link
                        to="/general-pages/signin"
                        className={
                          this.isPathActive("/general-pages/signin")
                            ? "nav-link active"
                            : "nav-link"
                        }
                       
                      >
                      <i style = {{padding:"4px"}} class="fa-solid fa-pen-to-square"></i>  Line Shift Report
                      </Link>
                      <Link
                        to="/general-pages/signin"
                        className={
                          this.isPathActive("/general-pages/signin")
                            ? "nav-link active"
                            : "nav-link"
                        }
                       
                      >
                     <i style = {{padding:"4px"}} class="fa-solid fa-pen-to-square"></i>   Line Daily Report
                      </Link>
                    </Dropdown.Menu>

                           </Dropdown>



                   
                         <Dropdown>
                         <Dropdown.Toggle as={"a"} className="nav-link with-sub"  style = {{marginTop:"6px",paddingTop:"6px" }}>
                         <i style = {{padding:"4px"}} class="fa-solid fa-pen-to-square"></i>    OEE Plant Report
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="az-menu-sub">
                    <Link
                        to="/general-pages/signin"
                        className={
                          this.isPathActive("/general-pages/signin")
                            ? "nav-link active"
                            : "nav-link"
                        }
                      
                      >
                     <i style = {{padding:"4px"}} class="fa-solid fa-pen-to-square"></i>   Plant Report
                      </Link>
                      <Link
                        to="/general-pages/signin"
                        className={
                          this.isPathActive("/general-pages/signin")
                            ? "nav-link active"
                            : "nav-link"
                        }
                       
                      >
                     <i style = {{padding:"4px"}} class="fa-solid fa-pen-to-square"></i>   Plant Shift Report
                      </Link>
                      <Link
                        to="/general-pages/signin"
                        className={
                          this.isPathActive("/general-pages/signin")
                            ? "nav-link active"
                            : "nav-link"
                        }
                       
                      >
                      <i style = {{padding:"4px"}} class="fa-solid fa-pen-to-square"></i>  Plant Daily Report
                      </Link>
                    </Dropdown.Menu>
                         </Dropdown>




                     

                       <Dropdown>
                       <Dropdown.Toggle as={"a"} className="nav-link with-sub"  style = {{marginTop:"6px",paddingTop:"6px" }}>
                       <i style = {{padding:"4px"}} class="fa-solid fa-pen-to-square"></i>   OEE Block Report
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="az-menu-sub">
                    <Link
                        to="/general-pages/signin"
                        className={
                          this.isPathActive("/general-pages/signin")
                            ? "nav-link active"
                            : "nav-link"
                        }
                       
                      >
                    <i style = {{padding:"4px"}} class="fa-solid fa-pen-to-square"></i>    Block Report
                      </Link>
                    </Dropdown.Menu>
                       </Dropdown>

                     



                      {/* <Link
                        to="/general-pages/signin"
                        className={
                          this.isPathActive("/general-pages/signin")
                            ? "nav-link active"
                            : "nav-link"
                        }
                        style = {{marginTop:"6px",paddingTop:"6px" }}
                      >
                        OEE Block Report
                      </Link> */}
                    </Dropdown.Menu>
                  </Dropdown>
                </li>

                <li className="nav-item">
                  <Dropdown
                    className={
                      this.isPathActive("/general-pages")
                        ? "nav-item active"
                        : "nav-item"
                    }
                  >
                    <Dropdown.Toggle as={"a"} className="nav-link with-sub">
                    <i style = {{padding:"4px"}} class="fa-solid fa-user"></i>Admin
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="az-menu-sub">
                      <Link
                        to="/usermanagement"
                        className={
                          this.isPathActive("/usermanagement")
                            ? "nav-link active"
                            : "nav-link"
                        }
                      ><i style = {{padding:"4px"}} class="fa-solid fa-users"></i> User Management
                      </Link>
                      <Link
                        to="machinemanagement"
                        className={
                          this.isPathActive("machinemanagement")
                            ? "nav-link active"
                            : "nav-link"
                        }
                      ><i style = {{padding:"4px"}}  class="fa-solid fa-gears"></i>Machine Management
                      </Link>
                      <Link
                        to="/faultmanagement"
                        className={
                          this.isPathActive("/faultmanagement")
                            ? "nav-link active"
                            : "nav-link"
                        }
                      ><i style = {{padding:"4px"}} class="fa-solid fa-triangle-exclamation"></i>Fault Management
                      </Link>
                      <Link
                        to="/calendar"
                        className={
                          this.isPathActive("/calendar")
                            ? "nav-link active"
                            : "nav-link"
                        }
                      ><i style = {{padding:"4px"}} class="fa-solid fa-calendar-days"></i>Calendar
                      </Link>
                      <Link
                       // to="/general-pages/signin"
                       to="/managealert"
                        className={
                          this.isPathActive("/managealert")
                            ? "nav-link active"
                            : "nav-link"
                        }
                      ><i style = {{padding:"4px"}} class="fa-solid fa-bell"></i> Manage Alert
                        
                      </Link>
                      <Link
                        to="/upload"
                        className={
                          this.isPathActive("/upload")
                            ? "nav-link active"
                            : "nav-link"
                        }
                      ><i style = {{padding:"4px"}} class="fa-solid fa-upload"></i>Upload File
                      </Link>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>

                <li className="nav-item">
                  <Dropdown
                    className={
                      this.isPathActive("/general-pages")
                        ? "nav-item"
                        : "nav-item"
                    }
                  >
                    <Dropdown.Toggle as={"a"} className="nav-link with-sub">
                    <i style={{padding:"4px"}} class="fa-solid fa-book-open"></i>Learning
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="az-menu-sub">
                      <Link
                        to="downloadmanual"
                        className={
                          this.isPathActive("")
                            ? "nav-link active"
                            : "nav-link"
                        }
                      ><i style={{padding:"4px"}} class="fa-solid fa-download"></i> Download Manual
                      </Link>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>



                
              </ul>
            </div>
            {/* <div className="az-header-right">
            <a href="https://www.bootstrapdash.com/demo/azia-react-free/documentation/documentation.html" className="az-header-search-link">
                <i className="fas fa-file-alt"></i>
              </a>
              <a href="#/" className="az-header-search-link">
                <i className="fas fa-search"></i>
              </a>
              <div className="az-header-message">
                <Link to="#/">
                  <i className="typcn typcn-messages"></i>
                </Link>
              </div>
              <Dropdown className="az-header-notification">
                <Dropdown.Toggle as={"a"} className="new">
                  <i className="typcn typcn-bell"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <div className="az-dropdown-header mg-b-20 d-sm-none">
                    <a
                      href="#/"
                      onClick={event => this.closeMenu(event)}
                      className="az-header-arrow"
                    >
                      <i className="icon ion-md-arrow-back"></i>
                    </a>
                  </div>
                  <h6 className="az-notification-title">Notifications</h6>
                  <p className="az-notification-text">
                    You have 2 unread notification
                  </p>
                  <div className="az-notification-list">
                    <div className="media new">
                      <div className="az-img-user">
                        <img
                          src={require("../../assets/images/img2.jpg")}
                          alt=""
                        ></img>
                      </div>
                      <div className="media-body">
                        <p>
                          Congratulate <strong>Socrates Itumay</strong> for work
                          anniversaries
                        </p>
                        <span>Mar 15 12:32pm</span>
                      </div>
                    </div>
                    <div className="media new">
                      <div className="az-img-user online">
                        <img
                          src={require("../../assets/images/img3.jpg")}
                          alt=""
                        ></img>
                      </div>
                      <div className="media-body">
                        <p>
                          <strong>Joyce Chua</strong> just created a new blog
                          post
                        </p>
                        <span>Mar 13 04:16am</span>
                      </div>
                    </div>
                    <div className="media">
                      <div className="az-img-user">
                        <img
                          src={require("../../assets/images/img4.jpg")}
                          alt=""
                        ></img>
                      </div>
                      <div className="media-body">
                        <p>
                          <strong>Althea Cabardo</strong> just created a new
                          blog post
                        </p>
                        <span>Mar 13 02:56am</span>
                      </div>
                    </div>
                    <div className="media">
                      <div className="az-img-user">
                        <img
                          src={require("../../assets/images/img5.jpg")}
                          alt=""
                        ></img>
                      </div>
                      <div className="media-body">
                        <p>
                          <strong>Adrian Monino</strong> added new comment on
                          your photo
                        </p>
                        <span>Mar 12 10:40pm</span>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown-footer">
                    <a href="#/">View All Notifications</a>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className="az-profile-menu">
                <Dropdown.Toggle as={"a"} className="az-img-user">
                  <img
                    src={require("../../assets/images/img1.jpg")}
                    alt=""
                  ></img>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <div className="az-dropdown-header d-sm-none">
                    <a
                      href="#/"
                      onClick={event => this.closeMenu(event)}
                      className="az-header-arrow"
                    >
                      <i className="icon ion-md-arrow-back"></i>
                    </a>
                  </div>
                  <div className="az-header-profile">
                    <div className="az-img-user">
                      <img
                        src={require("../../assets/images/img1.jpg")}
                        alt=""
                      ></img>
                    </div>
                    <h6>Aziana Pechon</h6>
                    <span>Premium Member</span>
                  </div>

                  <a href="#/" className="dropdown-item">
                    <i className="typcn typcn-user-outline"></i> My Profile
                  </a>
                  <a href="#/" className="dropdown-item">
                    <i className="typcn typcn-edit"></i> Edit Profile
                  </a>
                  <a href="#/" className="dropdown-item">
                    <i className="typcn typcn-time"></i> Activity Logs
                  </a>
                  <a href="#/" className="dropdown-item">
                    <i className="typcn typcn-cog-outline"></i> Account Settings
                  </a>
                  <Link to="/general-pages/signin" className="dropdown-item">
                    <i className="typcn typcn-power-outline"></i> Sign Out
                  </Link>
                </Dropdown.Menu>
              </Dropdown>
            </div> */}
          </div>
        </div>
      </div>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }
}

export default withRouter(Header);
