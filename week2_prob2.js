try {
  const file = "textbook.json";
  const data = textbook;
  fs.writeFileSync(file, data);
} catch (err) {
  console.log(err);
}
