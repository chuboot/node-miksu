const clientRosRest = require("./config/router.js");

clientRosRest
  .print("ip/dhcp-server/lease")
  .then((res) => {
    const restdata = res.data;
    restdata.forEach((resdt) => {
      // console.log(`IP:${resdt.address} MAC:${resdt["mac-address"]} DEVICE: ${resdt["host-name"]}`);
      console.log(restdata);
    });
  })
  .catch((err) => {
    console.log("error:", err);
  });
