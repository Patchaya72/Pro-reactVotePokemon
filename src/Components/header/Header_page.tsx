import { AppBar, Toolbar, IconButton, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  return (
    <AppBar
      position="sticky"
      sx={{ boxShadow: 15, backgroundColor: "#0000FF" }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
        >
          <Link to="/">
            <img
              src="https://static-00.iconduck.com/assets.00/pokemon-icon-2048x738-o3doht5o.png"
              width={100}
              alt="Pokemon Icon"
            />
          </Link>
        </IconButton>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Box>
            <Button
              className="prompt-light"
              color="inherit"
              component={Link}
              to="/regis"
            >
              สมัครสมาชิก
            </Button>
          </Box>
          <Box ml={1}>
            <Button
              className="prompt-light"
              color="inherit"
              component={Link}
              to="/login"
            >
              เข้าสู่ระบบ
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
