// Sample Product Data
const products = [
  {
    name: "Galaxy Z Fold5",
    description: "Revolutionary foldable phone with immersive display.",
    image: "images/fold5.jpg"
  },
  {
    name: "Galaxy S23 Ultra",
    description: "Pro-grade camera and fastest performance.",
    image: "images/galaxy.jpg"
  },
  {
    name: "Samsung Neo QLED TV",
    description: "8K clarity with quantum matrix technology.",
    image: "images/tv.jpg"
  },
];


// Sample Winners Data
const winners = [
  {
    name: "Eva Maurice",
    prize: "$800,000",
    image: "images/recent1.jpg"
  },
  {
    name: "John Walker",
    prize: "$800,000",
    image: "images/recent2.jpg"
  },
  {
    name: "Sarah Kim",
    prize: "$800,000",
    image: "images/recent3.jpg"
  }
];


const productGrid = document.getElementById('product-grid');
const winnersGrid = document.getElementById('winners-grid');

// Inject products
products.forEach(product => {
  productGrid.innerHTML += `
    <div class="card">
      <div class="image-card">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="card-body">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
      </div>
    </div>`;
});

winners.forEach(winner => {
  winnersGrid.innerHTML += `
    <div class="card">
      <div class="image-card">
        <img src="${winner.image}" alt="${winner.name}">
      </div>
      <div class="card-body">
        <h3>${winner.name}</h3>
        <p>Won: ${winner.prize}</p>
      </div>
    </div>`;
});