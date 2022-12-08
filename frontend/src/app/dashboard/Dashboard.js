import React, { Component } from "react";
import Select from "react-select";
// import DatePicker from "react-datepicker";
import { Form } from "react-bootstrap";
// import { Doughnut } from "react-chartjs-2";
import dasboardApi from "../../api/dashboardApi";
import Chart from "react-google-charts"
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

import OEEAnalysis from "./OEEAnalysis"



// const data = [
  //   ["Task", "Hours per Day"],
//   ["Work", 11],
//   ["Eat", 2],
//   ["Commute", 2],
//   ["Watch TV", 2],
//   ["Sleep", 7] // CSS-style declaration
// ];
const options = {
  title: "",
  pieHole: 0.4,
  is3D: true
};
charts(FusionCharts);
const dataSource = {
  chart: {
    caption: "Production Line Status",
    showvalues: "0",
    formatnumberscale: "0",
    showpercentvalues: "1",
    showsum: "0",
    plottooltext:
      "Click to get detail",
    theme: "fusion"
  },
  categories: [
    {
      category: [
       
        
        {
          label: "Data"
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: "",
      data: [
    
        {
          value: "50"
        },
        {
          value: "89"
        },
        {
          value: "195"
        },
        {
          value: "211"
        },
        {
          value: "229"
        },
        {
          value: "298"
        },
        {
          value: "312"
        },
        {
          value: "360"
        },
        {
          value: "364"
        },
        {
          value: "374"
        },
        {
          value: "381"
        }
      ]
    },
    {
      seriesname: "",
      data: [
        {
          value: "49"
        },
        {
          value: "89"
        },
        {
          value: "134"
        },
        {
          value: "199"
        },
        {
          value: "215"
        },
        {
          value: "291"
        },
        {
          value: "303"
        },
        {
          value: "330"
        },
        {
          value: "364"
        },
        {
          value: "371"
        },
        {
          value: "381"
        },
        {
          value: "392"
        }
      ]
    },
    {
      seriesname: "",
      data: [
        {
          value: "50"
        },
        {
          value: "89"
        },
        {
          value: "195"
        },
        {
          value: "211"
        },
        {
          value: "229"
        },
        {
          value: "298"
        },
        {
          value: "312"
        },
        {
          value: "360"
        },
        {
          value: "364"
        },
        {
          value: "374"
        },
        {
          value: "381"
        },
        {
          value: "426"
        }
      ]
    }
  ]
};

export class Dashboard extends Component {
  constructor(props) {
    super();
    this.state = {
      startDate: new Date(),
      lineData: [],
      shiftData: [],
      chartData:[],
      pieChartData:[],
      gridData:[],
      lineBreakageTimmingData:[],
      labelData:[],
      oeeTrendData:[],
      complainData:[],
      BStartTime:[],
      flag:false,
      data:[],
    
      date: "",
      selectedLine: "",
      selectedShift: "",
    
     
    };
     this.handleline = this.handleline.bind(this);
    this.handlesift = this.handlesift.bind(this);
    this.handledate = this.handledate.bind(this);
    this.getAllData = this.getAllData.bind(this);
    this.getdata = this.getdata.bind(this);
    this.flagupdate = this.flagupdate.bind(this);
  }
    
  
  componentDidMount() {
    this.getLineData();
    this.getShiftData();
  }
 
    

  getLineData() {
    dasboardApi.getLineData().then((response) => {
      console.log("Line", response.data);
      this.setState({ lineData: response.data });
    });
  }

  getShiftData() {
    dasboardApi.getShiftData().then((response) => {
      console.log("Shift", response.data);
      this.setState({ shiftData: response.data });
    });
  }
  handleline = (selectedLine) => {
    this.setState({ selectedLine: selectedLine.value });
   
  };

  handlesift = (selectedShift) => {
    this.setState({ selectedShift:selectedShift.value });
  
  
  };
  handledate(e) {
  

    this.setState({ date: e.target.value });
  }
  getChartData(data) {
    const{selectedLine} = this.state
    dasboardApi.getChartData(data)
    .then((response) => {
      console.log("getChartData", response.data);
      this.setState({ chartData: response.data });
    });
  }

  getPieChartData() {
    const{selectedLine,selectedShift,date} = this.state
    dasboardApi.getPieChartData({selectedLine,selectedShift,date})
    .then((response) => {
      console.log("getPieChartData", response.data);
      this.setState({ pieChartData: response.data });
    });
  }
  getGridData() {
    const{selectedLine,selectedShift,date} = this.state
    dasboardApi.getGridData({selectedLine,selectedShift,date})
    .then((response) => {
      console.log("getGridData", response.data);
      this.setState({ gridData: response.data });
    });
  }
  getLineBreakageTimmings() {
    const{selectedLine,selectedShift,date} = this.state
    dasboardApi.getLineBreakageTimmings({selectedLine,selectedShift,date})
    .then((response) => {
      console.log("getLineBreakageTimmings", response.data);
      this.setState({ lineBreakageTimmingData: response.data });
    });
  }
  getLabelsData() {
    const{selectedLine,selectedShift,date} = this.state
    dasboardApi.getLabelsData({selectedLine,selectedShift,date})
    .then((response) => {
      console.log("getLabelsData", response.data);
      this.setState({ labelData: response.data });
    });
  }
  getOEETrendData() {
    const{selectedLine,selectedShift,date} = this.state
    dasboardApi.getOEETrendData({selectedLine,selectedShift,date})
    .then((response) => {
      console.log("getOEETrendData", response.data);
      this.setState({ oeeTrendData: response.data });
    });
  }
  getComplainData() {
    const{selectedLine,selectedShift,date} = this.state
    dasboardApi.getComplainData({selectedLine,selectedShift,date})
    .then((response) => {
      console.log("getComplainData", response.data);
      this.setState({ complainData: response.data });
    });
  }

  getdata() {
        this.setState({flag : true})
      
  }

  flagupdate() {
    this.setState({flag : false})
  
}

  getAllData() {
    
    const{selectedLine,selectedShift,date} = this.state
   
    dasboardApi.getChartData({selectedLine,selectedShift,date})
    .then((res) => res.json())
    .then((data) => {
     
           console.log("getChartData",data)
           this.setState({ chartData: data });
          })

    dasboardApi.getPieChartData({selectedLine,selectedShift,date})
    .then((res) => res.json())
    .then((data) => {
     
           console.log("getPieChartData",data)
           this.setState({ pieChartData: data });
          })
    

    dasboardApi.getGridData({selectedLine,selectedShift,date})
    .then((res) => res.json())
    .then((data) => {
     
           console.log("getGridData",data)
           this.setState({ gridData: data });
          })
    dasboardApi.getLineBreakageTimmings({selectedLine,selectedShift,date})
    .then((res) => res.json())
    .then((data) => {
     
           console.log("getLineBreakageTimmings",data)
           this.setState({ lineBreakageTimmingData: data });
          })
    dasboardApi.getLabelsData({selectedLine,selectedShift,date})
    .then((res) => res.json())
      .then((data) => {
       
             console.log("getLabelsData",data.recordsets)
             this.setState({ labelData: data.recordsets });
             console.log("labelData-->",this.state.labelData)
            
            })
  
    dasboardApi.getOEETrendData({selectedLine,selectedShift,date})
    .then((res) => res.json())
    .then((data) => {
     
           console.log("getOEETrendData",data)
           this.setState({ oeeTrendData: data });
          })
    dasboardApi.getComplainData({selectedLine,selectedShift,date})
    .then((res) => res.json())
    .then((data) => {
     
           console.log("getOEETrendData",data)
           this.setState({ complainData: data });
          })
    }

  toggleProBanner() {
    document.querySelector(".proBanner").classList.toggle("hide");
  }

  render() {
    const { lineData, shiftData } = this.state;
    
   let Production = this.state.labelData.filter((value) =>{
  
         return value[0].Production
   })
  

    const time = this.state.gridData.map((item)=>{
     
      return item.Time
    })

    const totaldowntime = time.reduce(function (accumulator, item) {
      return accumulator + item;
    }, 0);

   
  
   
   
    return (
      <div>
        <div className="proBanner"></div>
        <div className="container p-md-0">
          <div className="az-content-body">
            <div className="row row-sm mg-b-20">
              <div className="col-lg-7 ht-lg-100p">
                <div className="card card-dashboard-one">
                  {/* <div className="card-header">
                    <div>
               
                      <h6 className="card-title">Enter Values</h6> 
                      
                    </div>
                   
                  </div> */}
                  {/* card-header */}
                  <div className="card-body">
                    <div className="form-body">
                      <div className="col-lg-4">
                        <p className="mg-b-10">Select Line</p>
                        <Select
                          onChange={(e) => this.handleline(e)}
                          value={this.state.selectedLine.value}
                          options={[
                            ...lineData.map((ele) => {
                              return {
                                value: ele.LineCode,
                                label: ele.LineName,
                              };
                            }),
                          ]}
                        />
                      </div>

                      <div className="col-lg-4">
                        <p className="mg-b-10">Select Sift</p>
                        <Select
                          onChange={(e) => this.handlesift(e)}
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
                            placeholder=""
                          />
                        </Form.Group>
                      </div>
                    </div>

                    <div className="classbutton" style={{ zIndex: "90" }} >
                      <button
                        onClick={(e) => {
                          this.getAllData()
                        }}
                      >
                        Get Data
                      </button>
                    </div>
                  </div>
                  {/* card-body */}
                </div>
                {/* card */}
              </div>
              {/* col */}
              <div className="col-lg-5 mg-t-20 mg-lg-t-0">
                <div className="row row-sm">
                  <div className="col-sm-6">
                    <div className="card card-dashboard-two">
                      <div className="card-header">
                        <div className="az-list-item">
                          <div>
                            <h3>Production(KL)</h3>
                          </div>
                          <div>
                            <h2 className="bg-warning">{this.state.labelData == 0 ? "00.00" :this.state.labelData[4][0].Production * this.state.labelData[4][0].ContainerSize/1000}</h2>
                          </div>
                        </div>
                        <div className="az-list-item">
                          <div> 
                            <h3 className="production-txt">Production(PL)</h3>
                          </div>
                          <div>
                            <h2 className="bg-warning">{this.state.labelData == 0 ? "00.00" :this.state.labelData[4][0].Production}</h2>
                          </div>
                        </div>
                        <div className="az-list-item">
                          <div>
                            <h3>Size(ltr)</h3>
                          </div>
                          <div>
                            <h2 className="bg-warning">{this.state.labelData == 0 ? "00.00" :this.state.labelData[4][0].ContainerSize}</h2>
                          </div>
                        </div>
                      </div>
                      {/* <div className="card-body">
                    
                       
                      </div> */}
                    </div>
                    {/* card */}
                  </div>
                  {/* col */}
                  <div className="col-sm-6 mg-t-20 mg-sm-t-0">
                    <div className="card card-dashboard-pageviews">
                      {/* <div className="card-header">
                    <h6 className="card-title">Analysis</h6>
                  
                  </div>card-header */}
                      <div className="card-body">
                        <div className="az-list-item">
                          <div>
                            <h5>OEE(%)</h5>
                          </div>
                          <div>
                            <h3 className="bg-warning">{this.state.labelData == 0 ? "00.00" :this.state.labelData[0][0].OEE}</h3>
                            {/* <span>31.74% (-100.00%)</span> */}
                          </div>
                        </div>
                        {/* list-group-item */}
                        <div className="az-list-item">
                          <div>
                            <h5>CPM(Avg.)</h5>
                          </div>
                          <div>
                            <h3 className="bg-warning">{this.state.labelData == 0 ? "00.00" : this.state.labelData[0][0].CPM}</h3>
                          </div>
                        </div>
                        {/* list-group-item */}
                        <div className="az-list-item">
                          <div>
                            <h5>Availability(%)</h5>
                          </div>
                          <div>
                            <h3 className="bg-warning">{this.state.labelData == 0 ? "00.00" : this.state.labelData[0][0].Avail}</h3>
                          </div>
                        </div>
                        {/* list-group-item */}
                        <div className="az-list-item">
                          <div>
                            <h5>Performance(%)</h5>
                          </div>
                          <div>
                            <h3 className="bg-warning">{this.state.labelData == 0 ? "00.00" :this.state.labelData[0][0].Performance}</h3>
                          </div>
                        </div>
                        {/* list-group-item */}
                        <div className="az-list-item">
                          <div>
                            <h5>MTTR(min.)</h5>
                          </div>
                          <div>
                            <h3 className="bg-warning">{this.state.labelData == 0 ? "00.00" :this.state.labelData[1][0].MTTR}</h3>
                          </div>
                        </div>
                        <div className="az-list-item">
                          <div>
                            <h5>MTBF(min.)</h5>
                          </div>
                          <div>
                            <h3 className="bg-warning">{this.state.labelData == 0 ? "00.00" :this.state.labelData[1][0].MTBF}</h3>
                          </div>
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
                <div className="card card-dashboard-four">
                  <div className="card-header">
                    {this.state.gridData == 0 ? <h6>No Breakdown For this Swift</h6>: `Breakage Reason-On the Basis of Time, Total Down Time = ` + totaldowntime + "mins" }
                  </div>
                  {/* card-header */}
                  <div className="card-body row">
                    <div className="col-md-6 d-flex align-items-center">
                      <div className="chart">
                       
                        <Chart
                         chartType="PieChart"
                         width="100%"
                         height="200px"
                         data={[
          
                                   ["Task", "Hours per Day"],
                                   ["Main Reason not specified, Sub Reason not specified ", time[0]],
                                   ["Planned Processes(Lunch)", time[1]],
                                   ["Planned Processes(Shift Deployment)", time[2]],
                                   ["Planned Processes(Shift End Reporting)", time[3]],
           
                               ]}
                                    options={options}
                            />
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-5 mg-lg-l-auto mg-t-20 mg-md-t-0">
                      <div className="chart">
                        {/* <canvas id="chartDonut"></canvas> */}
           
                      </div>
                    </div>
                    {/* col */}
                    {/* <div className="col-md-6 col-lg-5 mg-lg-l-auto mg-t-20 mg-md-t-0">
      <div className="az-traffic-detail-item">
        <div>
          <span>Series 1</span>
          
        </div>
         <div className="progress">
          <div className="progress-bar bg-purple wd-25p" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>progress 
      </div>
       <div className="az-traffic-detail-item">
        <div>
          <span>Email</span>
          <span>987 <span>(20%)</span></span>
        </div>
         <div className="progress">
          <div className="progress-bar bg-primary wd-20p" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
        </div> 
         progress 
       </div> 
       <div className="az-traffic-detail-item">
        <div>
          <span>Referral</span>
          <span>2,010 <span>(30%)</span></span>
        </div>
        <div className="progress">
          <div className="progress-bar bg-info wd-30p" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div> 
      
       
    </div>col */}
                  </div>
                  {/* card-body */}
                </div>
                {/* card-dashboard-four */}
              </div>
              <div className="col-lg-4">
                <div className="card card-dashboard-twoo">
                  <div className="card-header">
                    <div className="az-list-item">
                      <div>
                        <h4>
                          Estimated Run Time<br></br>(In Shift)
                        </h4>
                      </div>
                      <div>
                        <h2 className="bg-warning">{this.state.labelData == 0 ? "00.00" :this.state.labelData[3][0].EstimatedRunTime}</h2>
                      </div>
                    </div>
                    <div className="az-list-item">
                      <div>
                        <h4>Actual Run Time</h4>
                      </div>
                      <div>
                        <h2 className="bg-warning">{this.state.labelData == 0 ? "00.00" :this.state.labelData[3][0].EstimatedRunTime - this.state.labelData[3][0].TotalDownPeriod}</h2>
                      </div>
                    </div>
                    <div className="az-list-item">
                      <div>
                        <h4>Breakdown Time</h4>
                      </div>
                      <div>
                        <h2 className="bg-warning">{this.state.labelData == 0 ? "00.00" :this.state.labelData[3][0].TotalDownPeriod}</h2>
                      </div>
                    </div>
                    <div className="az-list-item">
                      <div>
                        <h4>Planned Downtime</h4>
                      </div>
                      <div>
                        <h2 className="bg-warning">{this.state.labelData == 0 ? "00.00" :this.state.labelData[3][0].PlannedBreakdown}</h2>
                      </div>
                    </div>
                  </div>
                  {/* <div className="card-body">
                     
                    
                   
                                    
                                  
                              </div>  */}
                  {/* card-body */}
                </div>
                {/*card */}
              </div>
              {/* col */}
              {/* col */}
            </div>
            {/* row */}
      
            <div className="row row-sm mg-b-20 mg-lg-b-0">
              <div className="dasboardPopup">
               {this.state.flag?
               <OEEAnalysis FlagUpdate = {this.flagupdate} lineBreakageTimmingData = {this.state.lineBreakageTimmingData}  labelData = {this.state.labelData[0][0]}/>
               :""}
                </div> 
              <div className="col-lg-7 col-xl-8 mg-t-20 mg-lg-t-0">
                
                <div className="card card-table-one">
                  <h6 className="text-danger">
                  
                  </h6>
                  <div onClick={this.getdata} id="fusion">
                   
                    {this.state.lineBreakageTimmingData[0]?  <ReactFusioncharts
                      type="stackedbar3d"
                        width="100%"
                        height="80%"
                        dataFormat="JSON"
                        dataSource={dataSource}
                             />:"No data for this breakdown"}
                   {/* <ReactFusioncharts
                      type="stackedbar3d"
                        width="100%"
                        height="80%"
                        dataFormat="JSON"
                        dataSource={dataSource}
                             /> */}
                
         
          </div>
                </div>
            
              </div>

              
            </div>
            {/* row */}
          </div>
          {/* az-content-body */}
        </div>
      </div>
    );
  }
}

export default Dashboard;
