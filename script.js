let allData = [];

async function loadData() {
  const source = document.getElementById("source").value;
  const loading = document.getElementById("loading");

  loading.style.display = "block";

  try {
    if (source === "github") {
      await loadGitHub();
    } else {
      await loadNews();
    }
  } catch (err) {
    document.getElementById("container").innerHTML = "<p>Error loading data</p>";
  }

  loading.style.display = "none";
}


async function loadGitHub() {
  const res = await fetch("https://api.github.com/search/repositories?q=stars:>50000&sort=stars");
  const data = await res.json();

  allData = data.items;
  displayGitHub(allData);
}

function displayGitHub(repos) {
  const container = document.getElementById("container");
  container.innerHTML = "";

  repos.forEach(repo => {
    container.innerHTML += `
      <div class="card">
        <h3>${repo.name}</h3>
        <p>⭐ ${repo.stargazers_count}</p>
        <p>${repo.language || "N/A"}</p>
      </div>
    `;
  });
}

async function loadNews() {
  const res = await fetch("https://gnews.io/api/v4/top-headlines?lang=en&token=5cf6de38844a7202ced9a57226ee4859");
  const data = await res.json();

  allData = data.articles;
  displayNews(allData);
}

function displayNews(articles) {
  const container = document.getElementById("container");
  container.innerHTML = "";

  articles.forEach(a => {
    container.innerHTML += `
      <div class="card">
        <h3>${a.title}</h3>
        <p>${a.source.name}</p>
      </div>
    `;
  });
}

function sortData() {
  const source = document.getElementById("source").value;

  const sorted = [...allData].sort((a, b) =>
    (b.stargazers_count || 0) - (a.stargazers_count || 0)
  );

  if (source === "github") {
    displayGitHub(sorted);
  } else {
    displayNews(sorted);
  }
}