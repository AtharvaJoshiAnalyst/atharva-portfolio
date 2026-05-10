// ─────────────────────────────────────────────────────────────────
// EDIT THIS FILE TO ADD/UPDATE PROJECTS
// ─────────────────────────────────────────────────────────────────
// Each project has two link options:
//   • repo  — a GitHub URL (gets a "Code" button with a GitHub icon)
//   • demo  — any other URL (auto-detected: Kaggle, Tableau, Power BI,
//             Colab, blog post, deployed dashboard, etc.)
//
// The card auto-picks the right icon and label based on the URL.
// Set either field to '' to hide that button.
//
// To add a Kaggle notebook:
//   demo: 'https://www.kaggle.com/code/your-username/notebook-slug'
//
// To add both a GitHub mirror AND a Kaggle live link, use the `links`
// array (see the last project below for an example).
// ─────────────────────────────────────────────────────────────────

export const projects = [
  {
    id: 1,
    title: 'Sentiment Prediction by using LLMs on Amazon Reviews',
    blurb:
      '',
    tags: ['Python', 'NLP', 'LLMs'],
    category: 'Machine Learning',
    year: '2025',
    repo: 'https://www.kaggle.com/code/atharvaj9/sentiment-analysis-using-large-language-model-llms',
    demo: '',
    accent: 'from-amber-500/20 to-rose-500/10',
  },
  {
    id: 2,
    title: 'Cyclists Churn Analysis',
    blurb:
      'Data Analysis of cyclist churn behavior using Python and Pandas to understand patterns and trend behaviors in Casual Riders and Annual Members.',
    tags: ['Python','Pandas'],
    category: 'Data Analysis',
    year: '2024',
    repo: 'https://www.kaggle.com/code/atharvaj9/google-data-analytics-case-study-cyclists',
    demo: '',
    accent: 'from-blue-500/20 to-cyan-500/10',
  },
  {
    id: 3,
    title: 'BellaBeat Case Study: Health Data Tracker',
    blurb:
      'Data analysis case study on BellaBeat’s health tracker data. Cleaned and modeled user activity, sleep, and stress metrics to identify engagement drivers. Also performed regression analysis to predict health score based on activity patterns.',
    tags: ['SQL', 'Python', 'Pandas'],
    category: 'Data Analysis',
    year: '2023',
    repo: 'https://www.kaggle.com/code/atharvaj9/bellabeat-case-study',
    demo: '',
    accent: 'from-emerald-500/20 to-teal-500/10',
  },
  {
    id: 4,
    title: 'Netflix EDA Analysis (Shows vs Movies)',
    blurb:
      'Exploratory analysis of Netflix content library. Compared trends in show vs movie releases, genres, and ratings over time.',
    tags: ['Tableau', 'Python'],
    category: 'Exploratory Data Analysis',
    year: '2023',
    repo: 'https://www.kaggle.com/code/atharvaj9/netflix-eda-shows-vs-movies',
    demo: '',
    accent: 'from-orange-500/20 to-yellow-500/10',
  },
]

export const categories = ['All', 'Data Analysis', 'Exploratory Data Analysis', 'Machine Learning']
