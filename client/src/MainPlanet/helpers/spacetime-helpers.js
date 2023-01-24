import spacetime from 'spacetime';
import daylight from 'spacetime-daylight';
import { DAYTIME_BREAKS } from '../constants/daytime-config';

spacetime.extend(daylight);

export const getCurrentDate = () => {
  let date = spacetime.now();
  return date;
};

export const determineDaytime = () => {
  const s = spacetime();
  const currentDate = getCurrentDate();

  const { morning, afternoon, evening, night } = DAYTIME_BREAKS;

  switch (true) {
    case currentDate.isEqual(s.time(morning)) ||
      currentDate.isBetween(s.time(morning), s.time(afternoon)): {
      return 'morning';
    }
    case currentDate.isEqual(s.time(afternoon)) ||
      currentDate.isBetween(s.time(afternoon), s.time(evening)): {
      return 'afternoon';
    }
    case currentDate.isEqual(s.time(evening)) ||
      currentDate.isBetween(s.time(evening), s.time(night)): {
      return 'evening';
    }
    case currentDate.isEqual(s.time(night)) ||
      currentDate.isBetween(s.time(night), s.time(morning).add(1, 'day')): {
      return 'night';
    }
    default: {
      return undefined;
    }
  }
};

export const determineSunlight = () => {
  const s = spacetime();
  const currentDate = getCurrentDate();
  const daytime = currentDate.daylight();

  const { dawn, dusk, sunrise, sunset } = daytime;

  switch (true) {
    case currentDate.isEqual(s.time(dawn)) ||
      currentDate.isBetween(s.time(dawn), s.time(sunrise).add(15, 'minutes')): {
      return 'dawn';
    }
    case currentDate.isEqual(s.time(sunrise).add(15, 'minutes')) ||
      currentDate.isBetween(
        s.time(sunrise).add(15, 'minutes'),
        s.time(sunset)
      ): {
      return 'day';
    }
    case currentDate.isEqual(s.time(sunset)) ||
      currentDate.isBetween(s.time(sunset), s.time(dusk).add(5, 'minutes')): {
      return 'sunset';
    }
    case currentDate.isEqual(s.time(dusk).add(5, 'minutes')) ||
      currentDate.isBetween(
        s.time(dusk).add(5, 'minutes'),
        s.time(sunrise).add(1, 'day')
      ): {
      return 'night';
    }
    default: {
      return undefined;
    }
  }
};

export const formatGreeting = (name) => {
  const daytime = determineDaytime();

  switch (true) {
    case daytime === 'morning':
      return 'Good morning, ' + name;
    case daytime === 'evening' || daytime === 'night':
      return 'Good evening, ' + name;
    default:
      return 'Hello, ' + name;
  }
};
