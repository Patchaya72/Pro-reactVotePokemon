import { Button, Card } from "@mui/material";
import { BiHome } from "react-icons/bi";
import { BsChatHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Rangseven_page() {
  const navigate = useNavigate();

  function navigateTo() {
    navigate("/vote");
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
            marginLeft: "130px", // เพิ่มระยะห่างด้านขวาของการ์ด
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
              component={Link}
              to="/rangtoday"
            >
              <div>
                <BsChatHeartFill style={{ color: "yellow", fontSize: "24px" }} />
              </div>
            </Button>
            <Button
              className="prompt-light"
              color="inherit"
              component={Link}
              to="/rangseven"
            >
              <div>
                <BsChatHeartFill style={{ color: "blue", fontSize: "24px" }} />
              </div>
            </Button>
            <Button
              className="prompt-light"
              color="inherit"
              component={Link}
              to="/rangthree"
            >
              <div>
                <BsChatHeartFill style={{ color: "red", fontSize: "24px" }} />
              </div>
            </Button>
            <Button
              className="prompt-light"
              color="inherit"
              component={Link}
              to="/vote"
            >
              <div>
                <BiHome style={{ color: "green", fontSize: "24px" }} />
              </div>
            </Button>
          </div>
          <div>
            <h3 className="prompt-light">Ranking for seven day 7 วัน </h3>
          </div>
          <div style={{ overflowX: "auto" }}>
            <Card
              sx={{
                backgroundColor: "rgba(0, 0, 255, 0.5)",
                padding: "40px",
                borderRadius: "30px",
                marginRight: "5px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                width: "370px",
                height: "490px",
              }}
            >
              <div>
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
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <h4
                      className="prompt-light"
                      style={{ marginRight: "10px" }}
                    >
                      1.
                    </h4>
                    &nbsp;&nbsp;
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img
                        src="https://i.pinimg.com/originals/5a/5c/9c/5a5c9c77c20884ad91a3a02c1707c70a.gif"
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
                        Umbreon
                      </h4>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <h4
                        className="prompt-light"
                        style={{ marginRight: "10px" }}
                      >
                        120 vote
                      </h4>
                    </div>
                  </div>
                </Card>
              </div>

              <div>
                <br />
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
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <h4
                      className="prompt-light"
                      style={{ marginRight: "10px" }}
                    >
                      1.
                    </h4>
                    &nbsp;&nbsp;
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img
                        src="https://i.pinimg.com/originals/5a/5c/9c/5a5c9c77c20884ad91a3a02c1707c70a.gif"
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
                        Umbreon
                      </h4>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <h4
                        className="prompt-light"
                        style={{ marginRight: "10px" }}
                      >
                        120 vote
                      </h4>
                    </div>
                  </div>
                </Card>
                <div>
                  <br />
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
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <h4
                        className="prompt-light"
                        style={{ marginRight: "10px" }}
                      >
                        1.
                      </h4>
                      &nbsp;&nbsp;
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <img
                          src="https://i.pinimg.com/originals/5a/5c/9c/5a5c9c77c20884ad91a3a02c1707c70a.gif"
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
                          Umbreon
                        </h4>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <h4
                          className="prompt-light"
                          style={{ marginRight: "10px" }}
                        >
                          120 vote
                        </h4>
                      </div>
                    </div>
                  </Card>
                  <div>
                    <br />
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
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <h4
                          className="prompt-light"
                          style={{ marginRight: "10px" }}
                        >
                          1.
                        </h4>
                        &nbsp;&nbsp;
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <img
                            src="https://i.pinimg.com/originals/5a/5c/9c/5a5c9c77c20884ad91a3a02c1707c70a.gif"
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
                            Umbreon
                          </h4>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <h4
                            className="prompt-light"
                            style={{ marginRight: "10px" }}
                          >
                            120 vote
                          </h4>
                        </div>
                      </div>
                    </Card>
                    <div>
                      <br />
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
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <h4
                            className="prompt-light"
                            style={{ marginRight: "10px" }}
                          >
                            1.
                          </h4>
                          &nbsp;&nbsp;
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <img
                              src="https://i.pinimg.com/originals/5a/5c/9c/5a5c9c77c20884ad91a3a02c1707c70a.gif"
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
                              Umbreon
                            </h4>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <h4
                              className="prompt-light"
                              style={{ marginRight: "10px" }}
                            >
                              120 vote
                            </h4>
                          </div>
                        </div>
                      </Card>
                      <br />
                      <div>
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
                          }}
                        >
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <h4
                              className="prompt-light"
                              style={{ marginRight: "10px" }}
                            >
                              1.
                            </h4>
                            &nbsp;&nbsp;
                            <div
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <img
                                src="https://i.pinimg.com/originals/5a/5c/9c/5a5c9c77c20884ad91a3a02c1707c70a.gif"
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
                                Umbreon
                              </h4>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <h4
                                className="prompt-light"
                                style={{ marginRight: "10px" }}
                              >
                                120 vote
                              </h4>
                            </div>
                          </div>
                        </Card>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Rangseven_page;
