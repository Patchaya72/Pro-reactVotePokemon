import { Card, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Editprofile_Page() {
  const navigate = useNavigate();

  function navigateTo() {
    navigate("/info");
  }

  function selectFile(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function () {
      const preview = document.getElementById("preview");
      preview.src = reader.result;
    };

    reader.readAsDataURL(file);
  }
  
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage:
          "url('https://i.pinimg.com/originals/a7/a5/e3/a7a5e3589be5662d93d4539284062c22.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        height: "91vh",
        width: "100vw",
        padding: "auto",
      }}
    >
      <div style={{ display: "flex", marginRight: "150px" }}>
        &nbsp; &nbsp;
        <div style={{ marginTop: "0px" }}>
          <button className="button containerbt" onClick={navigateTo}>
            Back
          </button>
        </div>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp;
        <div style={{ display: "flex" }}></div>
        <Card
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            padding: "10px", // ลด padding เพื่อทำให้การ์ดเล็กลง
            borderRadius: "20px", // ลดขนาดของ borderRadius เพื่อทำให้การ์ดเล็กลง
          }}
        >
          <form style={{ width: "100%" }}>
            {" "}
            {/* เพิ่ม width เพื่อให้การ์ดทำการย่อตามขนาดของหน้าจอ */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: "5px", // เพิ่มระยะห่างด้านล่างของรูปภาพ
              }}
            >
              <div
                style={{
                  borderRadius: "50%",
                  overflow: "hidden", // ลดขนาดของรูปภาพให้พอดีกับขนาดของการ์ด
                  width: "150px",
                  height: "150px", // รักษาอัตราส่วน
                }}
              >
            <div>
            <img width="300px" id="preview" />
            <TextField
              type="file"
              margin="normal"
              id="file"
              required
              fullWidth
              autoFocus
              onChange={selectFile}
            />
            </div>
              </div>
              <h2
                className="gradiant-bg prompt-light"
                style={{ textAlign: "center" }}
              >
                Edit Profile
              </h2>
            </div>
            <div className="container prompt-light">
              <TextField label="Name" type="email" required fullWidth />
              <TextField
                label="Password"
                type="password"
                required
                fullWidth
                margin="normal"
              />
              <TextField
                label="Confirm Password"
                type="password"
                required
                fullWidth
                margin="normal"
              />
              <div className="box">
                <a className="button" href="#popup1">
                  Edit
                </a>
              </div>
              <div id="popup1" className="overlay">
                <div className="popup">
                  <h2>คุณทำการแก้ไขสำเร็จแล้ว</h2>
                  <a className="close" href="#">
                    &times;
                  </a>
                  <div className="content">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img
                      src="https://thumb.ac-illust.com/25/252183b6cb8338c3f596ba058de7b6be_t.jpeg"
                      style={{
                        width: "50%", // ปรับขนาดรูปภาพให้ทั้งหมดแสดงผลในตัว div
                        height: "50%", // ปรับขนาดรูปภาพให้ทั้งหมดแสดงผลในตัว div
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
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

export default Editprofile_Page;
