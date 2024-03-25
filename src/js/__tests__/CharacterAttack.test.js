import { Daemon, Magician } from '../app';

test('Character distance', () => {
  const daemon = new Daemon('Abbadon');
  daemon.distance = 10;

  const result = daemon.distance;
  expect(result).toBe(10);
});

test('Character distance Error', () => {
  const daemon = new Daemon('Abbadon');
  let result = 'Error not found';

  try {
    daemon.distance = -10;
  } catch (error) {
    result = error.message;
  }

  expect(result).toBe('Distance must be a positive number');
});

test('Character stoned true', () => {
  const magician = new Magician('Kyle');
  magician.stoned = true;

  const result = magician.stoned;
  expect(result).toBe(true);
});

test('Character stoned false', () => {
  const magician = new Magician('Kyle');
  const result = magician.stoned;

  expect(result).toBe(false);
});

test('Character stoned Error', () => {
  const magician = new Magician('Kyle');
  let result = 'Error not found';

  try {
    magician.stoned = 100;
  } catch (error) {
    result = error.message;
  }

  expect(result).toBe('Stoned must be a boolean');
});

test('Character attack, stoned = false', () => {
  const magician = new Magician('Kyle');

  magician.distance = 3;
  magician.attack = 150;

  const result = magician.attack;
  expect(result).toBe(120);
});

test('Character attack, stoned = true', () => {
  const magician = new Magician('Kyle');

  magician.distance = 3;
  magician.stoned = true;
  magician.attack = 150;

  const result = magician.attack;
  expect(result).toBe(112);
});

test('Character attack, Error: Zero distance', () => {
  const magician = new Magician('Kyle');
  let result = 'Error not found';

  try {
    magician.attack;
  } catch (error) {
    result = error.message;
  }

  expect(result).toBe('Zero distance');
});

test('Character attack, Error: Attack must be a positive number', () => {
  const magician = new Magician('Kyle');
  let result = 'Error not found';

  try {
    magician.attack = 'x';
  } catch (error) {
    result = error.message;
  }

  expect(result).toBe('Attack must be a positive number');
});
