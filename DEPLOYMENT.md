# 🚀 Бесплатный хостинг и деплой MVP (Vite + React)

Этот проект — одностраничное приложение (SPA) на Vite + React. Ниже — три бесплатных способа развернуть его и показать функционал заказчику.

Важно: в репозитории уже добавлены готовые конфиги для Vercel и Netlify.

1) Vercel (самый быстрый)
- Что это: Бесплатный хостинг от Vercel с автоматическим билдом.
- Что уже сделано в репо: vercel.json с SPA‑роутингом.
- Шаги:
  1. Зайдите на https://vercel.com и войдите через GitHub/GitLab/Bitbucket.
  2. Нажмите New Project → Import Git Repository → выберите ваш репозиторий с проектом.
  3. Vercel определит Vite автоматически. Если нужно, убедитесь:
     - Build Command: npm run build
     - Output Directory: dist
  4. Deploy. Через ~1 минуту получите прод-URL вида https://your-app.vercel.app
- Преимущества: авто‑деплой по пушу, HTTPS, превью‑деплой для PR.

2) Netlify
- Что это: Бесплатный хостинг SPA с удобной панелью.
- Что уже сделано в репо: netlify.toml с настройкой билда и SPA‑редиректом.
- Вариант A: через Git
  1. Зайдите на https://app.netlify.com → Add new site → Import an existing project.
  2. Подключите репозиторий.
  3. Netlify прочитает netlify.toml:
     - Build command: npm run build
     - Publish directory: dist
  4. Deploy.
- Вариант B: вручную (drag‑and‑drop)
  1. Локально соберите проект: npm ci && npm run build
  2. Перетащите папку dist в Netlify Drop: https://app.netlify.com/drop

3) GitHub Pages (тоже бесплатно)
- Что это: Статический хостинг от GitHub.
- Особенность: для Vite иногда нужен base в vite.config.ts, если деплой не в корень домена.
- Шаги (через GitHub Actions):
  1. Убедитесь, что проект в GitHub репозитории.
  2. В Settings → Pages выберите Deploy from a branch → gh-pages (после первого деплоя появится).
  3. Добавьте воркфлоу .github/workflows/deploy.yml со сборкой Vite и публикацией в gh-pages (пример ниже).
  4. После первого прогона получите URL вида https://<username>.github.io/<repo>/

Пример GitHub Actions воркфлоу (deploy.yml):

name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
permissions:
  contents: write
jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist

Подсказки и частые вопросы
- SPA роутинг: уже настроен для Vercel (routes → index.html) и Netlify (redirect /* → /index.html 200).
- Переменные окружения: добавляйте в настройках хостинга. Для Vercel — вкладка Settings → Environment Variables.
- Node версия: если потребуется, выставьте 20.x в настройках проекта на хостингах.
- Команда билда: npm run build (см. package.json).

Итого
- Самый простой старт: Vercel — импорт репозитория → Deploy.
- Альтернатива: Netlify с netlify.toml.
- Если нужен GitHub Pages — используйте предложенный воркфлоу.
