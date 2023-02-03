import React from "react"
import { Redirect } from "react-router-dom"

// Profile
import UserProfile from "../pages/Authentication/user-profile"


// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"


// Dashboard
import Dashboard from "../pages/Dashboard/index"

// Peers
import Peers from "../pages/Peers/index"

// Blocks
import Blocks from "../pages/Blocks/index"

// Staking
import Staking from "../pages/Staking/index"

// Wallet
import Wallet from "../pages/Wallet/index"

// Wallet
import Tips from "../pages/Tips/index"

// Settings
import Settings from "../pages/Settings/index"

// Backup
import Backup from "../pages/Backup/index"

// Update
import Update from "../pages/Update/index"


const userRoutes = [
  { path: "/dashboard", component: Dashboard },

  { path: "/peers", component: Peers },

  { path: "/blocks", component: Blocks },

  { path: "/staking", component: Staking },

  { path: "/wallet", component: Wallet },

  { path: "/tips", component: Tips },
  
  { path: "/settings", component: Settings },

  { path: "/backup", component: Backup },

  { path: "/update", component: Update },

  // //profile
  { path: "/profile", component: UserProfile },

  // this route should be at the end of all other routes
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> }
]

const authRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/register", component: Register }
]

export { userRoutes, authRoutes }
