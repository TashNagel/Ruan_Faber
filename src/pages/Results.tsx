import { motion } from "framer-motion";
import { Search, ChevronDown } from "lucide-react";
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

// Records data derived from personal records by season
const recordsData = [
  {
    season: "Season 2025-2026",
    categories: [
      {
        name: "RSA (Open)",
        score: "505.5",
        rankings: [
          { name: "Swim Star Aquatics Rtb", place: "1st" }
        ]
      },
      {
        name: "Club (15 - 18)",
        score: "505.5",
        rankings: [
          { name: "Swim Star Aquatics Rtb", place: "1st" }
        ]
      },
      {
        name: "Club (Open)",
        score: "505.5",
        rankings: [
          { name: "Swim Star Aquatics Rtb", place: "1st" }
        ]
      }
    ]
  },
  {
    season: "Season 2024-2025",
    categories: [
      {
        name: "RSA (Open)",
        score: "513.6",
        rankings: [
          { name: "Swim Star Aquatics Rtb", place: "1st" }
        ]
      },
      {
        name: "Club (Open)",
        score: "500.4",
        rankings: [
          { name: "Swim Star Aquatics Rtb", place: "1st" }
        ]
      },
      {
        name: "Club (15 - 18)",
        score: "500.4",
        rankings: [
          { name: "Swim Star Aquatics Rtb", place: "1st" }
        ]
      },
      {
        name: "High School (Open)",
        score: "487.3",
        rankings: [
          { name: "Northwest Schools", place: "7th" }
        ]
      }
    ]
  },
  {
    season: "Season 2023-2024",
    categories: [
      {
        name: "RSA (Open)",
        score: "446",
        rankings: [
          { name: "Swim Star Aquatics Rtb", place: "1st" }
        ]
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
        rankings: [
          { name: "North West University Swim Club", place: "13th" }
        ]
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
        rankings: [
          { name: "Fields College", place: "1st" }
        ]
      }
    ]
  },
  {
    season: "Season 2021-2022",
    categories: [
      {
        name: "RSA (Open)",
        score: "350.30",
        rankings: [
          { name: "Swim Star Aquatics Rtb", place: "1st" }
        ]
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

// Personal Records by Season, Club/Age Group with FINA Points
const personalRecordsBySeason = [
  {
    season: "2025-2026",
    records: [
      {
        club: "Swim Star Aquatics Rtb",
        pointSystem: "FINA",
        ageGroup: "Open",
        score: "505.5",
        events: [
          { event: "50 L Fly", meet: "NWS Championships", baseTime: "22.27", time: "27.84", points: 512 },
          { event: "50 L Free", meet: "NWS Championships", baseTime: "20.91", time: "26.26", points: 505 },
          { event: "100 L Free", meet: "NWS Championships", baseTime: "46.4", time: "58.55", points: 498 },
          { event: "50 L Back", meet: "NWS Championships", baseTime: "23.55", time: "30.08", points: 480 },
        ]
      },
      {
        club: "RSA",
        pointSystem: "FINA",
        ageGroup: "Open",
        score: "505.5",
        events: [
          { event: "50 L Fly", meet: "NWS Championships", baseTime: "22.27", time: "27.84", points: 512 },
          { event: "50 L Free", meet: "NWS Championships", baseTime: "20.91", time: "26.26", points: 505 },
          { event: "100 L Free", meet: "NWS Championships", baseTime: "46.4", time: "58.55", points: 498 },
          { event: "50 L Back", meet: "NWS Championships", baseTime: "23.55", time: "30.08", points: 480 },
        ]
      },
      {
        club: "Swim Star Aquatics Rtb",
        pointSystem: "FINA",
        ageGroup: "15 - 18",
        score: "505.5",
        events: [
          { event: "50 L Fly", meet: "NWS Championships", baseTime: "22.27", time: "27.84", points: 512 },
          { event: "50 L Free", meet: "NWS Championships", baseTime: "20.91", time: "26.26", points: 505 },
          { event: "100 L Free", meet: "NWS Championships", baseTime: "46.4", time: "58.55", points: 498 },
          { event: "50 L Back", meet: "NWS Championships", baseTime: "23.55", time: "30.08", points: 480 },
        ]
      },
    ]
  },
  {
    season: "2024-2025",
    records: [
      {
        club: "Swim Star Aquatics Rtb",
        pointSystem: "FINA",
        ageGroup: "Open",
        score: "500.4",
        events: [
          { event: "50 L Free", meet: "SA Level 3 Regional Age Group", baseTime: "20.91", time: "26.09", points: 515 },
          { event: "50 L Fly", meet: "SA Level 3 Regional Age Group", baseTime: "22.27", time: "28.19", points: 493 },
          { event: "100 L Free", meet: "NWS Championships", baseTime: "46.86", time: "59.36", points: 492 },
          { event: "50 L Back", meet: "SA Level 3 Regional Age Group", baseTime: "23.55", time: "30.34", points: 468 },
        ]
      },
      {
        club: "RSA",
        pointSystem: "FINA",
        ageGroup: "Open",
        score: "513.6",
        events: [
          { event: "50 L Fly", meet: "SA Schools Championship", baseTime: "22.27", time: "27.58", points: 526 },
          { event: "50 L Free", meet: "SA Level 3 Regional Age Group", baseTime: "20.91", time: "26.09", points: 515 },
          { event: "100 L Free", meet: "NWS Championships", baseTime: "46.86", time: "59.36", points: 492 },
          { event: "50 L Back", meet: "SA Level 3 Regional Age Group", baseTime: "23.55", time: "30.34", points: 468 },
        ]
      },
      {
        club: "Swim Star Aquatics Rtb",
        pointSystem: "FINA",
        ageGroup: "15 - 18",
        score: "500.4",
        events: [
          { event: "50 L Free", meet: "SA Level 3 Regional Age Group", baseTime: "20.91", time: "26.09", points: 515 },
          { event: "50 L Fly", meet: "SA Level 3 Regional Age Group", baseTime: "22.27", time: "28.19", points: 493 },
          { event: "100 L Free", meet: "NWS Championships", baseTime: "46.86", time: "59.36", points: 492 },
          { event: "50 L Back", meet: "SA Level 3 Regional Age Group", baseTime: "23.55", time: "30.34", points: 468 },
        ]
      },
      {
        club: "Northwest Schools",
        pointSystem: "FINA",
        ageGroup: "Open",
        score: "487.3",
        events: [
          { event: "50 L Fly", meet: "SA Schools Championship", baseTime: "22.27", time: "27.58", points: 526 },
          { event: "100 L Back", meet: "SA Schools Championship", baseTime: "51.6", time: "1:06.59", points: 465 },
          { event: "50 L Back", meet: "SA Schools Championship", baseTime: "23.55", time: "30.58", points: 457 },
          { event: "100 L Fly", meet: "SA Schools Championship", baseTime: "49.45", time: "1:04.69", points: 447 },
        ]
      },
    ]
  },
  {
    season: "2023-2024",
    records: [
      {
        club: "North West Swimming",
        pointSystem: "FINA",
        ageGroup: "Open",
        score: "364.52",
        events: [
          { event: "50 L Fly", meet: "4 + 1 Inter provincial Gala", baseTime: "22.27", time: "30.07", points: 406 },
          { event: "100 L Fly", meet: "4 + 1 Inter provincial Gala", baseTime: "49.45", time: "1:08.13", points: 382 },
          { event: "–", meet: "Proxy time", baseTime: "–", time: "–", points: 254 },
          { event: "–", meet: "Proxy time", baseTime: "–", time: "–", points: 226 },
        ]
      },
      {
        club: "Fields College",
        pointSystem: "FINA",
        ageGroup: "Open",
        score: "433",
        events: [
          { event: "100 L Free", meet: "NW School Championships", baseTime: "46.86", time: "1:01.12", points: 451 },
          { event: "50 L Fly", meet: "NW School Championships", baseTime: "22.27", time: "29.46", points: 432 },
          { event: "200 L Free", meet: "NW School Championships", baseTime: "1:42.00", time: "2:18.39", points: 400 },
          { event: "50 L Back", meet: "NW School Championships", baseTime: "23.55", time: "32.06", points: 396 },
        ]
      },
      {
        club: "Swim Star Aquatics Rtb",
        pointSystem: "FINA",
        ageGroup: "Open",
        score: "446",
        events: [
          { event: "100 L Free", meet: "NWS Long Course Championships", baseTime: "46.86", time: "1:01.06", points: 452 },
          { event: "50 L Fly", meet: "NWS Long Course Championships", baseTime: "22.27", time: "29.04", points: 451 },
          { event: "50 L Free", meet: "NWS Long Course Championships", baseTime: "20.91", time: "27.81", points: 425 },
          { event: "100 L Fly", meet: "NWS Long Course Championships", baseTime: "49.45", time: "1:06.00", points: 421 },
        ]
      },
      {
        club: "North West University Swim Club",
        pointSystem: "FINA",
        ageGroup: "Open",
        score: "419.1",
        events: [
          { event: "50 L Fly", meet: "SA Schools Championship", baseTime: "22.27", time: "29.5", points: 430 },
          { event: "100 L Back", meet: "SA Schools Championship", baseTime: "51.6", time: "1:08.89", points: 420 },
          { event: "50 L Back", meet: "SA Schools Championship", baseTime: "23.55", time: "32.05", points: 397 },
          { event: "100 L Fly", meet: "SA Schools Championship", baseTime: "49.45", time: "1:07.60", points: 391 },
        ]
      },
      {
        club: "RSA",
        pointSystem: "FINA",
        ageGroup: "Open",
        score: "446",
        events: [
          { event: "100 L Free", meet: "NWS Long Course Championships", baseTime: "46.86", time: "1:01.06", points: 452 },
          { event: "50 L Fly", meet: "NWS Long Course Championships", baseTime: "22.27", time: "29.04", points: 451 },
          { event: "50 L Free", meet: "NWS Long Course Championships", baseTime: "20.91", time: "27.81", points: 425 },
          { event: "100 L Fly", meet: "NWS Long Course Championships", baseTime: "49.45", time: "1:06.00", points: 421 },
        ]
      },
      {
        club: "North West University Swim Club",
        pointSystem: "FINA",
        ageGroup: "15 - 18",
        score: "419.1",
        events: [
          { event: "50 L Fly", meet: "SA Schools Championship", baseTime: "22.27", time: "29.5", points: 430 },
          { event: "100 L Back", meet: "SA Schools Championship", baseTime: "51.6", time: "1:08.89", points: 420 },
          { event: "50 L Back", meet: "SA Schools Championship", baseTime: "23.55", time: "32.05", points: 397 },
          { event: "100 L Fly", meet: "SA Schools Championship", baseTime: "49.45", time: "1:07.60", points: 391 },
        ]
      },
      {
        club: "Swim Star Aquatics Rtb",
        pointSystem: "FINA",
        ageGroup: "13 - 14",
        score: "446",
        events: [
          { event: "100 L Free", meet: "NWS Long Course Championships", baseTime: "46.86", time: "1:01.06", points: 452 },
          { event: "50 L Fly", meet: "NWS Long Course Championships", baseTime: "22.27", time: "29.04", points: 451 },
          { event: "50 L Free", meet: "NWS Long Course Championships", baseTime: "20.91", time: "27.81", points: 425 },
          { event: "100 L Fly", meet: "NWS Long Course Championships", baseTime: "49.45", time: "1:06.00", points: 421 },
        ]
      },
      {
        club: "North West Swimming",
        pointSystem: "FINA",
        ageGroup: "13 - 14",
        score: "364.52",
        events: [
          { event: "50 L Fly", meet: "4 + 1 Inter provincial Gala", baseTime: "22.27", time: "30.07", points: 406 },
          { event: "100 L Fly", meet: "4 + 1 Inter provincial Gala", baseTime: "49.45", time: "1:08.13", points: 382 },
          { event: "–", meet: "Proxy time", baseTime: "–", time: "–", points: 254 },
          { event: "–", meet: "Proxy time", baseTime: "–", time: "–", points: 226 },
        ]
      },
    ]
  },
  {
    season: "2021-2022",
    records: [
      {
        club: "North West University Swim Club",
        pointSystem: "FINA",
        ageGroup: "13 - 14",
        score: "309.85",
        events: [
          { event: "200 L IM", meet: "SA Schools Swimming Championships", baseTime: "1:54.00", time: "2:46.55", points: 321 },
          { event: "100 L Fly", meet: "SA Schools Swimming Championships", baseTime: "49.45", time: "1:13.53", points: 304 },
          { event: "200 L Free", meet: "SA Schools Swimming Championships", baseTime: "1:42.00", time: "2:31.97", points: 302 },
          { event: "100 L Back", meet: "SA Schools Swimming Championships", baseTime: "51.85", time: "1:18.20", points: 291 },
        ]
      },
      {
        club: "Swim Star Aquatics Rtb",
        pointSystem: "FINA",
        ageGroup: "Open",
        score: "350.30",
        events: [
          { event: "50 L Fly", meet: "SA Regional Aquatic Champs 2022", baseTime: "22.27", time: "31.04", points: 369 },
          { event: "100 L Free", meet: "SA Regional Aquatic Champs 2022", baseTime: "46.91", time: "1:07.13", points: 341 },
          { event: "200 L Free", meet: "SA Regional Aquatic Champs 2022", baseTime: "1:42.00", time: "2:27.03", points: 334 },
          { event: "400 L Free", meet: "SA Regional Aquatic Champs 2022", baseTime: "3:40.07", time: "5:20.48", points: 324 },
        ]
      },
      {
        club: "North West University Swim Club",
        pointSystem: "FINA",
        ageGroup: "Open",
        score: "309.85",
        events: [
          { event: "200 L IM", meet: "SA Schools Swimming Championships", baseTime: "1:54.00", time: "2:46.55", points: 321 },
          { event: "100 L Fly", meet: "SA Schools Swimming Championships", baseTime: "49.45", time: "1:13.53", points: 304 },
          { event: "200 L Free", meet: "SA Schools Swimming Championships", baseTime: "1:42.00", time: "2:31.97", points: 302 },
          { event: "100 L Back", meet: "SA Schools Swimming Championships", baseTime: "51.85", time: "1:18.20", points: 291 },
        ]
      },
      {
        club: "RSA",
        pointSystem: "FINA",
        ageGroup: "Open",
        score: "350.30",
        events: [
          { event: "50 L Fly", meet: "SA Regional Aquatic Champs 2022", baseTime: "22.27", time: "31.04", points: 369 },
          { event: "100 L Free", meet: "SA Regional Aquatic Champs 2022", baseTime: "46.91", time: "1:07.13", points: 341 },
          { event: "200 L Free", meet: "SA Regional Aquatic Champs 2022", baseTime: "1:42.00", time: "2:27.03", points: 334 },
          { event: "400 L Free", meet: "SA Regional Aquatic Champs 2022", baseTime: "3:40.07", time: "5:20.48", points: 324 },
        ]
      },
      {
        club: "Swim Star Aquatics Rtb",
        pointSystem: "FINA",
        ageGroup: "13 - 14",
        score: "350.30",
        events: [
          { event: "50 L Fly", meet: "SA Regional Aquatic Champs 2022", baseTime: "22.27", time: "31.04", points: 369 },
          { event: "100 L Free", meet: "SA Regional Aquatic Champs 2022", baseTime: "46.91", time: "1:07.13", points: 341 },
          { event: "200 L Free", meet: "SA Regional Aquatic Champs 2022", baseTime: "1:42.00", time: "2:27.03", points: 334 },
          { event: "400 L Free", meet: "SA Regional Aquatic Champs 2022", baseTime: "3:40.07", time: "5:20.48", points: 324 },
        ]
      },
    ]
  },
];

// All competitions data
const allCompetitions = [
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
      { event: "50 Back Extracted", time: "32.62", imp: "+2.28", place: "-" },
      { event: "50 Back Finals", time: "30.58", imp: "+0.24", place: "8th" },
      { event: "50 Back Extracted", time: "33.16", imp: "+2.82", place: "-" },
      { event: "100 Back Prelims", time: "1:06.59", imp: "+0.05", place: "5th" },
      { event: "100 Back Finals", time: "1:08.36", imp: "+1.82", place: "9th" },
      { event: "50 Fly Prelims", time: "27.73", imp: "-0.46", place: "3rd", pb: true },
      { event: "50 Fly Extracted", time: "29.95", imp: "+1.76", place: "-" },
      { event: "50 Fly Finals", time: "27.58", imp: "-0.61", place: "4th", pb: true },
      { event: "50 Fly Extracted", time: "29.93", imp: "+1.74", place: "-" },
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
    id: "nws-age-group-1-2-2024",
    name: "NWS Age Group 1 & 2",
    status: "Completed",
    date: "Nov 9-10, 2024",
    location: "Potchefstroom, NW, RSA",
    year: "2024",
    results: [
      { event: "100 Fly Timed Finals", time: "DQ", imp: null, place: "-" },
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
      { event: "200 FR-R (Anchor) Timed Finals", time: "NT", imp: null, place: "6th" },
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
      { event: "50 Back Extracted", time: "32.89", imp: "+0.83", place: "-" },
      { event: "100 Back Prelims", time: "1:08.89", imp: "-1.39", place: "11th" },
      { event: "50 Fly Prelims", time: "29.50", imp: "+0.46", place: "12th" },
      { event: "50 Fly Extracted", time: "31.67", imp: "+2.63", place: "-" },
      { event: "100 Fly Prelims", time: "1:07.60", imp: "+1.60", place: "12th" },
      { event: "400 FR-R (Split) Timed Finals", time: "1:00.71", imp: null, place: "6th" },
      { event: "400 MED-R (Extracted) Timed Finals", time: "33.47", imp: "+1.41", place: "6th" },
      { event: "400 MED-R (Leadoff) Timed Finals", time: "1:10.06", imp: "-0.22", place: "6th" },
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
    id: "nts-feb-open-2024",
    name: "NTS February Open Age Group",
    status: "Completed",
    date: "Feb 16-17, 2024",
    location: "Pretoria, GP, RSA",
    year: "2024",
    results: [
      { event: "100 Free Timed Finals", time: "1:01.64", imp: "+0.58", place: "4th" },
      { event: "50 Back Timed Finals", time: "37.86", imp: "+2.87", place: "2nd" },
      { event: "200 Fly Timed Finals", time: "DQ", imp: null, place: "-" },
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
      { event: "50 Fly Extracted", time: "30.07", imp: "+1.03", place: "-" },
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
      { event: "100 Free Prelims", time: "NS", imp: null, place: "-" },
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
      { event: "50 Fly Extracted", time: "2:41.16", imp: "+132.12", place: "-" },
      { event: "50 Fly Prelims", time: "29.23", imp: null, place: "1st" },
      { event: "50 Fly Finals", time: "29.04", imp: null, place: "1st" },
      { event: "50 Fly Extracted", time: "2:37.63", imp: "+128.59", place: "-" },
      { event: "100 Fly Timed Finals", time: "1:06.00", imp: null, place: "1st" },
      { event: "200 Fly Timed Finals", time: "DNF", imp: null, place: "-" },
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
      { event: "200 MED-R (Fly) Timed Finals", time: "NT", imp: null, place: "1st" },
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
      { event: "50 Free Prelims", time: "DQ", imp: null, place: "-" },
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
      { event: "200 FR-R (Split) Timed Finals", time: "NT", imp: null, place: "5th" },
      { event: "400 FR-R (Split) Timed Finals", time: "1:07.16", imp: null, place: "3rd" },
      { event: "200 MED-R (Leadoff) Timed Finals", time: "NT", imp: null, place: "3rd" },
      { event: "400 MED-R (Extracted) Timed Finals", time: "1:19.96", imp: null, place: "3rd" },
      { event: "400 MED-R (Leadoff) Timed Finals", time: "1:19.96", imp: null, place: "3rd" },
    ]
  },
];

const SouthAfricanFlag = () => (
  <div className="w-8 h-6 rounded overflow-hidden flex flex-col shrink-0">
    <div className="h-1/3 bg-[hsl(0,65%,45%)]" />
    <div className="h-1/3 bg-white flex items-center justify-center">
      <div className="w-3 h-2 bg-[hsl(120,50%,30%)] flex items-center justify-center">
        <div className="w-1 h-1 bg-[hsl(50,85%,50%)]" />
      </div>
    </div>
    <div className="h-1/3 bg-[hsl(220,70%,35%)]" />
  </div>
);

const CompetitionCard = ({ competition }: { competition: typeof allCompetitions[0] }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/30 transition-colors"
  >
    <div className="p-4 border-b border-border">
      <div className="flex items-start gap-3">
        <SouthAfricanFlag />
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground text-sm truncate">{competition.name}</h3>
          <p className="text-xs text-muted-foreground">
            <span className="text-primary">{competition.status}</span> • {competition.date}
          </p>
          <p className="text-xs text-muted-foreground truncate">{competition.location}</p>
        </div>
      </div>
    </div>
    
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border/50">
            <th className="text-left py-2 px-3 text-xs font-medium text-muted-foreground">Event</th>
            <th className="text-right py-2 px-3 text-xs font-medium text-muted-foreground">Time</th>
            <th className="text-right py-2 px-3 text-xs font-medium text-muted-foreground">Imp</th>
            <th className="text-right py-2 px-3 text-xs font-medium text-muted-foreground">Place</th>
          </tr>
        </thead>
        <tbody>
          {competition.results.map((result, index) => (
            <tr key={index} className="border-b border-border/30 last:border-0">
              <td className="py-2 px-3 text-muted-foreground">{result.event}</td>
              <td className="text-right py-2 px-3">
                <span className="text-primary font-mono">{result.time}</span>
              </td>
              <td className="text-right py-2 px-3">
                {result.imp ? (
                  <span className={`font-mono ${
                    result.imp.startsWith('-') ? 'text-green-500' : 
                    result.imp.startsWith('+') ? 'text-amber-500' : 
                    'text-muted-foreground'
                  }`}>
                    {result.imp}
                  </span>
                ) : (
                  <span className="text-muted-foreground">–</span>
                )}
              </td>
              <td className="text-right py-2 px-3">
                <span className={`font-medium ${
                  result.place === "1st" ? "text-yellow-400" :
                  result.place === "2nd" ? "text-gray-300" :
                  result.place === "3rd" ? "text-amber-600" :
                  "text-muted-foreground"
                }`}>
                  {result.place}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </motion.div>
);

const Results = () => {
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPRSeason, setSelectedPRSeason] = useState<string>("all");

  const years = useMemo(() => {
    const uniqueYears = [...new Set(allCompetitions.map(c => c.year))];
    return uniqueYears.sort((a, b) => b.localeCompare(a));
  }, []);

  const prSeasons = useMemo(() => {
    return personalRecordsBySeason.map(s => s.season);
  }, []);

  const filteredCompetitions = useMemo(() => {
    return allCompetitions.filter(comp => {
      const matchesYear = selectedYear === "all" || comp.year === selectedYear;
      const matchesSearch = comp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           comp.location.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesYear && matchesSearch;
    });
  }, [selectedYear, searchQuery]);

  const filteredPRSeasons = useMemo(() => {
    if (selectedPRSeason === "all") return personalRecordsBySeason;
    return personalRecordsBySeason.filter(s => s.season === selectedPRSeason);
  }, [selectedPRSeason]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background/80 backdrop-blur-lg border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="font-display text-2xl tracking-wider">
              <span className="text-foreground">RUAN</span>
              <span className="text-primary">.</span>
            </Link>
            <Link 
              to="/" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-display text-4xl md:text-5xl mb-2">ALL RESULTS</h1>
          <p className="text-muted-foreground">
            Complete competition history and performance records
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-4 mb-8"
        >
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Year</span>
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="w-[120px] bg-card border-border">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border">
                <SelectItem value="all">All</SelectItem>
                {years.map(year => (
                  <SelectItem key={year} value={year}>{year}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center gap-2 flex-1 max-w-xs">
            <span className="text-sm text-muted-foreground">Name</span>
            <div className="relative flex-1">
              <Input
                placeholder="Search meet"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-card border-border pr-8"
              />
              <Search className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            </div>
          </div>
        </motion.div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompetitions.map((competition, index) => (
            <motion.div
              key={competition.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <CompetitionCard competition={competition} />
            </motion.div>
          ))}
        </div>

        {filteredCompetitions.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No competitions found matching your criteria.</p>
          </div>
        )}

        {/* Records Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mt-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-gradient-to-b from-primary to-primary/30 rounded-full" />
            <h2 className="font-display text-2xl md:text-3xl">RECORDS</h2>
          </div>
          
          <div className="space-y-8">
            {recordsData.map((season, seasonIdx) => (
              <motion.div
                key={season.season}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + seasonIdx * 0.05 }}
                className="relative"
              >
                {/* Season Header */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative">
                    <div className="w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50" />
                    <div className="absolute inset-0 w-3 h-3 rounded-full bg-primary animate-ping opacity-30" />
                  </div>
                  <h3 className="font-display text-lg text-foreground tracking-wide">{season.season}</h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
                </div>
                
                {/* Categories Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 pl-6">
                  {season.categories.map((category, catIdx) => (
                    <motion.div 
                      key={catIdx} 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + catIdx * 0.05 }}
                      className="group relative bg-gradient-to-br from-card to-card/50 rounded-xl p-5 border border-border/50 hover:border-primary/30 transition-all duration-300 overflow-hidden"
                    >
                      {/* Decorative corner */}
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-3xl" />
                      
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4 relative">
                        <span className="text-primary font-semibold text-sm">{category.name}</span>
                        <div className="flex flex-col items-end">
                          <span className="text-2xl font-display text-foreground">{category.score}</span>
                          <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Points</span>
                        </div>
                      </div>
                      
                      {/* Rankings */}
                      <div className="space-y-2.5">
                        {category.rankings.map((rank, rankIdx) => (
                          <div 
                            key={rankIdx} 
                            className="flex items-center gap-3 group/item"
                          >
                            {/* Medal/Shield Icon */}
                            <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                              rank.place === "1st" 
                                ? "bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 border border-yellow-500/30" 
                                : rank.place.match(/^[2-5]/)
                                ? "bg-gradient-to-br from-gray-400/20 to-gray-600/20 border border-gray-500/30"
                                : "bg-muted/30 border border-border/50"
                            }`}>
                              <div className={`w-2.5 h-2.5 rounded-full ${
                                rank.place === "1st" 
                                  ? "bg-gradient-to-br from-yellow-300 to-yellow-500" 
                                  : rank.place.match(/^[2-5]/)
                                  ? "bg-gradient-to-br from-gray-300 to-gray-500"
                                  : "bg-muted"
                              }`} />
                            </div>
                            <span className="text-muted-foreground text-sm flex-1 truncate group-hover/item:text-foreground transition-colors">
                              {rank.name}
                            </span>
                            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                              rank.place === "1st" 
                                ? "bg-yellow-500/20 text-yellow-400" 
                                : rank.place.match(/^[2-3]/)
                                ? "bg-muted text-muted-foreground"
                                : "text-muted-foreground"
                            }`}>
                              {rank.place}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Personal Records Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mt-16"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-primary to-primary/30 rounded-full" />
              <h2 className="font-display text-2xl md:text-3xl">PERSONAL RECORDS</h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Season</span>
              <Select value={selectedPRSeason} onValueChange={setSelectedPRSeason}>
                <SelectTrigger className="w-[140px] bg-card border-border">
                  <SelectValue placeholder="All Seasons" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  <SelectItem value="all">All Seasons</SelectItem>
                  {prSeasons.map(season => (
                    <SelectItem key={season} value={season}>{season}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-10">
            {filteredPRSeasons.map((seasonData, seasonIdx) => (
              <motion.div
                key={seasonData.season}
                id={`pr-season-${seasonData.season}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + seasonIdx * 0.05 }}
              >
                {/* Season Header */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative">
                    <div className="w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50" />
                    <div className="absolute inset-0 w-3 h-3 rounded-full bg-primary animate-ping opacity-30" />
                  </div>
                  <h3 className="font-display text-lg text-foreground tracking-wide">Season {seasonData.season}</h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
                </div>

                <div className="space-y-6 pl-6">
                  {seasonData.records.map((record, recordIdx) => (
                    <motion.div
                      key={`${record.club}-${record.ageGroup}-${recordIdx}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.45 + recordIdx * 0.03 }}
                      className="bg-card border border-border rounded-xl overflow-hidden"
                    >
                      {/* Header */}
                      <div className="p-5 border-b border-border/50 bg-gradient-to-r from-card to-background">
                        <div className="flex flex-wrap items-center justify-between gap-4">
                          <div>
                            <h3 className="font-semibold text-foreground text-lg">{record.club}</h3>
                            <div className="flex items-center gap-3 mt-1">
                              <span className="text-xs px-2 py-0.5 rounded bg-muted text-muted-foreground uppercase tracking-wider">
                                {record.pointSystem}
                              </span>
                              <span className="text-primary text-sm font-medium">Age group: {record.ageGroup}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-xs text-muted-foreground uppercase tracking-wider block">Score</span>
                            <span className="font-display text-3xl text-primary">{record.score}</span>
                          </div>
                        </div>
                      </div>

                      {/* Events Table */}
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-border/50 bg-muted/30">
                              <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Event</th>
                              <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">Meet</th>
                              <th className="text-right py-3 px-4 text-xs font-medium text-muted-foreground">Base Time</th>
                              <th className="text-right py-3 px-4 text-xs font-medium text-muted-foreground">Time</th>
                              <th className="text-right py-3 px-4 text-xs font-medium text-muted-foreground">Points</th>
                            </tr>
                          </thead>
                          <tbody>
                            {record.events.map((event, eventIdx) => (
                              <tr key={eventIdx} className="border-b border-border/30 last:border-0 hover:bg-muted/20 transition-colors">
                                <td className="py-3 px-4 text-foreground font-medium">{event.event}</td>
                                <td className="py-3 px-4 text-muted-foreground">{event.meet}</td>
                                <td className="text-right py-3 px-4 text-muted-foreground font-mono">{event.baseTime}</td>
                                <td className="text-right py-3 px-4">
                                  <span className="text-primary font-mono font-medium">{event.time}</span>
                                </td>
                                <td className="text-right py-3 px-4">
                                  <span className="inline-flex items-center justify-center min-w-[3rem] px-2 py-1 rounded-full bg-primary/10 text-primary font-semibold text-xs">
                                    {event.points}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <span className="font-display text-3xl text-primary">{allCompetitions.length}</span>
            <p className="text-sm text-muted-foreground mt-1">Competitions</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <span className="font-display text-3xl text-yellow-400">
              {allCompetitions.reduce((acc, c) => acc + c.results.filter(r => r.place === "1st").length, 0)}
            </span>
            <p className="text-sm text-muted-foreground mt-1">Gold Medals</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <span className="font-display text-3xl text-gray-300">
              {allCompetitions.reduce((acc, c) => acc + c.results.filter(r => r.place === "2nd").length, 0)}
            </span>
            <p className="text-sm text-muted-foreground mt-1">Silver Medals</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <span className="font-display text-3xl text-amber-600">
              {allCompetitions.reduce((acc, c) => acc + c.results.filter(r => r.place === "3rd").length, 0)}
            </span>
            <p className="text-sm text-muted-foreground mt-1">Bronze Medals</p>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Results;
