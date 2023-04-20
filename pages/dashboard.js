import React from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import SellIcon from "@mui/icons-material/Sell";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import WalletIcon from "@mui/icons-material/Wallet";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import ApexChart from "@/components/Graph";
import PieChart from "@/components/PieChart";
import Schedule from "@/components/Schedule";
import { useSession } from "next-auth/react";
import Link from "next/link";

const Dashboard = () => {
  const { data: session } = useSession();

  if (!session) {
    return (
      <>
        <div>Please log in to access this page</div>
        <Link href="https://admin-auth-omega.vercel.app/">Go to login Page</Link>
      </>
    );
  }

  const cardData = [
    {
      head: "Total Revenues",
      data: "$2,129,430",
      icon: WalletIcon,
      background: "rgb(221,239,224)",
    },
    {
      head: "Total Transactions",
      data: "1,520",
      icon: SellOutlinedIcon,
      background: "rgb(245,226,220)",
    },
    {
      head: "Total Likes",
      data: "9,721",
      icon: ThumbUpAltOutlinedIcon,
      background: "rgb(239,219,219)",
    },
    {
      head: "Total Users",
      data: "892",
      icon: PeopleOutlineIcon,
      background: "rgb(223,224,238)",
    },
  ];

  return (
    <div className="main-dashboard">
      <div className="dash-board">
        <div className="head">{session.user.name.slice(0, 5)}</div>
        <div className="options">
          <div className="opt">
            <GridViewIcon />
            <div>Dashboard</div>
          </div>
          <div className="opt">
            <SellIcon />
            <div>Transaction</div>
          </div>
          <div className="opt">
            <CalendarMonthIcon />
            <div>Schedules</div>
          </div>
          <div className="opt">
            <AccountCircleIcon />
            <div>Users</div>
          </div>
          <div className="opt">
            <SettingsIcon />
            <div>Settings</div>
          </div>
        </div>
        <div className="help">
          <div>Help</div>
          <div>Contact Us</div>
        </div>
      </div>
      <Navbar />
      <div className="cards-container">
        {cardData.map((card, index) => {
          return (
            <div key={index} className="card">
              <Card {...card} />
            </div>
          );
        })}
      </div>
      <ApexChart />
      <div className="pie-container">
        <PieChart />
      </div>
      <div className="schedule-container">
        <Schedule />
      </div>
    </div>
  );
};

export default Dashboard;
