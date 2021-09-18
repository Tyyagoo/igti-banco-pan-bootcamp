
const get_by_id = (id) => document.getElementById(id)
const x_input = get_by_id("xi")
const y_input = get_by_id("yi")
const result = get_by_id("result")

const handleInput = () => {
    let x = x_input.valueAsNumber
    let y = y_input.valueAsNumber
    let sum = x + y
    result.textContent = isNaN(sum) ? "" : sum
}

document.addEventListener("input", handleInput)