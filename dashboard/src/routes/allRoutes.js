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

//  // Inner Authentication
import Login1 from "../pages/AuthenticationInner/Page-login"
import Register1 from "../pages/AuthenticationInner/page-register"
import Recoverpw from "../pages/AuthenticationInner/page-recoverpw"
import LockScreen from "../pages/AuthenticationInner/page-lock-screen"
import ConfirmMail from "../pages/AuthenticationInner/page-confirm-mail"
import EmailVerification from "../pages/AuthenticationInner/page-email-verification"
import TwostepVerification from "../pages/AuthenticationInner/page-two-step-verification"

// Dashboard
import Dashboard from "../pages/Dashboard/index"

// Peers
import Peers from "../pages/Peers/index"

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
import Typography from "../pages/Typography";

const userRoutes = [
  { path: "/dashboard", component: Dashboard },

  { path: "/peers", component: Peers },


  //chat
  { path: "/chat", component: Chat },

  // //calendar
  { path: "/calendar", component: Calendar },

  // //profile
  { path: "/profile", component: UserProfile },

  //Email
  { path: "/email-inbox", component: EmailInbox },
  { path: "/email-read", component: EmailRead },

  //Charts
  { path: "/charts", component: ChartApex },

  // Icons
  { path: "/icons-boxicons", component: IconBoxicons },
  { path: "/icons-dripicons", component: IconDripicons },
  { path: "/icons-materialdesign", component: IconMaterialdesign },
  { path: "/icons-fontawesome", component: IconFontawesome },

  // Tables
  { path: "/tables-basic", component: BasicTables },
  { path: "/tables-datatable", component: DatatableTables },

  // Maps
  { path: "/maps", component: Maps },

  // Forms
  { path: "/form-elements", component: FormElements },
  { path: "/form-advanced", component: FormAdvanced },

  // Ui
  { path: '/ui-components', component: UiElements },

  //Advanace kit
  { path: "/advanced-sweet-alert", component: SweetAlert },
  { path: "/advanced-rangeslider", component: RangeSlider },
  { path: "/advanced-notifications", component: Notification },
  { path: "/advanced-carousel", component: Carousel },
  { path: "/typography", component: Typography },

  //Utility
  { path: "/pages-starter", component: PagesStarter },
  { path: "/pages-preloader", component: Preloader },
  { path: "/pages-profile", component: Profile },
  { path: "/pages-invoice", component: Invoice },
  { path: "/pages-timeline", component: Timeline },
  { path: "/pages-pricing", component: Pricing },

  // this route should be at the end of all other routes
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
]

const authRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },

  { path: "/pages-maintenance", component: Maintenance },
  { path: "/pages-comingsoon", component: PagesComingsoon },
  { path: "/pages-404", component: Error404 },
  { path: "/pages-500", component: Error500 },

  //   // Authentication Inner
  { path: "/pages-login", component: Login1 },
  { path: "/pages-register", component: Register1 },
  { path: "/pages-recoverpw", component: Recoverpw },
  { path: "/pages-lock-screen", component: LockScreen },
  { path: "/pages-confirm-mail", component: ConfirmMail },
  { path: "/pages-email-verification", component: EmailVerification },
  { path: "/pages-two-step-verification", component: TwostepVerification },
]

export { userRoutes, authRoutes }
