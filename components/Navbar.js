import * as React from "react";
import { useSession } from "next-auth/react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { data: session } = useSession();
  const router = useRouter();

  const handleClick = (event) => {
    console.log("handleClick called");
    if (anchorEl && anchorEl.contains(event.target)) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };
  

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleLogout = () => {
    signOut();
    router.replace("/login");
  };

  return (
    <div className="main-nav">
      <div className="nav-head">Dashboard</div>
      <div className="nav-search">
        <input type="search" className="nav-input" placeholder="Search..." />
        <span className="search-icon">
          <SearchIcon />
        </span>
      </div>
      <div className="nav-noti">
        <NotificationsNoneOutlinedIcon />
      </div>
      <div className="nav-acc" onClick={(event) => handleClick(event)}>
        <AccountCircleIcon />
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Typography sx={{ p: 2 }} onClick={() => handleLogout()} style={{cursor:"pointer"}}>
            Log out
          </Typography>
        </Popover>
      </div>
    </div>
  );
};

export default Navbar;
