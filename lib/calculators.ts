export type Category = "Finance" | "Health" | "Business" | "Everyday" | "Auto" | "Math" | "Tools";

export interface CalculatorMeta {
  slug: string;
  title: string;
  description: string;
  category: Category;
  iconName: string;
}

export const calculatorsList: CalculatorMeta[] = [
  {
    slug: 'emi',
    title: 'EMI Calculator',
    description: 'Calculate Equated Monthly Installment for home or car loans.',
    category: 'Finance',
    iconName: 'Building'
  },
  {
    slug: 'tip-split',
    title: 'Tip & Bill Splitter',
    description: 'Easily split restaurant bills and calculate generous tips.',
    category: 'Everyday',
    iconName: 'Receipt'
  },
  {
    slug: 'gst',
    title: 'GST Calculator',
    description: 'Calculate Goods and Services Tax added or removed from base price.',
    category: 'Business',
    iconName: 'Banknote'
  },
  {
    slug: 'freelance-rate',
    title: 'Freelance Rate Calculator',
    description: 'Find your target hourly rate based on desired income and working hours.',
    category: 'Business',
    iconName: 'Briefcase'
  },
  {
    slug: 'lease-vs-buy',
    title: 'Lease vs. Buy Car',
    description: 'Compare the financial costs of leasing versus buying a vehicle.',
    category: 'Auto',
    iconName: 'Car'
  },
  {
    slug: 'calorie-deficit',
    title: 'Calorie Deficit',
    description: 'Estimate daily calorie needs to lose, maintain, or gain weight safely.',
    category: 'Health',
    iconName: 'Activity'
  },
  {
    slug: 'roi',
    title: 'ROI Calculator',
    description: 'Quickly determine the Return on Investment for any expense.',
    category: 'Finance',
    iconName: 'TrendingUp'
  },
  {
    slug: 'compound-interest',
    title: 'Compound Interest',
    description: 'See how your money grows over time with compounding returns.',
    category: 'Finance',
    iconName: 'LineChart'
  },
  {
    slug: 'bmi',
    title: 'BMI Calculator',
    description: 'Check your Body Mass Index based on height and weight.',
    category: 'Health',
    iconName: 'User'
  },
  {
    slug: 'discount',
    title: 'Discount Calculator',
    description: 'Find out exactly how much you save during a sale.',
    category: 'Everyday',
    iconName: 'Tag'
  },
  {
    slug: 'margin',
    title: 'Profit Margin',
    description: 'Calculate gross profit margin based on cost and revenue.',
    category: 'Business',
    iconName: 'Percent'
  },
  {
    slug: 'percentage',
    title: 'Percentage Calculator',
    description: 'Calculate X% of Y, or what percentage X is of Y.',
    category: 'Math',
    iconName: 'DivideSquare'
  },
  {
    slug: 'rule-of-72',
    title: 'Rule of 72',
    description: 'Estimate how long it will take to double your investment.',
    category: 'Finance',
    iconName: 'Clock'
  },
  {
    slug: 'salary-to-hourly',
    title: 'Salary to Hourly',
    description: 'Convert your annual salary to an equivalent hourly wage.',
    category: 'Everyday',
    iconName: 'Coins'
  },
  {
    slug: 'pomodoro',
    title: 'Pomodoro Timer',
    description: 'Use the 25/5 minute work/break cycle to boost productivity.',
    category: 'Tools',
    iconName: 'Timer'
  },
  {
    slug: 'loan-payoff',
    title: 'Loan Payoff',
    description: 'See how much faster you can pay off loans with extra payments.',
    category: 'Finance',
    iconName: 'PiggyBank'
  },
  {
    slug: 'water-intake',
    title: 'Daily Water Intake',
    description: 'Calculate how much water you should drink daily based on weight.',
    category: 'Health',
    iconName: 'Droplet'
  },
  {
    slug: 'sales-tax',
    title: 'Sales Tax',
    description: 'Add or reverse sales tax quickly on retail items.',
    category: 'Business',
    iconName: 'Receipt'
  },
  {
    slug: 'word-count',
    title: 'Word Counter',
    description: 'Count words, characters, and reading time for any text block.',
    category: 'Tools',
    iconName: 'Type'
  },
  {
    slug: 'time-duration',
    title: 'Time Duration',
    description: 'Calculate the exact hours and minutes between two times.',
    category: 'Tools',
    iconName: 'Clock'
  },
  {
    slug: 'fuel-cost',
    title: 'Fuel Cost',
    description: 'Calculate the cost of fuel for a road trip or commute.',
    category: 'Auto',
    iconName: 'Fuel'
  },
  {
    slug: 'age',
    title: 'Age Calculator',
    description: 'Calculate precise age in years, months, and days.',
    category: 'Everyday',
    iconName: 'Calendar'
  },
  {
    slug: 'random-number',
    title: 'Random Number',
    description: 'Generate secure random numbers between a custom range.',
    category: 'Tools',
    iconName: 'Dices'
  },
  {
    slug: 'password',
    title: 'Password Generator',
    description: 'Quickly create secure, random passwords.',
    category: 'Tools',
    iconName: 'Key'
  },
  {
    slug: 'text-case',
    title: 'Case Converter',
    description: 'Easily convert text between upper, lower, and title cases.',
    category: 'Tools',
    iconName: 'Type'
  },
  {
    slug: 'aspect-ratio',
    title: 'Aspect Ratio',
    description: 'Calculate dimensions based on a specific aspect ratio.',
    category: 'Math',
    iconName: 'Maximize'
  },
  {
    slug: 'hex-to-rgb',
    title: 'Color Converter',
    description: 'Convert color codes between HEX, RGB, and HSL formats.',
    category: 'Tools',
    iconName: 'Palette'
  },
  {
    slug: 'days-between',
    title: 'Days Between',
    description: 'Find out exactly how many days are between two dates.',
    category: 'Everyday',
    iconName: 'CalendarDays'
  }
];
