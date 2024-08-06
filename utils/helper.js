function logDBConnectionDetails() {
    const DB_URL = process.env.DB_URL;
    console.log();
    if (DB_URL)
        console.log("Connecting to postgres via DB_URL: ", process.env.DB_URL);
    else {
        console.log("Connecting to postgres via env variables");
        console.log("DB_NAME", process.env.DB_NAME);
        console.log("DB_USER", process.env.DB_USER);
        console.log("STEALTH_PROP", process.env.DB_PASSWORD);
    }
    console.log();
}







module.exports = { logDBConnectionDetails};