import React, { useState } from "react";
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PaymentsIcon from '@mui/icons-material/Payments';
import SettingsIcon from '@mui/icons-material/Settings';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PeopleIcon from '@mui/icons-material/People';
import { useNavigate } from "react-router";
import "./layout.css";
function Layout() {
    const navigate =  useNavigate();
    const [active, setActive] = useState(false)
    const [master, setMaster] = useState(false)
    const [setting, setSetting] = useState(false)
    const [report, setReport] = useState(false)
    return (
        <>
            <nav id="sidebar" className={active ? "active" : ""}>
                <div class="custom-menu">
                    <button type="button" id="sidebarCollapse" class="btn btn-primary" onClick={() => setActive(!active)}>
                        <i class="fa fa-bars"></i>
                        <span class="sr-only">Toggle Menu</span>
                    </button>
                </div>
                <div class="p-4 pt-3">
                    <h2 style={{ color: 'white' }}>Demo</h2>
                    <ul class="list-unstyled components mb-5">
                        <li class="active" className="pt-5" onClick={()=>navigate("/dashboard")}>
                            <button data-toggle="collapse" className="buttonHover" ><DashboardIcon />&nbsp; &nbsp;Dashboard</button>
                        </li>
                        <li onClick={() => setMaster(!master)} style={{ cursor: 'pointer' }}>
                            <button data-toggle="collapse" aria-expanded={master ? "true" : "false"} className={`dropdown-toggle buttonHover ${master ? "" : "collapsed"}`} ><HomeIcon />&nbsp; &nbsp;Master
                                {!master ? <ArrowDropDownIcon style={{ marginLeft: '80%' }} /> : <ArrowDropUpIcon style={{ marginLeft: '80%' }} />}
                            </button>
                            <ul className={`collapse list-unstyled ${master ? "show" : ""}`} id="homeSubmenu" style={master ? { height: 'auto' } : {}} >
                                <li style={{ marginLeft: '10%' }} onClick={()=>navigate("/admission")}>
                                    <button className="buttonHover" ><PeopleIcon />&nbsp;&nbsp;New Admission</button>
                                </li>
                                <li style={{ marginLeft: '10%' }} onClick={()=>navigate("/fee")}>
                                    <button className="buttonHover"><CurrencyRupeeIcon />&nbsp;&nbsp;Fee Receipts</button>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <button className="buttonHover"><NotificationsIcon />&nbsp; &nbsp;Announcements</button>
                        </li>
                        <li>
                            <button className="buttonHover"><AutoStoriesIcon />&nbsp; &nbsp;Miscellaneous Charge</button>
                        </li>
                        <li>
                            <button className="buttonHover"><PaymentsIcon />&nbsp; &nbsp;Online Payments</button>
                        </li>
                        <li onClick={() => setSetting(!setting)} style={{ cursor: 'pointer' }}>
                            <button class="dropdown-toggle buttonHover"><SettingsIcon />&nbsp; &nbsp;Settings
                                {!setting ? <ArrowDropDownIcon style={{ marginLeft: '70%' }} /> : <ArrowDropUpIcon style={{ marginLeft: '70%' }} />}
                            </button>
                        </li>
                        <li onClick={() => setReport(!report)} style={{ cursor: 'pointer' }}>
                            <button class="dropdown-toggle buttonHover"><AssessmentIcon />&nbsp; &nbsp;Reports
                                {!report ? <ArrowDropDownIcon style={{ marginLeft: '70%' }} /> : <ArrowDropUpIcon style={{ marginLeft: '70%' }} />}
                            </button>
                        </li>
                    </ul>

                </div>
            </nav>
        </>
    )
}
export default Layout;