const $period = document.querySelector("#period");
const data = {
  daily: {
    work: {
      hours: 4.57,
      oldHours: 9,
    },
    play: {
      hours: 3,
      oldHours: 17,
    },
    study: {
      hours: 1,
      oldHours: 7,
    },
    exercise: {
      hours: 1,
      oldHours: 4,
    },
    social: {
      hours: 1,
      oldHours: 2,
    },
    "self-care": {
      hours: 1,
      oldHours: 2,
    },
  },
  weekly: {
    work: {
      hours: 32,
      oldHours: 36,
    },
    play: {
      hours: 10,
      oldHours: 8,
    },
    study: {
      hours: 4,
      oldHours: 7,
    },
    exercise: {
      hours: 4,
      oldHours: 5,
    },
    social: {
      hours: 5,
      oldHours: 10,
    },
    "self-care": {
      hours: 2,
      oldHours: 2,
    },
  },
  monthly: {
    work: {
      hours: 64,
      oldHours: 32,
    },
    play: {
      hours: 14,
      oldHours: 14,
    },
    study: {
      hours: 28,
      oldHours: 24,
    },
    exercise: {
      hours: 14,
      oldHours: 12,
    },
    social: {
      hours: 18,
      oldHours: 16,
    },
    "self-care": {
      hours: 15,
      oldHours: 10,
    },
  },
};
function handleClick() {
  const checked = document.querySelector("input[type=radio]:checked");
  let selected = checked.value;
  $period.textContent = selected;
  let currentData = data[selected];
  if (!currentData) return;
  for (const startSelector in currentData) {
    let localSelector = currentData[startSelector];
    for (const key in localSelector) {
      const selector = document.querySelector(`#${startSelector}-${key}`);
      selector.textContent = localSelector[key];
    }
  }
}
