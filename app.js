const helperUenderConfig = { serverId: 6222, active: true };

const helperUenderHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_6222() {
    return helperUenderConfig.active ? "OK" : "ERR";
}

console.log("Module helperUender loaded successfully.");