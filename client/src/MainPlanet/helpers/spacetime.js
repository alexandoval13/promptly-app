import spacetime from 'spacetime';
import daylight from 'spacetime-daylight';
spacetime.extend(daylight);

export const getCurrentDate = () => {
  let date = spacetime.now();
  return date;
};

export const determineDaytime = () => {
  const sunlight = getCurrentDate().daylight();
  console.log({ sunlight });
  return sunlight.current.status;
};

export const formatGreeting = (name: String) => {
  const daytime: String = determineDaytime();

  switch (true) {
    case daytime === 'night':
      return 'Good evening, ' + name;

    default:
      return 'Hello, ' + name;
  }
};
