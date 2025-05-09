/**
 * Calculate Body Mass Index (BMI)
 * @param {number} weightKg
 * @param {number} heightCm
 * @returns {{bmi: number, category: string, advice: string}}
 */

export function basalMetabolicRate({ weightKg, heightCm, age, isMale }) {
  return isMale
    ? 10 * weightKg + 6.25 * heightCm - 5 * age + 5
    : 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
}

export function dailyCalorieNeeds(bmr, activityFactor = 1.55) {
  return Math.round(bmr * activityFactor); // 1.55 = “moderately active”
}

export function dailyWaterLiters(weightKg) {
  return +(weightKg * 0.033).toFixed(1); // ≈ ml/kg rule
}

export function exerciseIdeas(bmiCategory) {
  if (bmiCategory === "Անբավարար քաշ") return ["Յոգայի հոսք", "Դիմադրության ժապավեններ"];
  if (bmiCategory === "Առողջ") return ["5 կմ վազքի պլան", "Բարձր ինտենսիվության ընդհատվող մարզում (HIIT) 20 րոպե"];
  return ["Ցածր ինտենսիվությամբ հեծանվավարություն", "Ջրային աերոբիկա լողավազանում"];
}

export function calculateBMI(weightKg, heightCm) {
    const heightM = heightCm / 100;
    const bmi = +(weightKg / (heightM * heightM)).toFixed(1);
  
    let category, advice;
    if (bmi < 18.5) {
      category = "Անբավարար քաշ";
      advice = "Դիտարկի՛ր սննդարար նյութերով հարուստ կալորիականության ավելցուկ։";
    } else if (bmi < 25) {
      category = "Առողջ";
      advice = "Հիանալի՛ է։ Պահպանի՛ր հավասարակշռված սնվելը և ակտիվությունը։";
    } else if (bmi < 30) {
      category = "Ավելորդ քաշ";
      advice = "Ավելացրո՛ւ ֆիզիկական ակտիվությունը և վերանայի՛ր սննդակարգդ։";
    } else {
      category = "Ճարպակալում";
      advice = "Խորհրդակցի՛ր առողջապահության մասնագետի հետ՝ անհատական պլան կազմելու համար։";
    }
  
    return { bmi, category, advice };
  }
  