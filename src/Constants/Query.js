export const getContributionQuery = `
query {
    user(login: "TanvirMahin24") {
      contributionsCollection(from: "2021-02-13T00:00:00.000+00:00", to: "2021-05-13T00:00:00.000+00:00") {
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
