const products = [
  {
    title: "Classic Sneakers",
    price: "$79",
    stock: "In stock",
    image: "https://images.unsplash.com/photo-1528701800489-20b0b38d8d16?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Modern Backpack",
    price: "$54",
    stock: "Only 12 left",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Wireless Headphones",
    price: "$129",
    stock: "In stock",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Daily Tote Bag",
    price: "$34",
    stock: "Low stock",
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Cozy Hoodie",
    price: "$49",
    stock: "In stock",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Smart Watch",
    price: "$199",
    stock: "12 on hand",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80"
  }
];

const productList = document.getElementById("productList");

products.forEach(product => {
  const card = document.createElement("article");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${product.image}" alt="${product.title}" />
    <div class="product-body">
      <h3 class="product-title">${product.title}</h3>
      <p class="product-price">${product.price}</p>
      <p class="product-meta">${product.stock}</p>
    </div>
  `;
  productList.appendChild(card);
});
