import sortUnits from '../utils/sort';

describe('sortUnits', () => {
  test('должен сортировать юниты по уровню здоровья по убыванию', () => {
    const units = [
      { name: 'unit1', health: 50 },
      { name: 'unit2', health: 80 },
      { name: 'unit3', health: 30 },
    ];

    const sortedUnits = sortUnits(units, 'health');

    expect(sortedUnits).toEqual([
      { name: 'unit2', health: 80 },
      { name: 'unit1', health: 50 },
      { name: 'unit3', health: 30 },
    ]);

    // Проверка, что массив отсортирован по убыванию
    for (let i = 0; i < sortedUnits.length - 1; i++) {
      expect(sortedUnits[i].health).toBeGreaterThanOrEqual(sortedUnits[i + 1].health);
    }
  });

  test('должен сортировать юниты по атаке по убыванию', () => {
    const units = [
      { name: 'unit1', attack: 30 },
      { name: 'unit2', attack: 50 },
      { name: 'unit3', attack: 40 },
    ];

    const sortedUnits = sortUnits(units, 'attack');

    expect(sortedUnits).toEqual([
      { name: 'unit2', attack: 50 },
      { name: 'unit3', attack: 40 },
      { name: 'unit1', attack: 30 },
    ]);
  });

  test('должен сортировать юниты по защите по убыванию', () => {
    const units = [
      { name: 'unit1', defense: 20 },
      { name: 'unit2', defense: 60 },
      { name: 'unit3', defense: 40 },
    ];

    const sortedUnits = sortUnits(units, 'defense');

    expect(sortedUnits).toEqual([
      { name: 'unit2', defense: 60 },
      { name: 'unit3', defense: 40 },
      { name: 'unit1', defense: 20 },
    ]);
  });

  test('должен правильно использовать toEqual для проверки объектов', () => {
    const unit = { name: 'unit1', health: 50 };
    const expectedUnit = { name: 'unit1', health: 50 };

    expect(unit).toEqual(expectedUnit);
  });

  test('sort tobe mistake', () => {
    const a = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];

    const b = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];

    const result = sortUnits(a, 'health');

    expect(result).not.toBe(b);
  });
  test('должен корректно обрабатывать пустой массив', () => {
    const units = [];
    const sortedUnits = sortUnits(units);
    expect(sortedUnits).toEqual([]);
  });

  test('должен корректно обрабатывать несуществующий критерий', () => {
    const units = [
      { name: 'unit1', health: 50 },
      { name: 'unit2', health: 80 },
    ];
    const sortedUnits = sortUnits(units, 'nonexistent');
    expect(sortedUnits).toEqual(units);
    // Предполагается, что массив возвращается без изменений
  });
});
