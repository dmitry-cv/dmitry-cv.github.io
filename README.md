# Портфолио Дмитрия Медушевского

Статический сайт: `index.html` (русский), `en/index.html` (английский), `css/style.css`, `js/main.js`, картинки в `img/`.

Посетители, у которых язык браузера не русский (и не украинский, белорусский, казахский), автоматически
попадают на `en/`. Язык, выбранный переключателем RU/EN, запоминается в `localStorage`.
При правке текста обновляйте обе версии.

## PDF
Кнопка «Скачать PDF» / «Download PDF» скачивает файл `pdf/Medushevsky-portfolio-ru.pdf` / `-en.pdf`.
Файлы собираются при деплое (`.github/workflows/pages.yml`): headless Chrome печатает страницу, Ghostscript сжимает картинки.
В репозитории их нет, поэтому при запуске без Docker и в Docker кнопка даёт 404.
Вид PDF задаётся блоком `@media print` в конце `css/style.css`.

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
