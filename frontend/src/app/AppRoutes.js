import React, { Component, Suspense, lazy } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

const Dashboard = lazy(() => import('./dashboard/Dashboard'))
const OEEAnalysis = lazy(()=> import('./dashboard/OEEAnalysis'))
const PlantDasboard = lazy(()=> import('./dashboard/plantdashboard'))
const LineBreakDown = lazy(()=> import('./linestatus/linebreakdown'))
const PreviousLineBreakDown = lazy(()=> import('./linestatus/previouslinebreakdown'))
const BreakDownReport = lazy(()=> import('./linestatus/breakdownreport'))
const ShiftBreakDownReport = lazy(()=> import('./linestatus/shiftbreakdownreport'))
const OfficerComments = lazy(()=> import('./linestatus/officercomments'))
const BookComplaint = lazy(()=> import('./complaints/bookcomplaint'))
const ComplaintReport = lazy(()=> import('./complaints/complaintreport'))
const Batch = lazy(()=> import('./batch/batch'))
const DownloadManual = lazy(()=> import('./learning/downloadmanual'))
const UserManagement = lazy(()=> import('./admin/usermanagement'))
const MachineManagement = lazy(()=> import('./admin/machinemanagement'))
const FaultManagement = lazy(()=> import('./admin/faultmanagement'))
const Calendar = lazy(()=> import('./admin/calender'))
const ManageAlerts = lazy(()=> import('./admin/managealerts'))
const UploadFile = lazy(()=> import('./admin/uploadfile'))
const BreakDownAnalysis = lazy(()=> import('./reports/breakdownAnalysis'))
const OEETrend = lazy(()=> import('./reports/oeetrends'))
const DateWiseFugaiReport = lazy(()=> import('./reports/datewiseFugaiRepot'))
const EmployeWiseFugaiReport = lazy(()=> import('./reports/employewiseFugaiReport'))
const BreakDownTrend = lazy(()=> import('./reports/breakdowntrend'))

const Signin = lazy(() => import('./login/Signin'))
const Signup = lazy(() => import('./login/Signup'))

const Buttons = lazy(() => import('./ui-elements/Buttons'))
const Dropdowns = lazy(() => import('./ui-elements/Dropdowns'))
const Icons = lazy(() => import('./ui-elements/Icons'))

const FormElements = lazy(() => import('./form/FormElements'))

const ChartJs = lazy(() => import('./charts/ChartJs'))

const BasicTable = lazy(() => import('./tables/BasicTable'))



export class AppRoutes extends Component {
  render() {
    return (
      <Suspense fallback=''>
        <Switch>
          <Route exact path="/">
            <Redirect to="/dashboard"></Redirect>
          </Route>
          <Route exact path="/dashboard" component={ Dashboard } />
          <Route exact path="/oeeanalysis" component={ OEEAnalysis } />
          <Route exact path="/plantdashboard" component={PlantDasboard}/> 
          <Route exact path="/linebreakdown" component={LineBreakDown}/> 
          <Route exact path="/previouslinebreakdown" component={PreviousLineBreakDown}/> 
          <Route exact path="/breakdownreport" component={BreakDownReport}/> 
          <Route exact path="/shiftbreakdownreport" component={ShiftBreakDownReport}/> 
          <Route exact path="/officercomments" component={OfficerComments}/> 
          <Route exact path="/bookcomplaint" component={BookComplaint}/>
          <Route exact path="/complaintreport" component={ComplaintReport}/>
          <Route exact path="/batch" component={Batch}/>
          <Route exact path="/downloadmanual" component={DownloadManual}/>
          <Route exact path="/usermanagement" component={UserManagement}/>
          <Route exact path="/machinemanagement" component={MachineManagement}/>
          <Route exact path="/faultmanagement" component={FaultManagement}/>
          <Route exact path="/calendar" component={Calendar}/>
          <Route exact path="/managealert" component={ManageAlerts}/>
          <Route exact path="/upload" component={UploadFile}/>
          <Route exact path="/breakdownanalysis" component={BreakDownAnalysis}/>
          <Route exact path="/oeetrends" component={OEETrend}/>
          <Route exact path="/datewisefugaireport" component={DateWiseFugaiReport}/>
          <Route exact path="/employewisefugaireport" component={EmployeWiseFugaiReport}/>
          <Route exact path="/breakdowntrend" component={BreakDownTrend}/>

          <Route exact path="/general-pages/signin" component={ Signin } />
          <Route exact path="/general-pages/signup" component={ Signup } />

          <Route exact path="/ui-elements/buttons" component={ Buttons } />
          <Route exact path="/ui-elements/dropdowns" component={ Dropdowns } />
          <Route exact path="/ui-elements/icons" component={ Icons } />

          <Route exact path="/form/form-elements" component={ FormElements } />

          <Route exact path="/charts/chartjs" component={ ChartJs } />

          <Route exact path="/tables/basic-table" component={ BasicTable } />

        </Switch>
      </Suspense>
    )
  }
}

export default AppRoutes
