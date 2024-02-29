import { Button, Card, TextField } from "@mui/material";
import { Link } from "react-router-dom";

function Login_page() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage:
          "url('https://i.pinimg.com/originals/49/cd/d8/49cdd838e8c6d7fe5e2dd55deead5567.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        height: "89.5vh",
        width: "100vw",
        padding: "auto",
      }}
    >
      <div>
        <Card
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            padding: "40px",
            borderRadius: "30px",
          }}
        >
          <form>
            <div>
              <img
                src="https://static-00.iconduck.com/assets.00/pokemon-icon-2048x738-o3doht5o.png"
                style={{
                  width: "200px", // ปรับขนาดภาพ
                  display: "block", // กำหนดให้อยู่กลาง
                  margin: "0 auto", // กำหนดให้อยู่กลาง
                }}
              />
              <h2 className="gradiant-bg" style={{ textAlign: "center" }}>
                เข้าสู่ระบบ
              </h2>
            </div>
            <div className="container">
              <TextField
                label="Email"
                type="email"
                required
                fullWidth
                margin="normal"
              />
              <TextField
                label="Password"
                type="password"
                required
                fullWidth
                margin="normal"
              />
              <Button
                component={Link}
                to="/choose"
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                style={{ marginTop: "20px" }}
              >
                login
              </Button>
            </div>
          </form>
          <br />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h5>
              หากคุณยังไม่มีบัญชี{" "}
              <a href="/regis">สมัครสมาชิกเลย</a>
            </h5>
          </div>
        </Card>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></div>
    </div>
  );
}

export default Login_page;
