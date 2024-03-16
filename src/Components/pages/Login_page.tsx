import { Button, Card, CircularProgress, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useNavigate} from "react-router-dom";
import { UsersGetRespose } from "../../model/UsersGetRespose";
import { Service } from "../../servics/servic";

function Login_page() {
  const [users, setUsers] = useState<UsersGetRespose[]>([]);
  const navigate = useNavigate();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const services = new Service();

  let email = "";
  let password = "";

  useEffect(() => {
    autoLoad();
  }, []);

  const autoLoad = async () => {
    setLoading(true);
    try {
      const res = await services.getAllUser();
      setUsers(res);
      console.log(res);
    } catch (error) {
      console.error("Failed to load movie:", error);
    } finally {
      setLoading(false);
    }
  };
  
  function navigateTo() {

     navigate("/choose");
  }

  

  return (<>
    {loading ? (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <CircularProgress />
      </div>
    ) : (
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
        height: "94.5vh",
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
                ref={emailRef}
                onChange={(e) => {
                  email = e.target.value;
                  console.log("Value: " + e.target.value);
                  console.log("Input E: " + password);
                }}
              />
              <TextField
                label="Password"
                type="password"
                required
                fullWidth
                margin="normal"
                ref={passwordRef}
                onChange={(e) => {
                  password = e.target.value;
                  console.log("Value: " + e.target.value);
                  console.log("Input P: " + password);
                }}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                style={{ marginTop: "20px" }}
                onClick={() => {
                  getAll();
                  console.log(email);
                  console.log(password);
                  // btnClick(email,password);
                  users.map((e) => {
                    // console.log("In Map "+email);
                    try {
                      if (String(e.email) === String(email)) {
                        console.log("Email Chk");

                        if (String(e.password) === String(password)) {
                          console.log("Password Chk");
                          localStorage.clear();
                          localStorage.setItem("objUser",JSON.stringify(e))
                          navigateTo();
                          alert("Login Success!! Welcome to FaceMash");
                        }
                      }
                    } catch (error) {
                      console.log("Access Denied!!: ", error);
                    }
                  });
                }}
              >
                login
              </Button>
            </div>
          </form>
          <br />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h5>
              หากคุณยังไม่มีบัญชี <a href="/regis">สมัครสมาชิกเลย</a>
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
    
    )}
    
  </>);
  async function getAll() {
    console.log("get All Function");
    const res = await services.getAllUser();
    setUsers(res);
    console.log(res);
  }
  
}



export default Login_page;
