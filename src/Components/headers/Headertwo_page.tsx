import { AppBar, Toolbar, IconButton, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { GoSignOut } from "react-icons/go";
import { AiFillSignal } from "react-icons/ai";
import { AiFillSmile } from "react-icons/ai";

function Headers() {
  return (
    <AppBar position="sticky" sx={{ boxShadow: 15, backgroundColor: "yellow" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
        >
          <Link to="/choose">
            <img
              src="https://static-00.iconduck.com/assets.00/pokemon-icon-2048x738-o3doht5o.png"
              width={100}
              alt="Pokemon Icon"
            />
          </Link>
        </IconButton>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end", // จัดให้เรียงปุ่มทางขวา
            gap: 1, // ระยะห่างระหว่างปุ่ม
          }}
        >
          <Box>
            <Button
              className="prompt-light"
              color="inherit"
              component={Link}
              to="/info"
              sx={{
                p: "8px", // กำหนด padding ให้น้อยลง
                minWidth: "unset", // ยกเลิกความกว้างขั้นต่ำ
                width: "auto", // กำหนดความกว้างอัตโนมัติ
                height: "auto", // กำหนดความสูงอัตโนมัติ
              }}
            >
              <div>
                <AiFillSmile style={{ color: "black", fontSize: "20px" }} />{" "}
                {/* ปรับขนาดของ icon */}
              </div>
            </Button>
          </Box>
          <Box>
          <Button
              className="prompt-light"
              color="inherit"
              component={Link}
              to="/rangtoday"
              sx={{
                p: "8px", // กำหนด padding ให้น้อยลง
                minWidth: "unset", // ยกเลิกความกว้างขั้นต่ำ
                width: "auto", // กำหนดความกว้างอัตโนมัติ
                height: "auto", // กำหนดความสูงอัตโนมัติ
              }}
            >
              <div>
                <AiFillSignal style={{ color: "black", fontSize: "20px" }} />{" "}
                {/* ปรับขนาดของ icon */}
              </div>
            </Button>
          </Box>
          <Box>
          <Button
              className="prompt-light"
              color="inherit"
              component={Link}
              to="/"
              sx={{
                p: "8px", // กำหนด padding ให้น้อยลง
                minWidth: "unset", // ยกเลิกความกว้างขั้นต่ำ
                width: "auto", // กำหนดความกว้างอัตโนมัติ
                height: "auto", // กำหนดความสูงอัตโนมัติ
              }}
            >
              <div>
                <GoSignOut style={{ color: "black", fontSize: "20px" }} />{" "}
                {/* ปรับขนาดของ icon */}
              </div>
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Headers;
