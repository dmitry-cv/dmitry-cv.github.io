# Портфолио Дмитрия Медушевского

Статический сайт: `index.html` (русский), `en/index.html` (английский), `css/style.css`, `js/main.js`, картинки в `img/`.

Посетители, у которых язык браузера не русский (и не украинский, белорусский, казахский), автоматически
попадают на `en/`. Язык, выбранный переключателем RU/EN, запоминается в `localStorage`.
При правке текста обновляйте обе версии.

## Запуск без Docker
Открыть `index.html` в браузере.

## Запуск в Docker
```
docker build -t medushevsky-portfolio .
docker run -d -p 8080:80 --name portfolio medushevsky-portfolio
```
Сайт: http://localhost:8080

## Публикация
Сайт публикуется на GitHub Pages автоматически при каждом push в `main`
(`.github/workflows/pages.yml`).
