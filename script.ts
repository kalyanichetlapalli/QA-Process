type Product = {
  title: string;
  price: string;
  stock: string;
  image: string;
};

type Theme = "light" | "dark";

const products: Product[] = [
  {
    title: "Classic Sneakers",
    price: "₹3,299",
    stock: "In stock",
    image: "https://images.unsplash.com/photo-1528701800489-20b0b38d8d16?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Modern Backpack",
    price: "₹1,899",
    stock: "Only 12 left",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Wireless Headphones",
    price: "₹4,499",
    stock: "In stock",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Daily Tote Bag",
    price: "₹899",
    stock: "Low stock",
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Cozy Hoodie",
    price: "₹1,499",
    stock: "In stock",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Smart Watch",
    price: "₹8,999",
    stock: "12 on hand",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Sports Cap",
    price: "₹549",
    stock: "In stock",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Bluetooth Speaker",
    price: "₹2,299",
    stock: "Only 5 left",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80"
  }
];

function stockBadgeClass(stock: string): string {
  const s = stock.toLowerCase();
  if (s.includes("low") || s.includes("only")) return "status-warning";
  if (s.includes("in stock")) return "status-success";
  return "status-info";
}

const productList = document.getElementById("productList") as HTMLDivElement | null;

if (productList) {
  products.forEach((product) => {
    const card = document.createElement("article");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}" />
      <div class="product-body">
        <h3 class="product-title">${product.title}</h3>
        <p class="product-price">${product.price}</p>
        <span class="status-badge ${stockBadgeClass(product.stock)}">${product.stock}</span>
      </div>
    `;
    productList.appendChild(card);
  });
}

const THEME_KEY = "shopdash-theme";
const root = document.documentElement;
const themeBtn = document.getElementById("themeToggle") as HTMLButtonElement | null;

function applyTheme(theme: Theme): void {
  root.setAttribute("data-theme", theme);
  if (themeBtn) {
    themeBtn.textContent = theme === "dark" ? "☀" : "🌙";
    themeBtn.setAttribute(
      "aria-label",
      theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
    );
  }
}

const stored = localStorage.getItem(THEME_KEY) as Theme | null;
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
applyTheme(stored ?? (prefersDark ? "dark" : "light"));

themeBtn?.addEventListener("click", () => {
  const next: Theme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  localStorage.setItem(THEME_KEY, next);
  applyTheme(next);
});
