import { Card, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { GraphGEtRespose } from "../../model/graphGEtRespose";
import { Service } from "../../servics/servic";
import { BarChart } from "@mui/x-charts/BarChart";

function Showgraph_Page() {
  const [loading, setLoading] = useState(false);
  const [graph, setGraph] = useState<GraphGEtRespose[]>();

  const scoreData = graph?.map((item) => item?.score);
  const dateTimes = graph?.map((item) => item?.date);
  console.log("Score data: " + scoreData);

  // const dateTimes = graph?.map((item) => String(item?.date)) || [];
  // const dateTimes = voteScore?.voteChart?.map((item, index, array) => {
  //   let dateTime;
  //   if (item?.[0]?.date_time) {
  //     dateTime = new Date(item[0].date_time);
  //   } else {
  //     dateTime = new Date(); // วันที่ปัจจุบัน
  //   }

  useEffect(() => {
    autoLoad();
  }, []);

  const autoLoad = async () => {
    setLoading(true);
    try {
      const resGrahp: GraphGEtRespose[] = await services.getGraph(2);
      setGraph(resGrahp);
      console.log(resGrahp);
    } catch (error) {
      console.error("Failed to load movie:", error);
    } finally {
      setLoading(false);
    }
  };
  const services = new Service();
  const navigates = useNavigate();
  function navigateTo() {
    navigates("/admin");
  }
  return (
    <>
      {loading ? (
        <>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <CircularProgress />
          </div>
        </>
      ) : (
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
            height: "94vh",
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
              <Card>
              <div >
                <img
                  //src={user.profile}
                  style={{
                    width: "170px",
                    height: "170px", // Maintain aspect ratio
                    borderRadius: "50%", // Make it circular
                  }}
                />
              </div>
              </Card>
            </div>
            <div style={{ display: "flex" }}></div>
            <div>
              <Card
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 1.0)",
                  padding: "20px",
                  borderRadius: "30px",
                  marginLeft: "20px", // ระยะห่างด้านซ้ายของการ์ด
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  width: "700px",
                  height: "460px",
                }}
              >
                <BarChart
                  series={[{ data: scoreData }]}
                  height={500}
                  xAxis={[{ data: dateTimes, scaleType: "band" }]}
                />
              </Card>
              <div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      )}
    </>
  );
}

export default Showgraph_Page;
