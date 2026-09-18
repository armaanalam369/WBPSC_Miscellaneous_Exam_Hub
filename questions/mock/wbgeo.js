/* Mock Test — West Bengal Geography
   -------------------------------------------------------------------
   Add new mock test papers here after each test your students sit.
   Each paper is one "set" with a title, an optional date, and its
   questions. Paste new sets into the array below, following this
   exact shape:

   addSubject("mock", "wbgeo", [
     { title:"Wise Choice Mock Test 4", date:"2026-10-05", questions:[
       {q:"question text", opts:["option 1","option 2","option 3","option 4"], correct:0}
     ]}
   ]);

   Notes:
   - "correct" is zero-indexed (0 = 1st option ... 3 = 4th option)
   - Repeats across papers are found and flagged automatically — no
     need to mark them yourself
   ------------------------------------------------------------------- */

addSubject("mock", "wbgeo", [
  {
    "title": "WBPSC MISC-2024 (MT-1)",
    "date": "27 Aug 2026",
    "questions": [
      {
        "q": "Which of the following rivers flows through both West Bengal and Sikkim?",
        "opts": [
          "Koshi",
          "Hooghly",
          "Son",
          "Teesta"
        ],
        "correct": 3
      },
      {
        "q": "Where was the first jute mill set up near Kolkata, in 1859?",
        "opts": [
          "Sreerampur",
          "Mesra",
          "Howrah",
          "Rishra"
        ],
        "correct": 3
      }
    ]
  }
]);

addSubject("mock", "wbgeo", [
  {
    "title": "WBPSC MISC-2024 (MT-3)",
    "date": "10 Sep 2026",
    "questions": [
      {
        "q": "Which of the following dams is a part of the Damodar Valley Corporation?",
        "opts": [
          "Maithon",
          "Rihand",
          "Koyna",
          "Salal"
        ],
        "correct": 0
      }
    ]
  }
]);

addSubject("mock", "wbgeo", [
  {
    "title": "WBPSC MISC-2024 (MT-4)",
    "date": "17 Sep 2026",
    "questions": [
      {
        "q": "In which year was the Darjeeling Himalayan Railway recognised as a world heritage site by UNESCO?",
        "opts": [
          "1989",
          "1993",
          "1995",
          "1999"
        ],
        "correct": 3
      },
      {
        "q": "Which one is the largest district according to population in West Bengal?",
        "opts": [
          "Burdwan",
          "Murshidabad",
          "N. 24 Pargana",
          "Hooghly"
        ],
        "correct": 2
      }
    ]
  }
]);
