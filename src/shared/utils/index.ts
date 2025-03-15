//форматируем дату в формат дд мм гггг
export function formatDate(dateStr: string | undefined): string {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return date.toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

//высчитываем возраст участника
export function calculateAge(birthDate: Date | string | undefined): number {
  if (!birthDate) return 0;
  const birth = new Date(birthDate);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}

// определяем склонение слова год
export function declineYear(age: number): string {
  if (age % 10 === 1 && age % 100 !== 11) {
    return 'год';
  } else if (age % 10 >= 2 && age % 10 <= 4 && (age % 100 < 10 || age % 100 >= 20)) {
    return 'года';
  } else {
    return 'лет';
  }
}

// форматируем дату в формат дд м
export function formatBirthday(dateStr: string): string {
  const date = new Date(dateStr);
  const monthNames = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
  const day = date.getDate();
  const month = monthNames[date.getMonth()];

  return `${day} ${month}`;
}
