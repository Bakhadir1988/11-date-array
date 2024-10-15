const data = [
  "10-02-2022",
  "10.02.2022",
  "test",
  "15/12/2024",
  "02/12/2022",
  "02/13/2022",
  "hello",
  "world",
];

const filterDate = (date) => {
  return date
    .filter((el) => el.includes("/") || el.includes("-"))
    .map((el) => el.replace(/-/g, "/").split("/"))
    .filter((el) => {
      const [day, month] = el;
      if (day > 0 && day <= 31 && month > 0 && month <= 12) return true;
    });
};

const checkDate = (date) => {
  const breakDate = filterDate(date);

  const el = breakDate.map((date) => {
    return date.join(".");
  });

  return el;
};

console.log(checkDate(data));
