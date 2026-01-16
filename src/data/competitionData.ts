// Shared competition data for Results Section and Results Page

export const recordsData = [
  {
    season: "Season 2025-2026",
    categories: [
      {
        name: "RSA (Open)",
        score: "505.5",
        rankings: [{ name: "Swim Star Aquatics Rtb", place: "1st" }]
      },
      {
        name: "Club (15 - 18)",
        score: "505.5",
        rankings: [{ name: "Swim Star Aquatics Rtb", place: "1st" }]
      },
      {
        name: "Club (Open)",
        score: "505.5",
        rankings: [{ name: "Swim Star Aquatics Rtb", place: "1st" }]
      }
    ]
  },
  {
    season: "Season 2024-2025",
    categories: [
      {
        name: "RSA (Open)",
        score: "513.6",
        rankings: [{ name: "Swim Star Aquatics Rtb", place: "1st" }]
      },
      {
        name: "Club (Open)",
        score: "500.4",
        rankings: [{ name: "Swim Star Aquatics Rtb", place: "1st" }]
      },
      {
        name: "Club (15 - 18)",
        score: "500.4",
        rankings: [{ name: "Swim Star Aquatics Rtb", place: "1st" }]
      },
      {
        name: "High School (Open)",
        score: "487.3",
        rankings: [{ name: "Northwest Schools", place: "7th" }]
      }
    ]
  },
  {
    season: "Season 2023-2024",
    categories: [
      {
        name: "RSA (Open)",
        score: "446",
        rankings: [{ name: "Swim Star Aquatics Rtb", place: "1st" }]
      },
      {
        name: "Club (Open)",
        score: "446",
        rankings: [
          { name: "Swim Star Aquatics Rtb", place: "1st" },
          { name: "North West University Swim Club", place: "19th" },
          { name: "North West Swimming", place: "19th" }
        ]
      },
      {
        name: "Club (15 - 18)",
        score: "419.1",
        rankings: [{ name: "North West University Swim Club", place: "13th" }]
      },
      {
        name: "Club (13 - 14)",
        score: "446",
        rankings: [
          { name: "Swim Star Aquatics Rtb", place: "1st" },
          { name: "North West Swimming", place: "5th" }
        ]
      },
      {
        name: "High School (Open)",
        score: "433",
        rankings: [{ name: "Fields College", place: "1st" }]
      }
    ]
  },
  {
    season: "Season 2021-2022",
    categories: [
      {
        name: "RSA (Open)",
        score: "350.30",
        rankings: [{ name: "Swim Star Aquatics Rtb", place: "1st" }]
      },
      {
        name: "Club (Open)",
        score: "350.30",
        rankings: [
          { name: "Swim Star Aquatics Rtb", place: "1st" },
          { name: "North West University Swim Club", place: "8th" }
        ]
      },
      {
        name: "Club (13 - 14)",
        score: "350.30",
        rankings: [
          { name: "Swim Star Aquatics Rtb", place: "1st" },
          { name: "North West University Swim Club", place: "8th" }
        ]
      }
    ]
  }
];

// All competitions data (full history 2021-2026)
export const allCompetitions = [
  {
    id: "nws-2025",
    name: "NWS Championships",
    status: "Completed",
    date: "Dec 6-9, 2025",
    location: "Potchefstroom, NW, RSA",
    year: "2025",
    results: [
      { event: "50 Free Prelims", time: "26.40", imp: null, place: "2nd" },
      { event: "50 Free Finals", time: "26.26", imp: null, place: "2nd" },
      { event: "100 Free Prelims", time: "58.55", imp: null, place: "3rd", pb: true },
      { event: "100 Free Finals", time: "59.26", imp: null, place: "4th" },
      { event: "200 Free Prelims", time: "2:14.39", imp: null, place: "5th" },
      { event: "200 Free Finals", time: "2:18.57", imp: null, place: "7th" },
      { event: "400 Free Timed Finals", time: "4:58.01", imp: null, place: "6th", pb: true },
      { event: "50 Back Prelims", time: "30.08", imp: null, place: "1st", pb: true },
      { event: "50 Back Finals", time: "30.85", imp: null, place: "2nd" },
      { event: "100 Back Prelims", time: "1:07.60", imp: null, place: "3rd" },
      { event: "100 Back Finals", time: "1:08.00", imp: null, place: "3rd" },
      { event: "200 Back Prelims", time: "2:35.79", imp: null, place: "3rd" },
      { event: "200 Back Finals", time: "2:36.36", imp: null, place: "3rd" },
      { event: "50 Breast Prelims", time: "34.17", imp: null, place: "3rd", pb: true },
      { event: "50 Breast Finals", time: "35.87", imp: null, place: "5th" },
      { event: "100 Breast Timed Finals", time: "1:22.28", imp: null, place: "7th" },
      { event: "200 Breast Prelims", time: "3:09.24", imp: null, place: "3rd", pb: true },
      { event: "50 Fly Timed Finals", time: "27.84", imp: null, place: "2nd" },
      { event: "100 Fly Prelims", time: "1:04.86", imp: null, place: "3rd" },
      { event: "100 Fly Finals", time: "1:05.56", imp: null, place: "3rd" },
      { event: "200 IM Timed Finals", time: "2:34.40", imp: null, place: "4th" },
      { event: "400 IM Timed Finals", time: "5:36.16", imp: null, place: "1st" },
    ]
  },
  {
    id: "nws-age-group-2",
    name: "NWS Age Group 2",
    status: "Completed",
    date: "Oct 19, 2025",
    location: "Phokeng, NW, RSA",
    year: "2025",
    results: [
      { event: "100 Free Timed Finals", time: "58.69", imp: "+0.87", place: "2nd" },
      { event: "50 Back Timed Finals", time: "29.92", imp: "+0.03", place: "1st" },
      { event: "50 Fly Timed Finals", time: "27.49", imp: "-0.03", place: "1st", pb: true },
    ]
  },
  {
    id: "nws-age-group-1-2025",
    name: "NWS Age Group 1 2025",
    status: "Completed",
    date: "Oct 18, 2025",
    location: "Phokeng, NW, RSA",
    year: "2025",
    results: [
      { event: "50 Free Timed Finals", time: "26.24", imp: "+0.39", place: "1st" },
      { event: "50 Breast Timed Finals", time: "35.05", imp: "+1.92", place: "2nd" },
      { event: "100 Breast Timed Finals", time: "1:17.03", imp: "+2.32", place: "2nd" },
      { event: "100 Fly Timed Finals", time: "1:03.05", imp: "+1.60", place: "1st" },
    ]
  },
  {
    id: "nw-short-course",
    name: "NW Short Course Championships",
    status: "Completed",
    date: "Oct 4-6, 2025",
    location: "Phokeng, NW, RSA",
    year: "2025",
    results: [
      { event: "50 Free Prelims", time: "25.85", imp: null, place: "2nd", pb: true },
      { event: "50 Free Finals", time: "26.01", imp: null, place: "2nd", pb: true },
      { event: "100 Free Prelims", time: "57.82", imp: null, place: "3rd", pb: true },
      { event: "100 Free Finals", time: "58.19", imp: null, place: "3rd", pb: true },
      { event: "200 Free Timed Finals", time: "2:13.53", imp: null, place: "3rd" },
      { event: "50 Back Prelims", time: "29.89", imp: null, place: "2nd", pb: true },
      { event: "50 Back Finals", time: "30.44", imp: null, place: "3rd", pb: true },
      { event: "100 Back Prelims", time: "1:05.10", imp: null, place: "2nd", pb: true },
      { event: "100 Back Finals", time: "1:06.93", imp: null, place: "3rd", pb: true },
      { event: "200 Back Timed Finals", time: "2:33.14", imp: null, place: "3rd" },
      { event: "50 Breast Prelims", time: "33.13", imp: null, place: "1st", pb: true },
      { event: "50 Breast Finals", time: "33.29", imp: null, place: "1st", pb: true },
      { event: "100 Breast Prelims", time: "1:14.71", imp: null, place: "2nd", pb: true },
      { event: "100 Breast Finals", time: "1:16.57", imp: null, place: "3rd", pb: true },
      { event: "50 Fly Prelims", time: "27.75", imp: null, place: "1st", pb: true },
      { event: "50 Fly Finals", time: "27.52", imp: null, place: "1st", pb: true },
      { event: "100 Fly Prelims", time: "1:01.45", imp: null, place: "1st", pb: true },
      { event: "100 Fly Finals", time: "1:03.04", imp: null, place: "3rd", pb: true },
      { event: "100 IM Prelims", time: "1:06.45", imp: null, place: "1st", pb: true },
      { event: "100 IM Finals", time: "1:04.44", imp: null, place: "3rd", pb: true },
      { event: "200 IM Timed Finals", time: "2:29.48", imp: null, place: "3rd", pb: true },
    ]
  },
  {
    id: "sa-schools-2025",
    name: "SA Schools Championship",
    status: "Completed",
    date: "Apr 5-7, 2025",
    location: "Bloemfontein, FS, RSA",
    year: "2025",
    results: [
      { event: "50 Back Prelims", time: "30.60", imp: "+0.26", place: "9th" },
      { event: "50 Back Finals", time: "30.58", imp: "+0.24", place: "8th" },
      { event: "100 Back Prelims", time: "1:06.59", imp: "+0.05", place: "5th" },
      { event: "100 Back Finals", time: "1:08.36", imp: "+1.82", place: "9th" },
      { event: "50 Fly Prelims", time: "27.73", imp: "-0.46", place: "3rd", pb: true },
      { event: "50 Fly Finals", time: "27.58", imp: "-0.61", place: "4th", pb: true },
      { event: "100 Fly Prelims", time: "1:05.50", imp: "-0.01", place: "6th", pb: true },
      { event: "100 Fly Finals", time: "1:04.69", imp: "-0.82", place: "5th", pb: true },
    ]
  },
  {
    id: "sa-level-3-regional",
    name: "SA Level 3 Regional Age Group",
    status: "Completed",
    date: "Mar 20-23, 2025",
    location: "NTS, GP, RSA",
    year: "2025",
    results: [
      { event: "50 Free Prelims", time: "26.23", imp: "-1.05", place: "2nd", pb: true },
      { event: "50 Free Finals", time: "26.09", imp: "-1.19", place: "3rd", pb: true },
      { event: "100 Free Prelims", time: "58.97", imp: "-0.39", place: "8th", pb: true },
      { event: "100 Free Finals", time: "59.16", imp: "-0.20", place: "8th", pb: true },
      { event: "200 Free Prelims", time: "2:16.09", imp: "+0.73", place: "9th" },
      { event: "200 Free Finals", time: "2:14.36", imp: "-1.00", place: "7th", pb: true },
      { event: "50 Back Prelims", time: "30.34", imp: "-0.53", place: "2nd", pb: true },
      { event: "50 Back Finals", time: "30.86", imp: "-0.01", place: "2nd", pb: true },
      { event: "100 Back Prelims", time: "1:06.87", imp: "-1.25", place: "2nd", pb: true },
      { event: "100 Back Finals", time: "1:06.54", imp: "-1.58", place: "1st", pb: true },
      { event: "200 Back Prelims", time: "2:37.51", imp: "+5.07", place: "8th" },
      { event: "50 Breast Prelims", time: "34.79", imp: "-0.30", place: "9th", pb: true },
      { event: "50 Breast Finals", time: "34.61", imp: "-0.48", place: "9th", pb: true },
      { event: "50 Fly Prelims", time: "28.19", imp: "-0.42", place: "4th", pb: true },
      { event: "50 Fly Finals", time: "28.40", imp: "-0.21", place: "4th", pb: true },
      { event: "100 Fly Prelims", time: "1:05.73", imp: "+0.22", place: "5th" },
      { event: "100 Fly Finals", time: "1:06.31", imp: "+0.80", place: "4th" },
    ]
  },
  {
    id: "cga-summer-gala",
    name: "CGA Summer Gala #4 Level",
    status: "Completed",
    date: "Jan 25, 2025",
    location: "RSA",
    year: "2025",
    results: [
      { event: "200 Free Timed Finals", time: "2:16.66", imp: "+1.30", place: "2nd" },
      { event: "100 Breast Timed Finals", time: "1:19.91", imp: "-2.42", place: "5th", pb: true },
      { event: "50 Fly Timed Finals", time: "28.75", imp: "+0.14", place: "1st" },
      { event: "100 Fly Timed Finals", time: "1:05.51", imp: "-1.83", place: "1st", pb: true },
    ]
  },
  {
    id: "nws-championships-2024",
    name: "NWS Championships",
    status: "Completed",
    date: "Dec 7-10, 2024",
    location: "Potchefstroom, NW, RSA",
    year: "2024",
    results: [
      { event: "50 Free Prelims", time: "27.28", imp: "-0.18", place: "2nd" },
      { event: "50 Free Finals", time: "27.38", imp: "-0.08", place: "2nd" },
      { event: "100 Free Prelims", time: "1:00.71", imp: "+0.48", place: "2nd" },
      { event: "100 Free Finals", time: "59.36", imp: "-0.87", place: "2nd" },
      { event: "200 Free Prelims", time: "2:16.52", imp: null, place: "3rd" },
      { event: "200 Free Finals", time: "2:15.36", imp: null, place: "3rd" },
      { event: "400 Free Timed Finals", time: "5:10.89", imp: null, place: "14th" },
      { event: "50 Back Timed Finals", time: "30.87", imp: "-0.95", place: "1st" },
      { event: "100 Back Prelims", time: "1:08.71", imp: "-2.02", place: "1st" },
      { event: "100 Back Finals", time: "1:08.12", imp: "-2.61", place: "1st" },
      { event: "200 Back Prelims", time: "2:35.98", imp: null, place: "1st" },
      { event: "200 Back Finals", time: "2:32.44", imp: null, place: "1st" },
      { event: "50 Breast Prelims", time: "35.09", imp: "-3.34", place: "2nd" },
      { event: "50 Breast Finals", time: "35.71", imp: "-2.72", place: "2nd" },
      { event: "100 Breast Prelims", time: "1:22.47", imp: "-4.86", place: "3rd" },
      { event: "100 Breast Finals", time: "1:22.33", imp: "-5.00", place: "4th" },
      { event: "50 Fly Prelims", time: "28.61", imp: "-0.42", place: "2nd" },
      { event: "50 Fly Finals", time: "28.74", imp: "-0.29", place: "2nd" },
      { event: "100 Fly Timed Finals", time: "1:07.34", imp: "-1.19", place: "1st" },
      { event: "200 IM Prelims", time: "2:37.30", imp: null, place: "3rd" },
      { event: "200 IM Finals", time: "2:31.86", imp: null, place: "2nd" },
    ]
  },
  {
    id: "nws-age-group-3-4",
    name: "NWS Age Group 3 + 4",
    status: "Completed",
    date: "Nov 23-24, 2024",
    location: "Potchefstroom, NW, RSA",
    year: "2024",
    results: [
      { event: "50 Free Timed Finals", time: "27.46", imp: null, place: "1st" },
      { event: "100 Free Timed Finals", time: "1:00.23", imp: null, place: "2nd" },
      { event: "50 Back Timed Finals", time: "31.82", imp: null, place: "2nd" },
      { event: "100 Back Timed Finals", time: "1:10.73", imp: null, place: "2nd" },
      { event: "50 Breast Timed Finals", time: "38.43", imp: null, place: "3rd" },
      { event: "100 Breast Timed Finals", time: "1:27.33", imp: null, place: "2nd" },
      { event: "50 Fly Timed Finals", time: "29.03", imp: null, place: "2nd" },
      { event: "100 Fly Timed Finals", time: "1:08.53", imp: null, place: "1st" },
    ]
  },
  {
    id: "nw-short-course-2024",
    name: "North West Short Course Championship",
    status: "Completed",
    date: "Oct 4, 2024",
    location: "Hartebeespoort, NW, RSA",
    year: "2024",
    results: [
      { event: "50 Free Prelims", time: "26.55", imp: "-0.98", place: "4th" },
      { event: "50 Free Finals", time: "27.13", imp: "-0.40", place: "5th" },
      { event: "100 Free Prelims", time: "1:00.60", imp: "-1.00", place: "5th" },
      { event: "100 Free Finals", time: "1:00.50", imp: "-1.10", place: "5th" },
      { event: "100 Back Prelims", time: "1:08.03", imp: null, place: "5th" },
      { event: "200 Back Timed Finals", time: "2:32.64", imp: null, place: "5th" },
      { event: "50 Breast Prelims", time: "35.51", imp: "-1.15", place: "6th" },
      { event: "50 Breast Finals", time: "35.77", imp: "-0.89", place: "6th" },
      { event: "100 Breast Prelims", time: "1:22.09", imp: null, place: "8th" },
      { event: "50 Fly Prelims", time: "28.57", imp: "+0.00", place: "4th" },
      { event: "50 Fly Finals", time: "28.81", imp: "+0.24", place: "4th" },
      { event: "100 Fly Prelims", time: "1:05.86", imp: null, place: "3rd" },
      { event: "100 Fly Finals", time: "1:06.82", imp: null, place: "3rd" },
      { event: "100 IM Prelims", time: "1:08.04", imp: "-2.52", place: "3rd" },
      { event: "100 IM Finals", time: "1:08.98", imp: "-1.58", place: "4th" },
    ]
  },
  {
    id: "nws-spring-splash-2024",
    name: "NWS Spring Splash Sprint",
    status: "Completed",
    date: "Sep 7, 2024",
    location: "Potchefstroom, NW, RSA",
    year: "2024",
    results: [
      { event: "50 Free Timed Finals", time: "27.53", imp: null, place: "6th" },
      { event: "100 Free Timed Finals", time: "1:01.60", imp: null, place: "6th" },
      { event: "50 Back Timed Finals", time: "31.51", imp: null, place: "4th" },
      { event: "50 Breast Timed Finals", time: "36.66", imp: null, place: "6th" },
      { event: "50 Fly Timed Finals", time: "28.57", imp: null, place: "3rd" },
      { event: "100 IM Timed Finals", time: "1:10.56", imp: null, place: "3rd" },
      { event: "200 IM Timed Finals", time: "2:34.44", imp: null, place: "5th" },
    ]
  },
  {
    id: "sa-schools-2024",
    name: "SA Schools Championship",
    status: "Completed",
    date: "Apr 19-21, 2024",
    location: "Gqeberha, EC, RSA",
    year: "2024",
    results: [
      { event: "50 Back Prelims", time: "32.05", imp: "-0.01", place: "12th" },
      { event: "100 Back Prelims", time: "1:08.89", imp: "-1.39", place: "11th" },
      { event: "50 Fly Prelims", time: "29.50", imp: "+0.46", place: "12th" },
      { event: "100 Fly Prelims", time: "1:07.60", imp: "+1.60", place: "12th" },
    ]
  },
  {
    id: "nw-school-champs-2024",
    name: "NW School Championships",
    status: "Completed",
    date: "Feb 23-24, 2024",
    location: "Potchefstroom, NW, RSA",
    year: "2024",
    results: [
      { event: "100 Free Timed Finals", time: "1:01.12", imp: "+0.06", place: "6th" },
      { event: "200 Free Timed Finals", time: "2:18.39", imp: null, place: "4th" },
      { event: "50 Back Timed Finals", time: "32.06", imp: "-2.93", place: "5th" },
      { event: "100 Back Timed Finals", time: "1:11.09", imp: "+0.81", place: "5th" },
      { event: "200 Back Timed Finals", time: "2:44.19", imp: "+4.13", place: "3rd" },
      { event: "50 Fly Timed Finals", time: "29.46", imp: "+0.42", place: "4th" },
      { event: "100 Fly Timed Finals", time: "1:08.87", imp: "+2.87", place: "3rd" },
      { event: "200 IM Timed Finals", time: "2:37.64", imp: "+0.01", place: "5th" },
    ]
  },
  {
    id: "inter-provincial-2024",
    name: "4 + 1 Inter Provincial Gala",
    status: "Completed",
    date: "Jan 27-28, 2024",
    location: "Bloemfontein, FS, RSA",
    year: "2024",
    results: [
      { event: "100 Fly Timed Finals", time: "1:08.13", imp: "+2.13", place: "4th" },
    ]
  },
  {
    id: "nws-long-course-2023",
    name: "NWS Long Course Championships",
    status: "Completed",
    date: "Dec 6-10, 2023",
    location: "Potchefstroom, NW, RSA",
    year: "2023",
    results: [
      { event: "50 Free Prelims", time: "28.19", imp: null, place: "2nd" },
      { event: "50 Free Finals", time: "27.81", imp: null, place: "2nd" },
      { event: "100 Free Timed Finals", time: "1:01.06", imp: null, place: "1st" },
      { event: "400 Free Timed Finals", time: "5:02.62", imp: null, place: "7th" },
      { event: "50 Back Timed Finals", time: "34.99", imp: null, place: "3rd" },
      { event: "100 Back Prelims", time: "1:11.55", imp: null, place: "2nd" },
      { event: "100 Back Finals", time: "1:10.28", imp: null, place: "1st" },
      { event: "200 Back Prelims", time: "2:40.06", imp: null, place: "1st" },
      { event: "200 Back Finals", time: "2:42.88", imp: null, place: "1st" },
      { event: "50 Breast Prelims", time: "39.32", imp: null, place: "4th" },
      { event: "50 Breast Finals", time: "40.44", imp: null, place: "5th" },
      { event: "100 Breast Prelims", time: "1:28.18", imp: null, place: "3rd" },
      { event: "100 Breast Finals", time: "1:26.66", imp: null, place: "3rd" },
      { event: "200 Breast Prelims", time: "3:19.54", imp: null, place: "4th" },
      { event: "200 Breast Finals", time: "3:19.54", imp: null, place: "3rd" },
      { event: "50 Fly Prelims", time: "29.23", imp: null, place: "1st" },
      { event: "50 Fly Finals", time: "29.04", imp: null, place: "1st" },
      { event: "100 Fly Timed Finals", time: "1:06.00", imp: null, place: "1st" },
      { event: "200 IM Prelims", time: "2:41.16", imp: null, place: "2nd" },
    ]
  },
  {
    id: "provincial-gala-2023",
    name: "4+1 Provincial Gala",
    status: "Completed",
    date: "Jan 28, 2023",
    location: "Potchefstroom, NW, RSA",
    year: "2023",
    results: [
      { event: "100 Fly Timed Finals", time: "1:12.35", imp: null, place: "4th" },
    ]
  },
  {
    id: "sa-regional-aquatic-2022",
    name: "SA Regional Aquatic Champs 2022",
    status: "Completed",
    date: "Mar 29-Apr 2, 2022",
    location: "Pretoria, AG, RSA",
    year: "2022",
    results: [
      { event: "100 Free Prelims", time: "1:07.13", imp: null, place: "13th" },
      { event: "200 Free Prelims", time: "2:27.03", imp: "-4.94", place: "75th" },
      { event: "400 Free Timed Finals", time: "5:20.48", imp: null, place: "8th" },
      { event: "50 Back Prelims", time: "35.02", imp: "-44.94", place: "6th" },
      { event: "50 Back Finals", time: "34.94", imp: "-45.02", place: "8th" },
      { event: "100 Back Prelims", time: "1:17.95", imp: "-0.25", place: "16th" },
      { event: "200 Back Prelims", time: "2:47.62", imp: "-3.32", place: "12th" },
      { event: "50 Fly Prelims", time: "31.11", imp: null, place: "2nd" },
      { event: "50 Fly Finals", time: "31.04", imp: null, place: "4th" },
      { event: "100 Fly Prelims", time: "1:12.69", imp: "-0.84", place: "4th" },
      { event: "100 Fly Finals", time: "1:12.24", imp: "-1.29", place: "4th" },
      { event: "200 IM Prelims", time: "2:48.42", imp: "+1.87", place: "8th" },
      { event: "200 IM Finals", time: "2:46.43", imp: "-0.12", place: "6th" },
    ]
  },
  {
    id: "sa-schools-2022",
    name: "SA Schools Swimming Championships",
    status: "Completed",
    date: "Mar 26-28, 2022",
    location: "Tshwane, RSA",
    year: "2022",
    results: [
      { event: "200 L IM", time: "2:46.55", imp: null, place: "5th" },
      { event: "100 L Fly", time: "1:13.53", imp: null, place: "6th" },
      { event: "200 L Free", time: "2:31.97", imp: null, place: "10th" },
      { event: "100 Back Prelims", time: "1:18.20", imp: null, place: "6th" },
      { event: "100 Back Finals", time: "1:18.37", imp: null, place: "6th" },
      { event: "200 Back Prelims", time: "2:53.67", imp: null, place: "6th" },
      { event: "200 Back Finals", time: "2:50.94", imp: null, place: "7th" },
      { event: "100 Fly Prelims", time: "1:13.82", imp: null, place: "5th" },
      { event: "100 Fly Finals", time: "1:13.53", imp: null, place: "6th" },
      { event: "200 IM Prelims", time: "2:47.30", imp: null, place: "4th" },
      { event: "200 IM Finals", time: "2:46.55", imp: null, place: "5th" },
    ]
  },
];

// FINA points progression based on personal records data
export const finaProgressionData = [
  { year: "2022", points: 350 },
  { year: "2023", points: 446 },
  { year: "2024", points: 487 },
  { year: "2025", points: 513 },
  { year: "2026", points: 505 },
];

export const teams = [
  { name: "Swim Star Aquatics Rtb", location: "Rustenburg, NW" },
  { name: "Northwest Schools", location: "NW, RSA" },
  { name: "North West University Swim Club", location: "Noordbrug, NW" },
  { name: "Fields College", location: "NW, RSA" },
  { name: "North West Swimming", location: "NW, RSA" },
];

export const upcomingEvents = [
  { name: "Open Water Championships", date: "Jan 24, 2026", location: "Pretoria, GP" },
  { name: "SA Youth (17-25yrs) National Championships", date: "Mar 18-20, 2026", location: "Gqeberha, EC" },
  { name: "Rossini Swim Cup", date: "Jun 21-22, 2026", location: "Pesaro, Italy" },
];

// Helper function to calculate stats from all competitions
export const calculateCareerStats = () => {
  let first = 0, second = 0, third = 0, pbs = 0;
  let totalEvents = 0;
  let finalsAppearances = 0;
  let topThreeFinishes = 0;
  
  const strokeScores: Record<string, number[]> = {
    Free: [],
    Back: [],
    Breast: [],
    Fly: [],
    IM: []
  };
  
  let sprintCount = 0;
  let distanceCount = 0;
  
  allCompetitions.forEach(comp => {
    comp.results.forEach(r => {
      // Skip relay splits, extracted times, DQ, DNS, NT
      if (r.event.includes('Extracted') || r.event.includes('-R') || 
          r.time === 'DQ' || r.time === 'DNS' || r.time === 'NT' || r.time === 'NS' || r.time === 'DNF') {
        return;
      }
      
      totalEvents++;
      
      if (r.event.includes('Finals') && !r.event.includes('Timed')) {
        finalsAppearances++;
      }
      
      const placeNum = parseInt(r.place) || 99;
      if (placeNum <= 3) topThreeFinishes++;
      
      if (r.place === "1st") first++;
      if (r.place === "2nd") second++;
      if (r.place === "3rd") third++;
      if (r.pb) pbs++;
      
      // Calculate specialty scores
      const score = Math.max(0, 100 - (placeNum - 1) * 12);
      
      if (r.event.includes("Free") && !r.event.includes("FR-R")) strokeScores.Free.push(score);
      else if (r.event.includes("Back") && !r.event.includes("MED-R")) strokeScores.Back.push(score);
      else if (r.event.includes("Breast")) strokeScores.Breast.push(score);
      else if (r.event.includes("Fly") && !r.event.includes("MED-R")) strokeScores.Fly.push(score);
      else if (r.event.includes("IM")) strokeScores.IM.push(score);
      
      // Sprint vs distance
      const distanceMatch = r.event.match(/(\d+)/);
      const distance = distanceMatch ? parseInt(distanceMatch[1]) : 50;
      if (distance <= 100) {
        sprintCount++;
      } else {
        distanceCount++;
      }
    });
  });
  
  const totalSwims = sprintCount + distanceCount;
  const sprintPercent = totalSwims > 0 ? Math.round((sprintCount / totalSwims) * 100) : 50;
  
  const specialties = Object.entries(strokeScores).map(([name, scores]) => ({
    name,
    value: scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0
  })).filter(s => s.value > 0);
  
  // Get unique gold events
  const goldEvents: string[] = [];
  allCompetitions.forEach(comp => {
    comp.results.forEach(r => {
      if (r.place === "1st" && !r.event.includes('Extracted') && !r.event.includes('-R')) {
        const eventName = r.event.replace(/ (Prelims|Finals|Timed Finals)/, '');
        if (!goldEvents.includes(eventName)) {
          goldEvents.push(eventName);
        }
      }
    });
  });
  
  return {
    stats: { first, second, third, pbs },
    rankings: {
      totalEvents,
      finalsAppearances,
      topThreeFinishes,
      winRate: totalEvents > 0 ? Math.round((topThreeFinishes / totalEvents) * 100) : 0,
      bestEvents: goldEvents.slice(0, 3)
    },
    specialties,
    sprintPercent,
    competitionCount: allCompetitions.length
  };
};
