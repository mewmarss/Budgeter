function updatePlaceholders(selectElement) {
    const currency = selectElement.value;
    const numberInputs = document.querySelectorAll('input[type="number"]');
  
    numberInputs.forEach((input) => {
      const label = input.previousElementSibling;
      const labelText = label.textContent;
      const placeholder = currency;
      input.placeholder = placeholder;
    });
  }
  
  const currencySelect = document.getElementById("currency-select");
  const selectedCurrency = currencySelect.options[currencySelect.selectedIndex].value;

  // Set the currency symbol based on the selected currency
  let currency;
  switch (selectedCurrency) {
    case "INR":
      currency = "₹";
      break;
    case "USD":
      currency = "$";
      break;
    case "GBP":
      currency = "£";
      break;
    case "AED":
      currency = "AED";
      break;
    default:
      currency = "₹"; // Default to USD if no currency is selected
      break;
  }

 // Get the button element
const calculateButton = document.getElementById('calculateButton');

// Add a click event listener to the button
calculateButton.addEventListener('click', calculateTotals);

function calculateTotals() {
  // Get the input values
  const monthlySalary = parseFloat(document.getElementById('id1').value) || 0;
  const additionalIncome = parseFloat(document.getElementById('id2').value) || 0;
  const housingExpenses = parseFloat(document.getElementById('ed1').value) || 0;
  const transportationExpenses = parseFloat(document.getElementById('ed2').value) || 0;
  const foodExpenses = parseFloat(document.getElementById('ed3').value) || 0;
  const insurancePremiums = parseFloat(document.getElementById('ed4').value) || 0;
  const debtPayments = parseFloat(document.getElementById('ed5').value) || 0;
  const entertainmentExpenses = parseFloat(document.getElementById('ed6').value) || 0;
  const medicalExpenses = parseFloat(document.getElementById('ed7').value) || 0;
  const educationExpenses = parseFloat(document.getElementById('ed8').value) || 0;
  const childcareExpenses = parseFloat(document.getElementById('ed9').value) || 0;
  const miscellaneousExpenses = parseFloat(document.getElementById('ed10').value) || 0;

  // Calculate totals
  const totalIncome = monthlySalary + additionalIncome;
  const totalExpense =
    housingExpenses +
    transportationExpenses +
    foodExpenses +
    insurancePremiums +
    debtPayments +
    entertainmentExpenses +
    medicalExpenses +
    educationExpenses +
    childcareExpenses +
    miscellaneousExpenses;
  const totalSavings = totalIncome - totalExpense;
  const totalDebt = parseFloat(document.getElementById('dd1').value) || 0;
  const netWorth = totalSavings - totalDebt;

  // Display the totals
  document.getElementById('totalIncome').textContent = currency + totalIncome.toFixed(0);
  document.getElementById('totalExpense').textContent = currency + totalExpense.toFixed(0);
  document.getElementById('totalSavings').textContent = currency + totalSavings.toFixed(0);
  document.getElementById('totalDebt').textContent = currency + totalDebt.toFixed(0);
  document.getElementById('netWorth').textContent = currency + netWorth.toFixed(0);

  // Set color based on positivity or negativity
  const colorGreen = '#00FF00';
  const colorRed = '#FF0000';

  document.getElementById('totalIncome').style.color = totalIncome >= 0 ? colorGreen : colorRed;
  document.getElementById('totalExpense').style.color = totalExpense >= 0 ? colorGreen : colorRed;
  document.getElementById('totalSavings').style.color = totalSavings >= 0 ? colorGreen : colorRed;
  document.getElementById('totalDebt').style.color = totalDebt >= 0 ? colorGreen : colorRed;
  document.getElementById('netWorth').style.color = netWorth >= 0 ? colorGreen : colorRed;
}


