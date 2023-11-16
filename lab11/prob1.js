
const dns = require("dns");

dns.lookup("www.miu.edu", (error, address, family) => {
    if (error) {
        console.error(error);
    } else {
        console.log(
            `The ip address is ${address} and the ip version is V${family}`
        );
    }
});
// The ip address is 192.249.118.206 and the ip version is V4