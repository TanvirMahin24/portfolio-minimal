export const getContributionQuery = () => {
  let date = new Date();
  let startDate = new Date(new Date().setDate(new Date().getDate() - 90));
  //console.log(startDate);
  return `
query {
    user(login: "TanvirMahin24") {
      contributionsCollection(from: "${startDate.toISOString()}", to: "${date.toISOString()}") {
        contributionCalendar {
          weeks {
            contributionDays {
              contributionCount
              date
            }
          }
        }
      }
    }
}
  
`;
};
