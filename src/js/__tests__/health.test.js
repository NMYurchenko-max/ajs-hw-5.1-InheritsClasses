import showHealth from "../utils/health";

// Описание тестов для функции showHealth
describe("health", () => {
  // Тест для проверки, что функция возвращает 'healthy'
  test("должен вернуть healthy", () => {
    const result = showHealth({ name: "Маг", health: 90 });
    expect(result).toBe("healthy");
  });

  // Тест для проверки, что функция возвращает 'wounded'
  test("должен вернуть wounded", () => {
    const result = showHealth({ name: "Маг", health: 40 });
    expect(result).toBe("wounded");
  });

  // Тест для проверки, что функция возвращает 'critical'
  test("должен вернуть critical", () => {
    const result = showHealth({ name: "Маг", health: 10 });
    expect(result).toBe("critical");
  });

  // Тест для проверки, что функция возвращает 'critical' при здоровье 0
  test("должен вернуть critical при здоровье 0", () => {
    const result = showHealth({ name: "Маг", health: 0 });
    expect(result).toBe("critical");
  });
});

// Тест для проверки, что функция выбрасывает ошибку при передаче некорректного параметра
test("должен выбросить ошибку при передаче некорректного параметра", () => {
  expect(() => showHealth({ name: "Маг", health: "invalid" })).toThrow(
    "Parameter is not a number!"
  );
});
