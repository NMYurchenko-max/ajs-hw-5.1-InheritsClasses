import "../css/style.css";
import sortUnits from './utils/sort';
import getHealthStatus from "./utils/getHealthStatus"; // Используется для цвета состояния здоровья
import Bowman from './classes/Bowman'; // Импортируем классы персонажей
import Swordsman from './classes/Swordsman';
import Magician from './classes/Magician';
import Undead from './classes/Undead';
import Zombie from './classes/Zombie';
import Daemon from './classes/Daemon';

// Создание экземпляров персонажей
const robbin = new Bowman('Робин');
const arthur = new Swordsman('Артур');
const merlin = new Magician('Мерлин');
const lazarus = new Undead('Лазарь');
const harry = new Zombie('Гарри');
const azazel = new Daemon('Азазель');

// Массив персонажей
const characters = [robbin, arthur, merlin, lazarus, harry, azazel];

// Функция для отображения персонажей
function displayCharacters(characters) {
  const charactersContainer = document.getElementById('characters');
  charactersContainer.innerHTML = ''; // Очистка контейнера

  characters.forEach(character => {
    const characterDiv = document.createElement('div');
    const healthColor = getHealthStatus(character); // Получаем цвет здоровья
    characterDiv.className = `character ${healthColor}`; // Применяем класс здоровья
    characterDiv.textContent = `${character.name} (${character.type}): Здоровье ${character.health}, Атака ${character.attack}, Защита ${character.defenсe}`;
    charactersContainer.appendChild(characterDiv);
  });
}

// Функция для сортировки персонажей
function sortCharacters() {
  const criteria = document.getElementById('sort-criteria').value;
  const sorted = sortUnits(characters, criteria);
  displayCharacters(sorted);
}

// Изначально отображаем всех персонажей
displayCharacters(characters);

// Экспорт функции для использования в HTML
window.sortCharacters = sortCharacters;
