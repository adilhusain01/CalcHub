import { CalculatorMeta, calculatorsList } from '@/lib/calculators';
import { EmiCalculator } from '@/components/calculators/EmiCalculator';
import { TipSplitCalculator } from '@/components/calculators/TipSplitCalculator';
import { GstCalculator } from '@/components/calculators/GstCalculator';
import { FreelanceRateCalculator } from '@/components/calculators/FreelanceRateCalculator';
import { CalorieDeficitCalculator } from '@/components/calculators/CalorieDeficitCalculator';
import { LeaseVsBuyCalculator } from '@/components/calculators/LeaseVsBuyCalculator';
import { ROICalculator } from '@/components/calculators/ROICalculator';
import { CompoundInterestCalculator } from '@/components/calculators/CompoundInterestCalculator';
import { BMICalculator } from '@/components/calculators/BMICalculator';
import { DiscountCalculator } from '@/components/calculators/DiscountCalculator';
import { ProfitMarginCalculator } from '@/components/calculators/ProfitMarginCalculator';
import { PercentageCalculator } from '@/components/calculators/PercentageCalculator';
import { RuleOf72Calculator } from '@/components/calculators/RuleOf72Calculator';
import { SalaryToHourlyCalculator } from '@/components/calculators/SalaryToHourlyCalculator';
import { PomodoroTimer } from '@/components/calculators/PomodoroTimer';
import { LoanPayoffCalculator } from '@/components/calculators/LoanPayoffCalculator';
import { WaterIntakeCalculator } from '@/components/calculators/WaterIntakeCalculator';
import { SalesTaxCalculator } from '@/components/calculators/SalesTaxCalculator';
import { WordCountCalculator } from '@/components/calculators/WordCountCalculator';
import { TimeDurationCalculator } from '@/components/calculators/TimeDurationCalculator';
import { FuelCostCalculator } from '@/components/calculators/FuelCostCalculator';
import { AgeCalculator } from '@/components/calculators/AgeCalculator';
import { RandomNumberGenerator } from '@/components/calculators/RandomNumberGenerator';
import { PasswordGenerator } from '@/components/calculators/PasswordGenerator';
import { TextCaseConverter } from '@/components/calculators/TextCaseConverter';
import { AspectRatioCalculator } from '@/components/calculators/AspectRatioCalculator';
import { ColorConverter } from '@/components/calculators/ColorConverter';
import { DaysBetweenCalculator } from '@/components/calculators/DaysBetweenCalculator';

export function getCalculatorComponent(slug: string) {
  switch (slug) {
    case 'emi': return <EmiCalculator />;
    case 'tip-split': return <TipSplitCalculator />;
    case 'gst': return <GstCalculator />;
    case 'freelance-rate': return <FreelanceRateCalculator />;
    case 'calorie-deficit': return <CalorieDeficitCalculator />;
    case 'lease-vs-buy': return <LeaseVsBuyCalculator />;
    case 'roi': return <ROICalculator />;
    case 'compound-interest': return <CompoundInterestCalculator />;
    case 'bmi': return <BMICalculator />;
    case 'discount': return <DiscountCalculator />;
    case 'margin': return <ProfitMarginCalculator />;
    case 'percentage': return <PercentageCalculator />;
    case 'rule-of-72': return <RuleOf72Calculator />;
    case 'salary-to-hourly': return <SalaryToHourlyCalculator />;
    case 'pomodoro': return <PomodoroTimer />;
    case 'loan-payoff': return <LoanPayoffCalculator />;
    case 'water-intake': return <WaterIntakeCalculator />;
    case 'sales-tax': return <SalesTaxCalculator />;
    case 'word-count': return <WordCountCalculator />;
    case 'time-duration': return <TimeDurationCalculator />;
    case 'fuel-cost': return <FuelCostCalculator />;
    case 'age': return <AgeCalculator />;
    case 'random-number': return <RandomNumberGenerator />;
    case 'password': return <PasswordGenerator />;
    case 'text-case': return <TextCaseConverter />;
    case 'aspect-ratio': return <AspectRatioCalculator />;
    case 'hex-to-rgb': return <ColorConverter />;
    case 'days-between': return <DaysBetweenCalculator />;
    default: return <div className="p-8 text-center text-xl font-bold bg-white border-[3px] border-black rounded-[24px]">Calculator under construction.</div>;
  }
}



