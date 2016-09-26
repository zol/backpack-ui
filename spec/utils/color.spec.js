import {
  rgb,
  darken,
  lighten,
} from "../../src/utils/color";
import { expect } from "chai";

describe("rgb", () => {
  it("should convert a hex value to rgb", () => {
    expect(rgb("#406274")).to.equal("64,98,116");
  });
});

describe("darken", () => {
  it("should darken white by an amount of 10", () => {
    expect(darken("#fff", 10)).to.equal("#e6e6e6");
  });
});

describe("lighten", () => {
  it("should lighten red by an amount of 20", () => {
    expect(lighten("red", 20)).to.equal("#ff3333");
  });

  it("should not lighten white by any amount", () => {
    expect(lighten("#fff", 5)).to.equal("#ffffff");
  });

  it("should not lighten black by any amount", () => {
    expect(lighten("#000", 40)).to.equal("#000000");
  });
});
