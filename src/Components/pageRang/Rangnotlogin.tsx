import { Button, Card } from "@mui/material";
import { BiHome } from "react-icons/bi";
import { BsChatHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { RangGetRespose } from "../../model/rangGetRespose";
import {  IoCaretUpCircleSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import { Service } from "../../servics/servic";

function Rangnotlogin_page() {
  let date: string[] = [];
  const [Data, setdate] = useState<string[]>([]);
  const [Rank, setRank] = useState<RangGetRespose[]>();
  
  useEffect(() => {
    autoLoad();
  }, []);

  const autoLoad = async () => {
    try {
      const resRank = await services.getRangToday();
      const resRankYesterDay = await services.getPictureRankingYesterday();
      console.log("resRank : " + resRank);
      console.log(resRankYesterDay);
      const lengthRes = resRank.length;
      setRank(resRank);
      resRank.map((e, i = 1) => {
        const index = resRankYesterDay.findIndex((item) => item.id === e.id);
        if (index !== -1) {
          // ถ้าพบว่า picture_id มีค่าเท่ากับ e.id
          console.log("i: " + (i + 1) + " Index: " + (index + 1));
          const diff = i + 1 - (index + 1);
          console.log(
            "ToDay Index: " +
              (index + 1) +
              ", Difference: " +
              diff +
              " Name: " +
              e.name
          );
          const rank = calLevel(diff);
          console.log("Rank: " + rank);
          date.push(rank);
        } else {
          console.log(
            "Else " +
              (index + 1) +
              ", Difference: " +
              " Name: " +
              e.name
          );
          const rank = `+${lengthRes - i}`;
          date.push(rank);
        }
        i++;
        console.log(i);
      });
      setdate(date);
    } catch (error) {
      console.error("Failed to load movie:", error);
    } finally {
      // setLoading(false);
    }
  };
  function calLevel(rank: number) {
    if (rank < 0) {
      return `+${rank * -1}`;
    } else if (rank > 0) {
      return `-${rank}`;
    } else {
      return "ไม่เปลี่ยน";
    }
  }

  const services = new Service();
  const navigate = useNavigate();
  // const navigates = useNavigate();

  function navigateTo() {
    navigate("/");
  }
  // function navigateTograph() {
  //   navigates("/graph");
  // }
  function navigateToprograph(){
    navigate("/profilerank")
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
        </div>
        <div style={{ display: "flex" }}></div>
        <Card
          sx={{
            backgroundColor: "rgba(255, 255, 255, 1.0)",
            padding: "20px",
            borderRadius: "30px",
            marginLeft: "120px", // เพิ่มระยะห่างด้านขวาของการ์ด
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            width: "500px",
            height: "500px",
          }}
        >
          <div>
            <Button
              className="prompt-light"
              color="inherit"

            >
              <div>
                <BsChatHeartFill
                  style={{ color: "yellow", fontSize: "24px" }}
                />
              </div>
            </Button>
            {/* <Button
              className="prompt-light"
              color="inherit"

            >
              <div>
                <BsChatHeartFill style={{ color: "blue", fontSize: "24px" }} />
              </div>
            </Button> */}
            {/* <Button
              className="prompt-light"
              color="inherit"

            >
              <div>
                <BsChatHeartFill style={{ color: "red", fontSize: "24px" }} />
              </div>
            </Button> */}

            {/* <Button
              className="prompt-light"
              color="inherit"
            >
              <div>
                <BiHome style={{ color: "green", fontSize: "24px" }} />
              </div>
            </Button> */}
          </div>
          <div>
            <h3 className="prompt-light">Today's ranking</h3>
          </div>

          <div style={{ overflowX: "auto" }}>
            <Card
              sx={{
                backgroundColor: "rgba(255, 255, 0, 0.5)",
                padding: "40px",
                borderRadius: "30px",
                marginRight: "5px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                width: "390px",
                height: "auto",
              }}
            >
              {Rank?.map((e, i) => {
                if (i < 10) {
                  return (
                    <div style={{ display: "flex", marginTop: "50px" }} key={i}>
                      <Card
                        sx={{
                          backgroundColor: "white",
                          padding: "30px",
                          borderRadius: "20px",
                          marginRight: "5px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          textAlign: "center",
                          width: "330px",
                          height: "0.001px",
                          border: "1px solid red",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <h4
                            className="prompt-light"
                            style={{ marginRight: "10px" }}
                          >
                            {i + 1}
                          </h4>
                          &nbsp;&nbsp;
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <img
                              src={e.path}
                              style={{
                                width: "80px",
                                height: "50px",
                                borderRadius: "50px",
                              }}
                            />
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <h4
                              className="prompt-light"
                              style={{ marginRight: "10px" }}
                            >
                              {e.name}
                            </h4>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <h4
                              className="prompt-light"
                              style={{ marginRight: "10px" }}
                            >
                              {e.score + "  " + Data[i]}
                            </h4>
                          </div>
                        </div>
                      </Card>
                      <div
                        style={{
                          marginTop: "auto",
                          marginBottom: "auto",
                          marginLeft: "10px",
                        }}
                      >
                        <IoCaretUpCircleSharp
                          style={{ color: "green", fontSize: "2rem" }}
                        />
                        {/* {Data[i]} */}
                      </div>
                    </div>
                  );
                } else {
                  return null; // หยุดการวนลูป
                }
              })}
            </Card>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Rangnotlogin_page;
