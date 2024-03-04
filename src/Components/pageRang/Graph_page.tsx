import { Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { LineChart } from "@mui/x-charts/LineChart";

function Graph_Page() {
  const navigates = useNavigate();
  function navigateTo() {
    navigates("/rangtoday");
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
        height: "90vh",
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
        <div style={{ display: "flex" }}>
          
        </div>
        <Card
          sx={{
            backgroundColor: "rgba(255, 255, 255, 1.0)",
            padding: "20px",
            borderRadius: "30px",
            marginLeft: "600px", // เพิ่มระยะห่างด้านขวาของการ์ด
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            width: "700px",
            height: "460px",
          }}
        >
          <div className="prompt-light">
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12],  label: "ผลการจัดอันดับ 3 วัน และ 7 วัน" }]} //กำหนดค่าแกน
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5, 9],
              },
            ]}
            width={600}
            height={380}
          />
        </div>
        </Card>
    </div>
    </div>
  );
}

export default Graph_Page;
