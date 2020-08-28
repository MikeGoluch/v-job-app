const fs = require("fs");

const dataBase = [];
let locations = [
  "Amsterdam",
  "Ankara",
  "Austin",
  "Bengaluru",
  "Boston",
  "Manila",
  "Mountain View",
  "New York",
  "San Francisco",
  "Sydney",
  "Yokohama",
];
let jobs = [
  "Support Engineer",
  "Software Engineer",
  "Backend Developer",
  "Front-End Developer",
  "Senior Content Designer",
  "Marketing Designer",
  "UX Designer",
];
const generateRandomData = (id, locations, jobs) => {
  const [...location] = locations;
  const [...job] = jobs;
  const randomLocation = Math.floor(Math.random() * location.length);
  const randomJob = Math.floor(Math.random() * job.length);
  return {
    id: id + 1,
    location: location[randomLocation],
    job: job[randomJob],
  };
};

for (let i = 0; i < 1000; i++) {
  dataBase.push(generateRandomData(i, locations, jobs));
}

fs.writeFileSync("./src/utils/jobs-data.json", JSON.stringify(dataBase));
