export default function getHealthStatus(units) {
  if (typeof units.health !== 'number' || isNaN(units.health) || units.health < 0) {
    throw new Error('Parameter is not a valid number!');
  }

  switch (true) {
    case (units.health > 50):
      return 'green'; // Здоровье более 50 - зелёный
    case (units.health > 15):
      return 'yellow'; // Здоровье от 16 до 50 - жёлтый
    default:
      return 'red'; // 15 и менее - красный
  }
}
