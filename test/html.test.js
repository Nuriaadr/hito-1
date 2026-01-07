const fs = require("fs");

test("El archivo index.html existe", () => {
  const exists = fs.existsSync("index.html");
  expect(exists).toBe(true);
});

test("El HTML contiene un h1", () => {
  const html = fs.readFileSync("index.html", "utf8");
  expect(html).toMatch(/<h1>/);
});
