import React, { Component } from "react";
import Select from "react-select";
import { Table } from 'react-bootstrap';
// import DatePicker from "react-datepicker";
import { Form } from "react-bootstrap";
// import { Doughnut } from "react-chartjs-2";
import dasboardApi from "../../api/dashboardApi";
//import "../../assets/scss/template/plantdashboard"

export class PlantDasboard extends Component {
  constructor(props) {
    super();
    this.state = {
      startDate: new Date(),
      linestatus:[],
      block: [],
      shiftData: [],
      linedetails:[],
      date: "",
      selectedBlock: "",
      selectedShift: "",
    
     
    };
   

    this.handleblock = this.handleblock.bind(this);
    this.handlesift = this.handlesift.bind(this);
    this.handledate = this.handledate.bind(this);
    
  }
  componentDidMount() {

    this.getBlock();
    this.getShiftData();
    this.getLineStatus();
  }



  getBlock() {
    dasboardApi.getBlock().then((response) => {
      console.log("block", response.data);
      this.setState({  block: response.data });
    });
  }

  getShiftData() {
    dasboardApi.getShiftData().then((response) => {
      console.log("Shift", response.data);
      this.setState({ shiftData: response.data });
    });
  }

  getLineStatus() 
{
  dasboardApi.getCurrentLineStatus().then((response) => {
    console.log("linestatus", response.data);
    this.setState({ linestatus: response.data });
  });

}
  handleblock = (selectedBlock) => {
   
    this.setState({ selectedBlock: selectedBlock.value });
  
  };

  handlesift = (selectedShift) => {
    this.setState({ selectedShift: selectedShift.value });
   
   
  };
  handledate(e) {
   

    this.setState({ date: e.target.value });
  }

 
    getlinedetails() {
      const {selectedBlock,selectedShift,date} = this.state
    

      dasboardApi.getLineDetails({selectedBlock,selectedShift,date})
      .then((res) => res.json())
      .then((data) => {
       
             console.log("getLineDetails",data)
             this.setState({ linedetails: data
             });
             console.log("linedetails",this.state.linedetails)
            })
     
    }
  
 



  

   render(){
    const {  block, shiftData, } = this.state;
    return(
<div>
        <div className="proBanner"></div>
        <div className="container p-md-0">
          <div className="az-content-body">
            <div className="row row-sm mg-b-20">
              <div className="col-lg-7 ht-lg-100p">
                <div className="card card-plantdashboard-one">
                
                  {/* card-header */}
                  <div className="card-body">
                    <div className="form-body">
                      <div className="col-lg-4">
                        <p className="mg-b-10">Select Block</p>
                        <Select
                          onChange={(value) => this.handleblock(value)}
                      
                          value={this.state.selectedBlock.value}
                          options={[
... block.map((ele) => {
                              return {
                                value: ele.BlockKey,
                                label: ele.BlockName,
                              };
                            }),
                          ]}
                        />
                      </div>

                      <div className="col-lg-4">
                        <p className="mg-b-10">Select Sift</p>
                        <Select
                          onChange={(value) => this.handlesift(value)}
                          value={this.state.selectedShift.value}
                          options={[
                            ...shiftData.map((ele) => {
                              return {
                                value: ele.ShiftValue,
                                label: ele.ShiftValue,
                              };
                            }),
                          ]}
                        />
                      </div>

                      <div className="col-lg-4" style={{ zIndex: "66" }}>
                        <Form.Group controlId="dob">
                          <Form.Label className="mg-b-10">
                            Select Date
                          </Form.Label>
                          <Form.Control
                            type="date"
                            name="dob"
                            value={this.state.date}
                            onChange={(e) => this.handledate(e)}
                            placeholder="Date of Birth"
                          />
                        </Form.Group>
                      </div>
                      
                     
                    
                    </div>
                    <button className="classbutton" style={{ zIndex: "70" }}
                        onClick={(e) => {
                          this.getlinedetails()
                        }}
                      >
                        Get Data
                      </button>

                    
                  </div>
                  {/* card-body */}
                </div>
                {/* card */}
              </div>
              {/* col */}
              <div className="col-lg-5 mg-t-20 mg-lg-t-0">
                <div className="row row-sm">
                  
                  {/* col */}
                  <div className="col-sm-6 mg-t-20 mg-sm-t-0">
                    <div className="card card-plantdashboard-pageviews">
                      <div className="card-header">
                    <h5 className="card-title">Line Status(Current)</h5>
                  
                  </div>
                      <div className="card-body">
                      <div className="table-responsive">
              <Table bordered className="mg-b-0">
                <thead>
                  <tr>
                    {/* <th>ID</th>
                    <th>Name</th> */}
                    
                  </tr>
                </thead>
                <tbody>

                {this.state.linestatus.map((item) => (
                <tr key={item._id}>
              <th>{item.LineCode}</th>
              <td>{item.BDStartTime}</td>
             
            </tr>
          ))}
          </tbody>
              </Table>
            </div>
                        
                       
                       
                       
                        
                      </div>
                    </div>
                    
                  </div>
                  {/* col */}
                </div>
                {/* row */}
              </div>
              {/*col */}
            </div>
            {/* row */}

            <div className="row row-sm mg-b-20">
              <div className="col-lg-8 mg-t-20 mg-lg-t-0">
                <div className="card  card-plantdashboard-four">
                  <div className="card-header">
                    <h5>Lines Status:</h5>
                  </div>
                 
                  <div className="card-body">
                  <div className="table-responsive">
              <Table bordered className="mg-b-0">
               
                <thead>
                  <tr>
                    <th>Line Name</th>
                    <th>Shift</th>
                    <th>CPM</th>
                    <th>Performance</th>
                    <th>Availability</th>
                    <th>OEE</th>
                    <th>MTTR</th>
                    <th>MTBF</th>
                    <th>Production</th>
                    <th>Production(KL)</th>
                    <th>Size</th>
                    <th>Total Time</th>
                    <th>TotalD</th>
                    <th>Planned</th>
                    
                  </tr>
                </thead>
                <tbody>
                {this.state.linedetails.map((item) => (
                <tr key={item._id}>
              <td>{item.LineName}</td>
              <td>{item.Shift}</td>
              <td>{item.CPM}</td>
              <td>{item.Performance}</td>
              <td>{item.Availability}</td>
              <td>{item.OEE}</td>
              <td>{item.MTTR}</td>
              <td>{item.MTBF}</td>
              <td>{item.Production}</td>
              <td>{item.ProductionKL}</td>
              <td>{item.Size}</td>
              <td>{item.TotalTime}</td>
              <td>{item.TotalDownTime}</td>
              <td>{item.PlannedDownTime}</td>

              
              
             
             
            </tr>
          ))}
                  {/* <tr>
                    <th scope="row">A202</th>
                    <td>B</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0.00</td>
                    <td>0</td>
                    <td>1.00</td>
                    <td>354</td>
                    <td>354</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <th scope="row">A203</th>
                    <td>B</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0.00</td>
                    <td>0</td>
                    <td>1.00</td>
                    <td>354</td>
                    <td>354</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <th scope="row">A204</th>
                    <td>B</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0.00</td>
                    <td>0</td>
                    <td>1.00</td>
                    <td>354</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <th scope="row">A205</th>
                    <td>B</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0.00</td>
                    <td>0</td>
                    <td>1.00</td>
                    <td>354</td>
                    <td>354</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <th scope="row">A206</th>
                    <td>B</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0.00</td>
                    <td>0</td>
                    <td>1.00</td>
                    <td>354</td>
                    <td>354</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <th scope="row">A207</th>
                    <td>B</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0.00</td>
                    <td>0</td>
                    <td>1.00</td>
                    <td>354</td>
                    <td>354</td>
                    <td>0</td>
                  </tr> */}
                 
                 
                 
                </tbody>
              </Table>
            </div>
                   
                   
                  </div>
                 
                </div>
                {/* card-dashboard-four */}
              </div>
              <div className="col-lg-4">
                {/* <div className="card card-dashboard-twoo">
                  <div className="card-header">
                    <div className="az-list-item">
                      <div>
                        <h4>
                          Estimated Run Time<br></br>(In Shift)
                        </h4>
                      </div>
                      <div>
                        <h2 className="bg-warning">305</h2>
                      </div>
                    </div>
                    <div className="az-list-item">
                      <div>
                        <h4>Actual Run Time</h4>
                      </div>
                      <div>
                        <h2 className="bg-warning">0</h2>
                      </div>
                    </div>
                    <div className="az-list-item">
                      <div>
                        <h4>Breakdown Time</h4>
                      </div>
                      <div>
                        <h2 className="bg-warning">305</h2>
                      </div>
                    </div>
                    <div className="az-list-item">
                      <div>
                        <h4>Planned Downtime</h4>
                      </div>
                      <div>
                        <h2 className="bg-warning">00</h2>
                      </div>
                    </div>
                  </div>
                 
                
                </div> */}
                {/*card */}
              </div>
              {/* col */}
              {/* col */}
            </div>
            {/* row */}

            <div className="row row-sm mg-b-20 mg-lg-b-0">
              <div className="col-lg-7 col-xl-8 mg-t-20 mg-lg-t-0">
                <div className="card card-plantdasboard-table-one">
                <div className="card-header">
                        <div className="az-list-item">
                          <div>
                            <h2>Production(KL)</h2>
                          </div>
                          <div>
                            <h1 className="bg-warning">233.50%</h1>
                          </div>
                        </div>
                        <div className="az-list-item">
                          <div>
                            <h2 className="production-txt">OEE(%)</h2>
                          </div>
                          <div>
                            <h1 className="bg-warning">33.50%</h1>
                          </div>
                        </div>
                        
                      </div>
                </div>
                {/* card */}
              </div>

              {/* column lg*/}
            </div>
            {/* row */}
          </div>
          {/* az-content-body */}
        </div>
      </div>
    )
              }
}

export default PlantDasboard;
