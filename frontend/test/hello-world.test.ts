import { expect, test } from "bun:test";

test("hello world", () => {
    expect("Hello, world!").toBe("Hello, world!");
    expect("Hello, world!").not.toBe("Hello, world?");
});
