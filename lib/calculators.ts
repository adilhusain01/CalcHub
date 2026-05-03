export type Category = "Finance" | "Health" | "Business" | "Everyday" | "Auto" | "Math" | "Tools" | "Fun";

export interface CalculatorMeta {
  slug: string;
  title: string;
  description: string;
  category: Category;
  iconName: string;
}

export const calculatorsList: CalculatorMeta[] = [
  // --- FINANCE ---
  { slug: 'emi', title: 'EMI Calculator', description: 'Calculate Equated Monthly Installment for home or car loans.', category: 'Finance', iconName: 'Building' },
  { slug: 'roi', title: 'ROI Calculator', description: 'Quickly determine the Return on Investment for any expense.', category: 'Finance', iconName: 'TrendingUp' },
  { slug: 'compound-interest', title: 'Compound Interest', description: 'See how your money grows over time with compounding returns.', category: 'Finance', iconName: 'LineChart' },
  { slug: 'rule-of-72', title: 'Rule of 72', description: 'Estimate how long it will take to double your investment.', category: 'Finance', iconName: 'Clock' },
  { slug: 'loan-payoff', title: 'Loan Payoff', description: 'See how much faster you can pay off loans with extra payments.', category: 'Finance', iconName: 'PiggyBank' },
  { slug: 'inflation', title: 'Inflation Calculator', description: 'Calculate the true buying power of your money over time.', category: 'Finance', iconName: 'TrendingDown' },
  { slug: 'currency-converter', title: 'Currency Converter', description: 'Convert between world currencies with live exchange rates.', category: 'Finance', iconName: 'Coins' },
  { slug: 'crypto-profit', title: 'Crypto Profit', description: 'Determine potential profits or losses from crypto trading.', category: 'Finance', iconName: 'Bitcoin' },
  { slug: 'retirement-savings', title: 'Retirement Savings', description: 'Estimate how much you need to save for a comfortable retirement.', category: 'Finance', iconName: 'Landmark' },
  { slug: 'mortgage-payoff', title: 'Mortgage Payoff', description: 'See how extra payments can shorten your mortgage term.', category: 'Finance', iconName: 'Home' },
  { slug: 'debt-snowball', title: 'Debt Snowball', description: 'Plan your debt payoff using the snowball method.', category: 'Finance', iconName: 'CreditCard' },
  { slug: 'budget-planner', title: '50/30/20 Budget', description: 'Automatically split your income into needs, wants, and savings.', category: 'Finance', iconName: 'Wallet' },
  { slug: 'net-worth', title: 'Net Worth', description: 'Calculate your total net worth by balancing assets and liabilities.', category: 'Finance', iconName: 'Scale' },

  // --- HEALTH ---
  { slug: 'calorie-deficit', title: 'Calorie Deficit', description: 'Estimate daily calorie needs to lose, maintain, or gain weight safely.', category: 'Health', iconName: 'Activity' },
  { slug: 'bmi', title: 'BMI Calculator', description: 'Check your Body Mass Index based on height and weight.', category: 'Health', iconName: 'User' },
  { slug: 'water-intake', title: 'Daily Water Intake', description: 'Calculate how much water you should drink daily based on weight.', category: 'Health', iconName: 'Droplet' },
  { slug: 'macro-calculator', title: 'Macro Calculator', description: 'Find your ideal daily protein, carb, and fat targets.', category: 'Health', iconName: 'Apple' },
  { slug: 'bmr', title: 'BMR Calculator', description: 'Calculate your Basal Metabolic Rate (calories burned at rest).', category: 'Health', iconName: 'Activity' },
  { slug: 'pregnancy-due-date', title: 'Due Date', description: 'Estimate your baby\'s due date based on your last cycle.', category: 'Health', iconName: 'Baby' },
  { slug: 'sleep-cycle', title: 'Sleep Cycle', description: 'Find the optimal times to go to bed or wake up feeling refreshed.', category: 'Health', iconName: 'Moon' },
  { slug: 'target-heart-rate', title: 'Target Heart Rate', description: 'Find your ideal heart rate zone for maximum fat burn.', category: 'Health', iconName: 'HeartPulse' },
  { slug: 'body-fat', title: 'Body Fat %', description: 'Estimate your body fat percentage using standard measurements.', category: 'Health', iconName: 'UserCheck' },
  { slug: 'caffeine-crash', title: 'Caffeine Crash', description: 'Find out when the coffee jitters will wear off and sleep can begin.', category: 'Health', iconName: 'Coffee' },
  { slug: 'bac', title: 'Blood Alcohol (BAC)', description: 'Estimate your Blood Alcohol Concentration.', category: 'Health', iconName: 'Beer' },

  // --- BUSINESS ---
  { slug: 'gst', title: 'GST Calculator', description: 'Calculate Goods and Services Tax added or removed from base price.', category: 'Business', iconName: 'Banknote' },
  { slug: 'freelance-rate', title: 'Freelance Rate Calculator', description: 'Find your target hourly rate based on desired income and working hours.', category: 'Business', iconName: 'Briefcase' },
  { slug: 'margin', title: 'Profit Margin', description: 'Calculate gross profit margin based on cost and revenue.', category: 'Business', iconName: 'Percent' },
  { slug: 'sales-tax', title: 'Sales Tax', description: 'Add or reverse sales tax quickly on retail items.', category: 'Business', iconName: 'Receipt' },
  { slug: 'startup-runway', title: 'Startup Runway', description: 'Calculate how many months your business can survive before running out of cash.', category: 'Business', iconName: 'Rocket' },
  { slug: 'break-even', title: 'Break-Even Analysis', description: 'Find the point where your business revenue equals its costs.', category: 'Business', iconName: 'BarChart' },
  { slug: 'customer-ltv', title: 'Customer LTV', description: 'Calculate the Lifetime Value of your average customer.', category: 'Business', iconName: 'Users' },
  { slug: 'markup', title: 'Markup Calculator', description: 'Easily find the selling price based on cost and desired markup.', category: 'Business', iconName: 'ArrowUpRight' },
  { slug: 'paypal-fee', title: 'PayPal Fee', description: 'Calculate exactly how much PayPal will deduct from a transaction.', category: 'Business', iconName: 'CreditCard' },
  { slug: 'stripe-fee', title: 'Stripe Fee', description: 'Find out Stripe\'s exact cut for domestic and international payments.', category: 'Business', iconName: 'CreditCard' },
  { slug: 'cpm', title: 'CPM Calculator', description: 'Calculate the Cost Per Mille (thousand impressions) for ad campaigns.', category: 'Business', iconName: 'Megaphone' },
  { slug: 'engagement-rate', title: 'Engagement Rate', description: 'Calculate engagement % for Instagram, TikTok, or Twitter.', category: 'Business', iconName: 'Heart' },

  // --- EVERYDAY ---
  { slug: 'tip-split', title: 'Tip & Bill Splitter', description: 'Easily split restaurant bills and calculate generous tips.', category: 'Everyday', iconName: 'Receipt' },
  { slug: 'discount', title: 'Discount Calculator', description: 'Find out exactly how much you save during a sale.', category: 'Everyday', iconName: 'Tag' },
  { slug: 'salary-to-hourly', title: 'Salary to Hourly', description: 'Convert your annual salary to an equivalent hourly wage.', category: 'Everyday', iconName: 'Coins' },
  { slug: 'age', title: 'Age Calculator', description: 'Calculate precise age in years, months, and days.', category: 'Everyday', iconName: 'Calendar' },
  { slug: 'days-between', title: 'Days Between', description: 'Find out exactly how many days are between two dates.', category: 'Everyday', iconName: 'CalendarDays' },
  { slug: 'time-zone', title: 'Time Zone Converter', description: 'Convert times easily across different global time zones.', category: 'Everyday', iconName: 'Globe' },
  { slug: 'unit-converter', title: 'Unit Converter', description: 'Convert length, weight, temperature, and volume instantly.', category: 'Everyday', iconName: 'Scale3d' },
  { slug: 'leap-year', title: 'Leap Year Checker', description: 'Quickly find out if any given year is a leap year.', category: 'Everyday', iconName: 'CalendarClock' },
  { slug: 'pizza-value', title: 'Pizza Value', description: 'Find the better deal per square inch between two pizzas.', category: 'Everyday', iconName: 'Pizza' },
  { slug: 'microwave-converter', title: 'Microwave Converter', description: 'Fix instructions meant for a different microwave wattage.', category: 'Everyday', iconName: 'ChefHat' },
  { slug: 'cost-per-wear', title: 'Cost Per Wear', description: 'Justify expensive clothing purchases using girl math.', category: 'Everyday', iconName: 'ShoppingBag' },
  { slug: 'reading-time', title: 'Reading Planner', description: 'Find out how many pages a day you need to read.', category: 'Everyday', iconName: 'BookOpen' },

  // --- AUTO ---
  { slug: 'lease-vs-buy', title: 'Lease vs. Buy Car', description: 'Compare the financial costs of leasing versus buying a vehicle.', category: 'Auto', iconName: 'Car' },
  { slug: 'fuel-cost', title: 'Fuel Cost', description: 'Calculate the cost of fuel for a road trip or commute.', category: 'Auto', iconName: 'Fuel' },
  { slug: '0-60', title: '0-60 Time Estimator', description: 'Estimate a car\'s 0-60 mph time based on weight and horsepower.', category: 'Auto', iconName: 'TimerReset' },
  { slug: 'horsepower', title: 'Horsepower to kW', description: 'Convert engine power between Horsepower and Kilowatts.', category: 'Auto', iconName: 'Zap' },
  { slug: 'tire-size', title: 'Tire Size Comparison', description: 'Compare tire dimensions and find speedometer differences.', category: 'Auto', iconName: 'Circle' },
  { slug: 'ev-charging', title: 'EV Charging Time', description: 'Calculate how long it takes to charge an Electric Vehicle.', category: 'Auto', iconName: 'BatteryCharging' },

  // --- MATH ---
  { slug: 'percentage', title: 'Percentage Calculator', description: 'Calculate X% of Y, or what percentage X is of Y.', category: 'Math', iconName: 'DivideSquare' },
  { slug: 'aspect-ratio', title: 'Aspect Ratio', description: 'Calculate dimensions based on a specific aspect ratio.', category: 'Math', iconName: 'Maximize' },
  { slug: 'fraction-to-decimal', title: 'Fraction to Decimal', description: 'Quickly convert any fraction into a precise decimal number.', category: 'Math', iconName: 'DivideSquare' },
  { slug: 'square-root', title: 'Square Root', description: 'Find the square root or perfect squares for any number.', category: 'Math', iconName: 'Calculator' },
  { slug: 'scientific', title: 'Scientific Calculator', description: 'Advanced mathematical functions, trigonometry, and logarithms.', category: 'Math', iconName: 'Binary' },
  { slug: 'area', title: 'Area Calculator', description: 'Calculate the area for circles, triangles, rectangles, and polygons.', category: 'Math', iconName: 'Square' },
  { slug: 'volume', title: 'Volume Calculator', description: 'Find the cubic volume of spheres, cylinders, and boxes.', category: 'Math', iconName: 'Box' },
  { slug: 'gcd-lcm', title: 'GCD & LCM', description: 'Find the Greatest Common Divisor and Least Common Multiple.', category: 'Math', iconName: 'Calculator' },
  { slug: 'prime-number', title: 'Prime Checker', description: 'Verify if a given number is prime or composite.', category: 'Math', iconName: 'Hash' },
  { slug: 'fibonacci', title: 'Fibonacci Sequence', description: 'Generate and find numbers in the Fibonacci sequence.', category: 'Math', iconName: 'ListOrdered' },

  // --- TOOLS ---
  { slug: 'pomodoro', title: 'Pomodoro Timer', description: 'Use the 25/5 minute work/break cycle to boost productivity.', category: 'Tools', iconName: 'Timer' },
  { slug: 'word-count', title: 'Word Counter', description: 'Count words, characters, and reading time for any text block.', category: 'Tools', iconName: 'Type' },
  { slug: 'time-duration', title: 'Time Duration', description: 'Calculate the exact hours and minutes between two times.', category: 'Tools', iconName: 'Clock' },
  { slug: 'random-number', title: 'Random Number', description: 'Generate secure random numbers between a custom range.', category: 'Tools', iconName: 'Dices' },
  { slug: 'password', title: 'Password Generator', description: 'Quickly create secure, random passwords.', category: 'Tools', iconName: 'Key' },
  { slug: 'text-case', title: 'Case Converter', description: 'Easily convert text between upper, lower, and title cases.', category: 'Tools', iconName: 'Type' },
  { slug: 'hex-to-rgb', title: 'Color Converter', description: 'Convert color codes between HEX, RGB, and HSL formats.', category: 'Tools', iconName: 'Palette' },
  { slug: 'lorem-ipsum', title: 'Lorem Ipsum Generator', description: 'Generate dummy text for your wireframes and mockups.', category: 'Tools', iconName: 'Type' },
  { slug: 'json-formatter', title: 'JSON Formatter', description: 'Beautify, validate, and format your JSON data instantly.', category: 'Tools', iconName: 'Code' },
  { slug: 'base64', title: 'Base64 Encode/Decode', description: 'Convert text or files to and from Base64 format.', category: 'Tools', iconName: 'FileCode' },
  { slug: 'hash-generator', title: 'Hash Generator', description: 'Generate MD5, SHA-1, or SHA-256 hashes from any text.', category: 'Tools', iconName: 'Lock' },
  { slug: 'uuid', title: 'UUID Generator', description: 'Generate bulk version 4 UUIDs for your database needs.', category: 'Tools', iconName: 'Fingerprint' },
  { slug: 'qr-code', title: 'QR Code Generator', description: 'Create dynamic QR codes for URLs, text, and contact info.', category: 'Tools', iconName: 'QrCode' },
  { slug: 'stopwatch', title: 'Online Stopwatch', description: 'A precise digital stopwatch with lap and split times.', category: 'Tools', iconName: 'Timer' },
  { slug: 'diff-checker', title: 'Text Diff Checker', description: 'Compare two blocks of text and highlight the differences.', category: 'Tools', iconName: 'FileDiff' },
  { slug: 'regex-tester', title: 'Regex Tester', description: 'Test and validate your Regular Expressions securely in the browser.', category: 'Tools', iconName: 'Terminal' },
  { slug: 'download-time', title: 'Download Time', description: 'Estimate how long a large file will take to download.', category: 'Tools', iconName: 'Download' },
  { slug: 'wpm', title: 'WPM Calculator', description: 'Calculate your true Typing Words Per Minute.', category: 'Tools', iconName: 'Keyboard' },

  // --- FUN ---
  { slug: 'dog-years', title: 'Dog Age Calculator', description: 'Convert your dog\'s age to human years accurately based on breed size.', category: 'Fun', iconName: 'Dog' },
  { slug: 'cat-years', title: 'Cat Years Converter', description: 'Find out exactly how old your feline overlord is.', category: 'Fun', iconName: 'Cat' },
  { slug: 'zodiac', title: 'Zodiac Sign', description: 'Find out your astrological zodiac sign based on your birthday.', category: 'Fun', iconName: 'Stars' },
  { slug: 'love-calculator', title: 'Love Calculator', description: 'A fun tool to calculate the compatibility between two names.', category: 'Fun', iconName: 'Heart' },
  { slug: 'binge-watch', title: 'Binge-Watch Time', description: 'Calculate how much time you need to binge a whole TV show.', category: 'Fun', iconName: 'Tv' },
  { slug: 'alien-age', title: 'Alien Age', description: 'Discover your age in different parts of the solar system.', category: 'Fun', iconName: 'Rocket' },
  { slug: 'mocking-case', title: 'Mocking Case', description: 'cOnVeRt TeXt To MoCkInG cAsE.', category: 'Fun', iconName: 'MessageSquare' },
  { slug: 'lottery-odds', title: 'Lottery Dream Crusher', description: 'Calculate your exact odds of winning the jackpot.', category: 'Fun', iconName: 'TrendingDown' }
];