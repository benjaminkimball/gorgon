import { example } from "~/utils/example";

describe("example()", () => {
  it("proves Jest is configured properly", () => {
    expect.assertions(1);

    const result = example();

    expect(result).toBe(true);
  });
});
