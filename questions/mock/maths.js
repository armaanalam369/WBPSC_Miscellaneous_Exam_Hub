/* Mock Test — Mathematics
   -------------------------------------------------------------------
   Add new mock test papers here after each test your students sit.
   Each paper is one "set" with a title, an optional date, and its
   questions. Paste new sets into the array below, following this
   exact shape:

   addSubject("mock", "maths", [
     { title:"Wise Choice Mock Test 4", date:"2026-10-05", questions:[
       {q:"question text", opts:["option 1","option 2","option 3","option 4"], correct:0}
     ]}
   ]);

   Notes:
   - "correct" is zero-indexed (0 = 1st option ... 3 = 4th option)
   - Repeats across papers are found and flagged automatically — no
     need to mark them yourself
   ------------------------------------------------------------------- */

addSubject("mock", "maths", [
  {
    "title": "WBPSC MISC-2024 (MT-1)",
    "date": "27 Aug 2026",
    "questions": [
      {
        "q": "Find the missing term in the series: 1, 4, 9, 16, 25, ____, 49.",
        "opts": [
          "35",
          "36",
          "30",
          "46"
        ],
        "correct": 1
      },
      {
        "q": "John's average marks in English, Maths, Hindi and Drawing were 50. His average in Maths, Science, Social Studies and Craft were 70. If his average across all seven subjects is 58, what was his score in Maths?",
        "opts": [
          "70",
          "74",
          "75",
          "84"
        ],
        "correct": 1
      },
      {
        "q": "Karan buys 10 oranges for Rs. 25 and sells 9 oranges for Rs. 25. Find his gain percentage.",
        "opts": [
          "11 2/9 %",
          "9%",
          "16%",
          "11 1/9 %"
        ],
        "correct": 3
      },
      {
        "q": "Simplify: (256)^(3/4)",
        "opts": [
          "64",
          "60",
          "40",
          "55"
        ],
        "correct": 0
      },
      {
        "q": "7 × 0.7 × 0.07 × 7000 = ?",
        "opts": [
          "2100",
          "2301",
          "2401",
          "1900"
        ],
        "correct": 2
      },
      {
        "q": "For any natural number n, the quantity n³ + 5n is always divisible by which number?",
        "opts": [
          "6",
          "4",
          "8",
          "5"
        ],
        "correct": 0
      },
      {
        "q": "A can do a piece of work in 20 days and B in 12 days. After A worked alone for some days, B took over and finished it, the whole job taking 14 days in total. For how many days did A work?",
        "opts": [
          "7",
          "4",
          "6",
          "5"
        ],
        "correct": 3
      },
      {
        "q": "Simplify: 11 + 1 ÷ [1 − 1 ÷ (1 + 1 ÷ 8¹⁄₁₁)]",
        "opts": [
          "23",
          "20 1/11",
          "20 1/12",
          "25"
        ],
        "correct": 1
      },
      {
        "q": "Marks obtained by 7 students in Computer Science are 45, 40, 60, 90, 80, 65, 55. What is the median?",
        "opts": [
          "90",
          "60",
          "80",
          "55"
        ],
        "correct": 1
      },
      {
        "q": "A certain distance is covered at a certain speed. If half the distance is covered in double the time, find the ratio of the new speed to the original speed.",
        "opts": [
          "3:4",
          "4:2",
          "4:1",
          "4:3"
        ],
        "correct": 2
      },
      {
        "q": "The area of a circle is 220 sq. cm. What is the area of the biggest square inscribed in the circle?",
        "opts": [
          "49 cm²",
          "70 cm²",
          "140 cm²",
          "150 cm²"
        ],
        "correct": 2
      },
      {
        "q": "Evaluate: [(0.0104 − 0.002) of 0.12 + 0.36 × 0.002] ÷ (0.12 × 0.12)",
        "opts": [
          "0.1001",
          "0.1101",
          "0.12",
          "0.13"
        ],
        "correct": 2
      },
      {
        "q": "What least number must be added to 1056 to get a number exactly divisible by 23?",
        "opts": [
          "21",
          "25",
          "3",
          "2"
        ],
        "correct": 3
      },
      {
        "q": "Find the difference between the simple interest and compound interest on Rs. 800 at 5% per annum for 1 year.",
        "opts": [
          "Rs. 81",
          "Rs. 41",
          "Rs. 56.50",
          "None of these"
        ],
        "correct": 3
      },
      {
        "q": "Gold is 19 times as heavy as water, and copper is 9 times as heavy as water. In what ratio should the two be mixed so the mixture is 15 times as heavy as water?",
        "opts": [
          "1:2",
          "2:3",
          "3:2",
          "19:135"
        ],
        "correct": 2
      },
      {
        "q": "In the original question paper's figure, a triangle ABC is inscribed in a circle with centre O and one marked angle of 35°. What is ∠AOB?",
        "opts": [
          "120°",
          "60°",
          "80°",
          "110°"
        ],
        "correct": 0
      },
      {
        "q": "A, B and C start a business with investments in the ratio 1:3:5. After 4 months, A invests the same amount again, while B and C each withdraw half their investment. What is the ratio of their profits at year end?",
        "opts": [
          "5:6:10",
          "6:5:10",
          "10:5:6",
          "4:3:5"
        ],
        "correct": 0
      },
      {
        "q": "If A's income is 10% more than B's, by what percentage is B's income less than A's?",
        "opts": [
          "9 1/11 %",
          "10 1/4 %",
          "11%",
          "13%"
        ],
        "correct": 0
      },
      {
        "q": "If cos α / sin β = n and cos α / cos β = m, what is the value of cos²β?",
        "opts": [
          "m² / (m² + n²)",
          "m² / (m² − n²)",
          "1 / (m² + n²)",
          "n² / (m² + n²)"
        ],
        "correct": 3
      },
      {
        "q": "If the volumes of two cubes are in the ratio 8:1, what is the ratio of their edges?",
        "opts": [
          "8:1",
          "2√2 : 1",
          "2:1",
          "None of these"
        ],
        "correct": 2
      },
      {
        "q": "Given that √4096 = 64, find the value of √4096 + √40.96 + √0.004096",
        "opts": [
          "70.4",
          "70.464",
          "71.104",
          "71.4"
        ],
        "correct": 1
      },
      {
        "q": "In a triangle, if all three altitudes are equal, the triangle is ____.",
        "opts": [
          "Obtuse",
          "Equilateral",
          "Right",
          "Isosceles"
        ],
        "correct": 1
      },
      {
        "q": "Simplify: [(3.63)² − (2.37)²] ÷ (3.63 + 2.37)",
        "opts": [
          "6",
          "1.36",
          "2.26",
          "1.26"
        ],
        "correct": 3
      },
      {
        "q": "A boat moves downstream at 8 kmph and upstream at 5 kmph. What is the speed of the boat in still water?",
        "opts": [
          "6 kmph",
          "6.5 kmph",
          "7 kmph",
          "7.5 kmph"
        ],
        "correct": 1
      },
      {
        "q": "Evaluate: [1/5 + (999 + 494/495) × 99] ÷ 4",
        "opts": [
          "22000",
          "25200",
          "30000",
          "24750"
        ],
        "correct": 3
      }
    ]
  }
]);

addSubject("mock", "maths", [
  {
    "title": "WBPSC MISC-2024 (MT-2)",
    "date": "03 Sep 2026",
    "questions": [
      {
        "q": "Ram and Shyam work on a job together for four days and complete 60% of it. Ram takes leave, then Shyam works for eight more days to complete the job. How long would Ram take to complete the entire job alone?",
        "opts": [
          "6 days",
          "8 days",
          "10 days",
          "11 days"
        ],
        "correct": 2
      },
      {
        "q": "If Sin θ + cosec θ = 2, then the value of sin⁵θ + cosec⁵θ is",
        "opts": [
          "½",
          "1",
          "0",
          "2"
        ],
        "correct": 3
      },
      {
        "q": "W can do 25% of a work in 30 days, X can do 1/4 of the work in 10 days, Y can do 40% of the work in 40 days, and Z can do 1/3 of the work in 13 days. Who will complete the work first?",
        "opts": [
          "W",
          "X",
          "Y",
          "Z"
        ],
        "correct": 3
      },
      {
        "q": "The average monthly income of a person in a certain family of 5 is Rs. 10,000. What will be the average monthly income of a person in the same family if the income of one person increased by Rs. 1,20,000 per year?",
        "opts": [
          "Rs. 12,000",
          "Rs. 16,000",
          "Rs. 20,000",
          "Rs. 34,000"
        ],
        "correct": 0
      },
      {
        "q": "A person allows a 10% discount for cash payment from the marked price of a toy and still makes a 10% gain. What is the cost price of the toy which is marked Rs. 770?",
        "opts": [
          "Rs. 610",
          "Rs. 620",
          "Rs. 630",
          "Rs. 640"
        ],
        "correct": 2
      },
      {
        "q": "A class starts at 11:00 am and lasts till 2:27 pm. Four periods of equal duration are held during this interval. After every period, a rest of 5 minutes is given to the students. The exact duration of each period is:",
        "opts": [
          "48 minutes",
          "50 minutes",
          "51 minutes",
          "53 minutes"
        ],
        "correct": 0
      },
      {
        "q": "In a class, there are 18 very tall boys. If these constitute three-fourths of the boys and the total number of boys is two-thirds of the total number of students in the class, what is the number of girls in the class?",
        "opts": [
          "6",
          "12",
          "18",
          "21"
        ],
        "correct": 1
      },
      {
        "q": "The monthly average salary paid to all the employees of a company was Rs. 5000. The monthly average salary paid to male and female employees was Rs. 5200 and Rs. 4200 respectively. Then the percentage of males employed in the company is",
        "opts": [
          "75%",
          "80%",
          "85%",
          "90%"
        ],
        "correct": 1
      },
      {
        "q": "A clock strikes once at 1 o'clock, twice at 2 o'clock, and thrice at 3 o'clock, and so on. If it takes 12 seconds to strike at 5 o'clock, what is the time taken by it to strike at 10 o'clock?",
        "opts": [
          "20 seconds",
          "24 seconds",
          "28 seconds",
          "30 seconds"
        ],
        "correct": 1
      },
      {
        "q": "P works thrice as fast as Q, whereas P and Q together can work four times as fast as R. If P, Q and R together work on a job, in what ratio should they share the earnings?",
        "opts": [
          "3:1:1",
          "3:2:4",
          "4:3:4",
          "3:1:4"
        ],
        "correct": 0
      },
      {
        "q": "A lift has the capacity of 18 adults or 30 children. How many children can board the lift with 12 adults?",
        "opts": [
          "6",
          "10",
          "12",
          "15"
        ],
        "correct": 1
      },
      {
        "q": "A shopkeeper sells an article at Rs. 40 and gets x% profit. However, when he sells it at Rs. 20, he faces the same percentage of loss. What is the original cost of the article?",
        "opts": [
          "Rs. 10",
          "Rs. 20",
          "Rs. 30",
          "Rs. 40"
        ],
        "correct": 2
      },
      {
        "q": "A student has to get 40% marks to pass in an examination. Suppose he gets 30 marks and fails by 30 marks, then what are the maximum marks in the examination?",
        "opts": [
          "100",
          "120",
          "150",
          "300"
        ],
        "correct": 2
      },
      {
        "q": "If √x − 1/√x = √6, then x² + 1/x² is equal to",
        "opts": [
          "62",
          "14",
          "16",
          "36"
        ],
        "correct": 0
      },
      {
        "q": "If a − b = 2 and ab = 24, then what is the value of a³ − b³?",
        "opts": [
          "280",
          "124",
          "140",
          "152"
        ],
        "correct": 3
      },
      {
        "q": "What is the value of sin30° + cos30° − tan45°?",
        "opts": [
          "(√3−1)/2",
          "(√2+1)/√2",
          "(√3+1)/2",
          "(1−√3)/2"
        ],
        "correct": 0
      },
      {
        "q": "Ms Jhulan Goswami scores 102 runs in the 18th innings of her career and thus increases her average by 5. After the 18th innings, her average is:",
        "opts": [
          "17",
          "21",
          "26",
          "28"
        ],
        "correct": 0
      },
      {
        "q": "The average age of 29 boys of a class is equal to 14 years. When the age of the class teacher is included, the average becomes 15 years. Find the age of the class teacher.",
        "opts": [
          "44 years",
          "40 years",
          "52 years",
          "66 years"
        ],
        "correct": 0
      },
      {
        "q": "10 sheep and 5 pigs were brought for Rs. 6000. If the average price of a sheep is Rs. 450, find the average price of a pig.",
        "opts": [
          "Rs. 380",
          "Rs. 410",
          "Rs. 340",
          "Rs. 300"
        ],
        "correct": 3
      },
      {
        "q": "Of the three numbers, the first is one third of the second and twice the third. The average of these numbers is 27. The largest of these numbers is",
        "opts": [
          "18",
          "36",
          "54",
          "108"
        ],
        "correct": 2
      },
      {
        "q": "If a/b = 1/3, b/c = 1/2, and a = 2, then the value of c is--",
        "opts": [
          "8",
          "10",
          "12",
          "16"
        ],
        "correct": 2
      },
      {
        "q": "If x/3 = y/5 = z/7, then (z² − x² + y²)/(2y²) = ?",
        "opts": [
          "1.2",
          "1.1",
          "1.7",
          "1.3"
        ],
        "correct": 3
      },
      {
        "q": "If a² + b² = 25 and ab = 12, then (a+b)/(a−b) is--",
        "opts": [
          "4",
          "5",
          "6",
          "7"
        ],
        "correct": 3
      },
      {
        "q": "Value of (√7 − √3)(√7 + √3) is--",
        "opts": [
          "2√3",
          "3√7",
          "4",
          "3"
        ],
        "correct": 2
      },
      {
        "q": "The ratio of the present age of a father and his son is 7:2. After 5 years, the age of the son will be 37.5% of that of his father. The present age of the father is--",
        "opts": [
          "35 years",
          "42 years",
          "49 years",
          "28 years"
        ],
        "correct": 0
      }
    ]
  }
]);

addSubject("mock", "maths", [
  {
    "title": "WBPSC MISC-2024 (MT-3)",
    "date": "10 Sep 2026",
    "questions": [
      {
        "q": "A invested Rs. 6000 for 5 months and B Rs. 5000 for x months in a business. If the profit of A and B be equal, find the value of x.",
        "opts": [
          "10 months",
          "8 months",
          "6 months",
          "7 months"
        ],
        "correct": 2
      },
      {
        "q": "Three friends P, Q and R started a business with capitals Rs. 15,000, Rs. 10,000 and Rs. 25,000. But at the end of the year, they suffer a loss of Rs. 25,000. How much will each have to pay for the loss?",
        "opts": [
          "Rs. 500, Rs. 750 and Rs. 1000",
          "Rs. 7500, Rs. 5000 and Rs. 12500",
          "Rs. 500, Rs. 750 and Rs. 1150",
          "Rs. 1000, Rs. 500 and Rs. 700"
        ],
        "correct": 1
      },
      {
        "q": "X, Y and Z start a business with Rs. 7200. After 1 year, X, Y and Z get Rs. 60, Rs. 90 and Rs. 120 as profit. What amount did Z invest?",
        "opts": [
          "Rs. 1800",
          "Rs. 2400",
          "Rs. 2700",
          "Rs. 3200"
        ],
        "correct": 3
      },
      {
        "q": "In a business, P invests Rs. 12,000. After some days, Q joins the business and invests Rs. 16,000 in it. 9 months after Q joins, P and Q get the same profit. Find for how many months P's money was invested in the business.",
        "opts": [
          "20 months",
          "11 months",
          "12 months",
          "10 months"
        ],
        "correct": 2
      },
      {
        "q": "In a joint business, the ratio of the capitals of three partners is 5:7:9. If the profit in the business is Rs. 420, then the third partner will get",
        "opts": [
          "Rs. 100",
          "Rs. 140",
          "Rs. 180",
          "Rs. 200"
        ],
        "correct": 2
      },
      {
        "q": "S and T are partners sharing profits in the ratio of 3:2. W is admitted as a partner. The new profit sharing ratio of S, T and W is 4:3:2. Find out the sacrificing ratio.",
        "opts": [
          "3:5",
          "7:3",
          "5:3",
          "3:7"
        ],
        "correct": 1
      },
      {
        "q": "A and B are partners sharing profits in the ratio of 7:5. They agree to admit C, their manager, into partnership, who is to get 1/6th share in profits. He acquires his share 1/24th from A and 1/8th from B. Calculate the new profit sharing ratio.",
        "opts": [
          "13:11:9",
          "13:7:4",
          "13:11:7",
          "13:11:5"
        ],
        "correct": 1
      },
      {
        "q": "A and B are in partnership sharing profits and losses in the ratio of 3:2. They admit C as a new partner. Calculate the new profit sharing ratio if C purchases a 1/10th share from A.",
        "opts": [
          "5:4:3",
          "4:3:2",
          "3:2:1",
          "5:4:1"
        ],
        "correct": 3
      },
      {
        "q": "If 25 men can weave 120 metres of cloth in a day, how many metres of cloth will be woven by 35 men in a day?",
        "opts": [
          "170 metres",
          "168 metres",
          "190 metres",
          "180 metres"
        ],
        "correct": 1
      },
      {
        "q": "12 men can do a piece of work in 30 days. How many extra men should be engaged to do the work in 20 days?",
        "opts": [
          "8 men",
          "6 men",
          "10 men",
          "15 men"
        ],
        "correct": 1
      },
      {
        "q": "If 50 men do a piece of work in 12 days working 8 hours a day, how many hours a day would 60 men have to work to do another piece of work twice as great in 16 days?",
        "opts": [
          "10 hours a day",
          "12 hours a day",
          "8 hours a day",
          "6 hours a day"
        ],
        "correct": 0
      },
      {
        "q": "10 men can do a piece of work in 18 days. In how many days can 12 men do it?",
        "opts": [
          "12 days",
          "15 days",
          "10 days",
          "16 days"
        ],
        "correct": 1
      },
      {
        "q": "By what least number must 1260 be divided to make the quotient a perfect square?",
        "opts": [
          "35",
          "30",
          "40",
          "45"
        ],
        "correct": 0
      },
      {
        "q": "The ratio of two numbers is 5:8 and their difference is 69. Find the numbers.",
        "opts": [
          "120, 131",
          "150, 163",
          "115, 184",
          "118, 173"
        ],
        "correct": 2
      },
      {
        "q": "One litre of spirit which contains 10% water is added to 3 litres of spirit containing 7% water, and to this mixture half a litre of water is added. Find the percentage of water in the final mixture",
        "opts": [
          "15%",
          "18%",
          "20%",
          "22%"
        ],
        "correct": 1
      },
      {
        "q": "A contractor undertook to finish a road 12 km long in 350 days. But after employing 45 men for 200 days, he found that only 4 km of the road had been built. How many additional men must be engaged to finish the work in the given time?",
        "opts": [
          "70 men",
          "80 men",
          "75 men",
          "85 men"
        ],
        "correct": 2
      },
      {
        "q": "In a joint business, the capitals of P, Q and R are in the ratio 1/4 : 1/3 : 1/2. At the end of the year, they make a profit of Rs. 3900. Find how much of the profit R will get.",
        "opts": [
          "Rs. 2000",
          "Rs. 1500",
          "Rs. 1200",
          "Rs. 1800"
        ],
        "correct": 3
      },
      {
        "q": "When the price of rice increases by 12½%, a man gets 250 gm less rice for Rs. 18. Find the present (increased) cost of rice per kg.",
        "opts": [
          "Rs. 8",
          "Rs. 7",
          "Rs. 9",
          "Rs. 7.50"
        ],
        "correct": 2
      },
      {
        "q": "A man saves 20% of his income. If his expenses increase by 35%, by what percent must his income be raised so that he can still save 10% of his income?",
        "opts": [
          "20%",
          "30%",
          "25%",
          "22%"
        ],
        "correct": 0
      },
      {
        "q": "There is some loss if an article is sold at Rs. 120. There is the same amount of profit if the article is sold at Rs. 140. What is the cost price of the article?",
        "opts": [
          "Rs. 120",
          "Rs. 150",
          "Rs. 130",
          "Rs. 160"
        ],
        "correct": 2
      },
      {
        "q": "There is a loss of 11% if an article is sold at Rs. 178. At what price should it be sold to make a profit of 11%?",
        "opts": [
          "Rs. 200",
          "Rs. 220",
          "Rs. 222",
          "Rs. 226"
        ],
        "correct": 2
      },
      {
        "q": "A sum amounts to Rs. 1180 in 3 years and to Rs. 1300 in 5 years at simple interest. Find the rate of interest.",
        "opts": [
          "5%",
          "6%",
          "4%",
          "8%"
        ],
        "correct": 1
      },
      {
        "q": "Let us calculate the number of years for which the interest of Rs. 600 at the rate of simple interest of 8% per annum will be Rs. 168.",
        "opts": [
          "5½",
          "4½",
          "3½",
          "2½"
        ],
        "correct": 2
      },
      {
        "q": "If a principal becomes twice of its amount in 10 years, the rate of simple interest per annum is",
        "opts": [
          "5%",
          "10%",
          "15%",
          "20%"
        ],
        "correct": 1
      },
      {
        "q": "The area of a triangle is equal to the area of a square whose side measures 75 meters. Find the side of the triangle whose corresponding altitude is 125 meters",
        "opts": [
          "70 m",
          "75 m",
          "90 m",
          "65 m"
        ],
        "correct": 2
      }
    ]
  }
]);

addSubject("mock", "maths", [
  {
    "title": "WBPSC MISC-2024 (MT-4)",
    "date": "17 Sep 2026",
    "questions": [
      {
        "q": "(1 − 1/2)(1 − 1/3)(1 − 1/4)···(1 − 1/(n−1))(1 − 1/n) is equal to",
        "opts": [
          "1/2n",
          "1/5n",
          "1/3n",
          "1/n"
        ],
        "correct": 3
      },
      {
        "q": "The greatest number of four digits which, when divided by 3, 5, 7 and 9, leaves remainders 1, 3, 5 and 7 respectively, is",
        "opts": [
          "9763",
          "9764",
          "9766",
          "9765"
        ],
        "correct": 0
      },
      {
        "q": "The average of nine numbers is 50. The average of the first five numbers is 54 and that of the last three numbers is 52. Then, the sixth number is",
        "opts": [
          "34",
          "24",
          "44",
          "30"
        ],
        "correct": 1
      },
      {
        "q": "The average of 6 observations is 45.5. If one new observation is added to the previous observations, then the new average becomes 47. The new observation is",
        "opts": [
          "58",
          "56",
          "50",
          "46"
        ],
        "correct": 1
      },
      {
        "q": "The ratio of the ages of a father and his son 10 years hence will be 5:3, while 10 years ago, it was 3:1. The ratio of the ages of the son to that of the father today is",
        "opts": [
          "1:2",
          "1:3",
          "2:3",
          "2:5"
        ],
        "correct": 0
      },
      {
        "q": "A number is increased by 10% and then the increased number is decreased by 10%. The net increase or decrease is",
        "opts": [
          "1% decrease",
          "2% increase",
          "0.1% increase",
          "0.2% decrease"
        ],
        "correct": 0
      },
      {
        "q": "Two numbers x and y are respectively 20% and 50% more than a third number. x is how much per cent of y?",
        "opts": [
          "30",
          "45",
          "60",
          "80"
        ],
        "correct": 3
      },
      {
        "q": "In one litre of a mixture of alcohol and water, water is 30%. The amount of alcohol that must be added to the mixture, so that the part of water in the mixture becomes 15%, is",
        "opts": [
          "1000 mL",
          "700 mL",
          "300 mL",
          "900 mL"
        ],
        "correct": 0
      },
      {
        "q": "In an examination, a student had to obtain 33% of the maximum marks to pass. He got 125 marks and failed by 40 marks. The maximum marks were",
        "opts": [
          "500",
          "600",
          "800",
          "1000"
        ],
        "correct": 0
      },
      {
        "q": "A shopkeeper sold two bicycles for Rs. 1500 each. On one, he gains 25% and on the other he loses 20%. His gain or loss per cent in the whole transaction is",
        "opts": [
          "2 18/41% loss",
          "2 18/41% gain",
          "2% gain",
          "2% loss"
        ],
        "correct": 0
      },
      {
        "q": "12 copies of a book were sold for Rs. 1800, thereby gaining the cost price of 3 copies. The cost price of a copy is:",
        "opts": [
          "Rs. 120",
          "Rs. 150",
          "Rs. 1200",
          "Rs. 1500"
        ],
        "correct": 0
      },
      {
        "q": "A and B can do a piece of work in 12 days, B and C in 8 days, and C and A in 6 days. How long would B take to do the same work alone?",
        "opts": [
          "24 days",
          "32 days",
          "40 days",
          "48 days"
        ],
        "correct": 3
      },
      {
        "q": "2 men and 5 women can do a work in 12 days. 5 men and 2 women can do that work in 9 days. Only 3 women can finish the same work in:",
        "opts": [
          "36 days",
          "21 days",
          "30 days",
          "42 days"
        ],
        "correct": 0
      },
      {
        "q": "A person covers half of his journey at 30 Km/h and the remaining half at 20 Km/h. The average speed for the whole journey is:",
        "opts": [
          "25 Km/h",
          "28 Km/h",
          "32 Km/h",
          "None of these"
        ],
        "correct": 3
      },
      {
        "q": "A man can row 6 Km/h in still water. If the speed of the current is 2 Km/h, it takes 3 hrs more upstream than downstream for the same distance. The distance is:",
        "opts": [
          "30 Km",
          "24 Km",
          "20 Km",
          "32 Km"
        ],
        "correct": 1
      },
      {
        "q": "The difference between the compound interest and simple interest on a certain sum at 5% for 2 years is Rs. 1.50. The sum is:",
        "opts": [
          "Rs. 700",
          "Rs. 600",
          "Rs. 500",
          "None of these"
        ],
        "correct": 1
      },
      {
        "q": "A sum of money is divided among A, B, C and D in the ratio of 2:3:7:11, respectively. If the share of C is Rs. 2755 more than the share of A, then what is the total amount of money of B and D together?",
        "opts": [
          "Rs. 4408",
          "Rs. 5510",
          "Rs. 6612",
          "Rs. 7714"
        ],
        "correct": 3
      },
      {
        "q": "If a² + b² + c² = 2(a − b − c) − 3, then the value of (a − b + c) is:",
        "opts": [
          "−1",
          "3",
          "1",
          "−2"
        ],
        "correct": 2
      },
      {
        "q": "The sides of a triangle are in the ratio 3:4:5. If its perimeter is 36 cm, then the area of the triangle is:",
        "opts": [
          "57 cm²",
          "54 cm²",
          "56.5 cm²",
          "None of these"
        ],
        "correct": 1
      },
      {
        "q": "If all the sides of a triangle are increased by 200%, then the area of the triangle will increase by:",
        "opts": [
          "400%",
          "600%",
          "800%",
          "None of these"
        ],
        "correct": 2
      },
      {
        "q": "If the circumference of a circle is equal to the perimeter of a square, what is the ratio of the area of the circle to the area of the square?",
        "opts": [
          "22:7",
          "14:11",
          "11:7",
          "4:1"
        ],
        "correct": 1
      },
      {
        "q": "If the measures of a diagonal and the area of a rectangle are 25 cm and 168 cm² respectively, what is the length of the rectangle?",
        "opts": [
          "31 cm",
          "24 cm",
          "17 cm",
          "27 cm"
        ],
        "correct": 1
      },
      {
        "q": "A and B are two alloys of gold and copper prepared by mixing metals in the ratio 7:2 and 7:11 respectively. If equal quantities of the alloys are melted to form a third alloy C, the ratio of gold and copper in C will be:",
        "opts": [
          "5:7",
          "5:9",
          "7:5",
          "9:5"
        ],
        "correct": 2
      },
      {
        "q": "If 738A6A is divisible by 11, then the value of A is:",
        "opts": [
          "6",
          "3",
          "9",
          "1"
        ],
        "correct": 2
      },
      {
        "q": "What is the ratio of the perimeter of the shaded region (a quarter circle) to the circumference of the circle?",
        "opts": [
          "3/4",
          "(4+π)/4π",
          "2π/(4+π)",
          "(4+π)/2π"
        ],
        "correct": 1
      }
    ]
  }
]);
