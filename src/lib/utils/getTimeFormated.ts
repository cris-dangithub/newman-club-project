const getTimeFormated = (date?: Date) => {
  function formatTime(time?: number) {
    if (time && time >= 0 && time <= 9) return `0${time}`;
    return time;
  }

  const dayWeek = date?.toLocaleString("en-US", {
    weekday: "long",
  });
  const day = date?.getDate();
  const month = date?.toLocaleString("en-US", { month: "long" });
  const monthShort = date?.toLocaleString("en-US", { month: "short" });
  const year = date?.getFullYear();

  const hours = date?.getHours();
  const min = date?.getMinutes();

  const dateDDMY = `${dayWeek} ${day} ${month?.toLocaleLowerCase()} ${year}`;
  const dateShortDDMY = { day, monthShort, year };
  const timeHM = `${hours}:${formatTime(min)}`;
  return { dateDDMY, timeHM, dateShortDDMY };
};

export default getTimeFormated;
