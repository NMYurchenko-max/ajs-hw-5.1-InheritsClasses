export default function sortUnits(units, criterion = 'health') {
  return units.sort((a, b) => b[criterion] - a[criterion]);
}
