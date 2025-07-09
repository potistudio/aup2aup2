import fs from "fs";

const MOCK_FILE = "./test/mock/mock.aup";

console.log("Hello via Bun! " + fs.readFileSync(MOCK_FILE, "hex"));
