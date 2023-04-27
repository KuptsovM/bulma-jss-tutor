const calendar = document.querySelector('.calendar');
const header = calendar.querySelector('.calendar-header .date');
const weekdays = calendar.querySelector('.calendar-weekdays');
const days = calendar.querySelector('.calendar-days');

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

let selectedDate = new Date();
let currentDate = new Date();

function renderCalendar() {
  header.textContent = `${months[selectedDate.getMonth()]} ${selectedDate.getFullYear()}`;
  
  weekdays.innerHTML = '';
  weekDays.forEach((day) => {
    const weekday = document.createElement('div');
    weekday.textContent = day;
    weekdays.appendChild(weekday);
  });

  days.innerHTML = '';
  const daysInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate();
  for (let i = 1; i <= daysInMonth; i++) {
    const day = document.createElement('div');
    day.textContent = i;
    day.classList.add('calendar-day');
    if (selectedDate.getFullYear() === currentDate.getFullYear() && selectedDate.getMonth() === currentDate.getMonth() && i === currentDate.getDate()) {
      day.classList.add('today');
    }
    if (selectedDate.getFullYear() === selectedDate.getFullYear() && selectedDate.getMonth() === selectedDate.getMonth() && i === selectedDate.getDate()) {
      day.classList.add('selected');
    }
    day.addEventListener('click', () => {
      selectedDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), i);
      renderCalendar();
    });
    days.appendChild(day);
  }
}

renderCalendar();

const prevMonthButton = calendar.querySelector('.prev-month');
prevMonthButton.addEventListener('click', () => {
  selectedDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, selectedDate.getDate());
  renderCalendar();
});

const nextMonthButton = calendar.querySelector('.next-month');
nextMonthButton.addEventListener('click', () => {
  selectedDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, selectedDate.getDate());
  renderCalendar();
});