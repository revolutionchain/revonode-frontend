import React from "react"
import { Redirect } from "react-router-dom"

// Pages Component
import Chat from "../pages/Chat/Chat"

// Profile
import UserProfile from "../pages/Authentication/user-profile"

// Pages Calendar
import Calendar from "../pages/Calendar/index"

//Email
import EmailInbox from "../pages/Email/email-inbox"
import EmailRead from "../pages/Email/email-read"

// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"


// Dashboard
import Dashboard from "../pages/Dashboard/index"

// Peers
import Peers from "../pages/Peers/index"

// Blocks
import Blocks from "../pages/Blocks/index"

// Staking
import Staking from "../pages/Staking/index"

// Transactions
import Transactions from "../pages/Transactions/index"

// Wallet
import Wallet from "../pages/Wallet/index"

// Charts
import ChartApex from "../pages/Charts/Apexcharts"

// Maps
import Maps from "../pages/Maps/Maps"

//Icons
import IconBoxicons from "../pages/Icons/Boxicons"
import IconDripicons from "../pages/Icons/Dripicons"
import IconMaterialdesign from "../pages/Icons/Materialdesign"
import IconFontawesome from "../pages/Icons/Fontawesome"

//Tables
import BasicTables from "../pages/Tables/BasicTables"
import DatatableTables from "../pages/Tables/DatatableTables"

// Forms
import FormElements from "../pages/Forms/FormElement"
import FormAdvanced from "../pages/Forms/FormAdvanced"

//Ui
import UiElements from '../pages/UiElemets/UiElemets'

//Pages
import PagesStarter from "../pages/Utility/pages-starter"
import Preloader from '../pages/Utility/Preloader';
import Profile from "../pages/Utility/Profile/Profile";
import Invoice from "../pages/Utility/Invoice";
import Maintenance from "../pages/Utility/Maintenance"
import PagesComingsoon from "../pages/Utility/Comingsoon"
import Timeline from "../pages/Utility/TimeLine"
import Pricing from "../pages/Utility/Pricing"
import Error404 from "../pages/Utility/Error404"
import Error500 from "../pages/Utility/Error500"

//Adanace kit
import SweetAlert from '../pages/AdvanaceKit/SweetAlert';
import RangeSlider from "../pages/AdvanaceKit/RangeSlider"
import Notification from "../pages/AdvanaceKit/Notifications";
import Carousel from "../pages/AdvanaceKit/Carousel";

const userRoutes = [
  { path: "/dashboard", component: Dashboard },

  { path: "/peers", component: Peers },

  { path: "/blocks", component: Blocks },

  { path: "/staking", component: Staking },

  { path: "/transactions", component: Transactions },

  { path: "/wallet", component: Wallet },

  // //profile
  { path: "/profile", component: UserProfile },

  // this route should be at the end of all other routes
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
]

const authRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },
]

export { userRoutes, authRoutes }
