import Util from "../src/util.js";
describe("State", () => {
  it("init state", async () => {
    let state = {};
    Util.init(state);
    console.log(state);
  });
});
