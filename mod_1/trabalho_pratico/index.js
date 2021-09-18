let inputs = {
  in_value: document.getElementById("in_value"),
  in_deadline: document.getElementById("in_deadline"),
  in_fees: document.getElementById("in_fees"),
};

let output = {
  out_deadline: document.getElementById("out_deadline"),
  out_monthly_fees: document.getElementById("out_monthly_fees"),
  out_acc_fees: document.getElementById("out_acc_fees"),
  out_installments: document.getElementById("out_installments")
};

const get_value = () => {
  return inputs.in_value.valueAsNumber;
};

const get_deadlines = () => {
  let deadlineInYears = inputs.in_deadline.valueAsNumber;
  let deadLineInMonths = deadlineInYears * 12;
  return {
    year: deadlineInYears,
    month: deadLineInMonths,
  };
};

const get_fees = () => {
  let yearlyFees = inputs.in_fees.valueAsNumber;
  let monthlyFees = (1 + yearlyFees) ** (1 / 12) - 1;
  return {
    year: yearlyFees,
    month: monthlyFees,
  };
};

const change_value_of_output = (out, val) => {
  out.readOnly = false;
  out.value = val;
  out.readOnly = true;
};

const simulate = () => {
  let value = get_value();
  let deadlines = get_deadlines();
  let fees = get_fees();
  const amortization = value / deadlines.month

  const installments = new Array(deadlines.month)
    .fill(null)
    .map((val, index, array) => {
      let f = (value - index * amortization) * fees.month;
      return {
        amortization: amortization,
        fees: f,
        total: amortization + f,
      };
    });

  // console.log(installments);
  let acc_fees = installments
    .map((val, index, array) => val.fees)
    .reduce((acc, val, index, array) => acc + val);

  change_value_of_output(output.out_deadline, deadlines.month);
  change_value_of_output(output.out_monthly_fees, fees.month);
  change_value_of_output(output.out_acc_fees, acc_fees.toFixed(2));

  const first_five_installments = installments.slice(0, 5)

  // remove all old rows, if exists
  first_five_installments.forEach((val, index, arr) => {
      output.out_installments.deleteRow(-1)
  })

  // add all new rows, and populate with data
  first_five_installments.forEach((val, index, arr) => {
    let row = output.out_installments.insertRow(-1)
    
    let index_cell = row.insertCell(0)
    let amortization_cell = row.insertCell(1)
    let fees_cell = row.insertCell(2)
    let total_cell = row.insertCell(3)

    index_cell.innerHTML = index + 1
    amortization_cell.innerHTML = val.amortization.toFixed(2)
    fees_cell.innerHTML = val.fees.toFixed(2)
    total_cell.innerHTML = val.total.toFixed(2)
})
};
