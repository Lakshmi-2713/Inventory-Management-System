import { useEffect, useState } from "react";
import API from "./services/api";
import DashboardChart from "./components/DashboardChart";
import CategoryPieChart from "./components/CategoryPieChart";


function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);

  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
    minStock: "",
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await API.get("/");
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addProduct = async () => {
    try {
      if (editId) {
  await API.put(`/${editId}`, newProduct);
  setEditId(null);
} else {
  await API.post("/", newProduct);
}

      setNewProduct({
        name: "",
        category: "",
        price: "",
        quantity: "",
        minStock: "",
      });

      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };
   const handleEdit = (product) => {
    setNewProduct({
      name: product.name,
      category: product.category,
      price: product.price,
      quantity: product.quantity,
      minStock: product.minStock,
    });

    setEditId(product._id);
  };

  const deleteProduct = async (id) => {
    try {
      await API.delete(`/${id}`);
      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const increaseQuantity = async (product) => {
    try {
      await API.put(`/${product._id}`, {
        ...product,
        quantity: product.quantity + 1,
      });

      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const decreaseQuantity = async (product) => {
    try {
      if (product.quantity <= 0) return;

      await API.put(`/${product._id}`, {
        ...product,
        quantity: product.quantity - 1,
      });

      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const editProduct = async (product) => {
    const newName = prompt("Enter Product Name", product.name);
    const newPrice = prompt("Enter Price", product.price);

    if (!newName || !newPrice) return;

    try {
      await API.put(`/${product._id}`, {
        ...product,
        name: newName,
        price: Number(newPrice),
      });

      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const lowStockCount = products.filter(
    (p) => p.quantity <= p.minStock
  ).length;

  const totalValue = products.reduce(
    (total, product) =>
      total + product.price * product.quantity,
    0
  );

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Inventory Management System</h1>

      <h2>Total Products: {products.length}</h2>

      <h2>Low Stock Products: {lowStockCount}</h2>

      <h2>Total Inventory Value: ₹{totalValue}</h2>

      <hr />

      <h2>Add Product</h2>

      <input
        type="text"
        placeholder="Product Name"
        value={newProduct.name}
        onChange={(e) =>
          setNewProduct({
            ...newProduct,
            name: e.target.value,
          })
        }
      />

      <input
        type="text"
        placeholder="Category"
        value={newProduct.category}
        onChange={(e) =>
          setNewProduct({
            ...newProduct,
            category: e.target.value,
          })
        }
      />

      <input
        type="number"
        placeholder="Price"
        value={newProduct.price}
        onChange={(e) =>
          setNewProduct({
            ...newProduct,
            price: e.target.value,
          })
        }
      />

      <input
        type="number"
        placeholder="Quantity"
        value={newProduct.quantity}
        onChange={(e) =>
          setNewProduct({
            ...newProduct,
            quantity: e.target.value,
          })
        }
      />

      <input
        type="number"
        placeholder="Minimum Stock"
        value={newProduct.minStock}
        onChange={(e) =>
          setNewProduct({
            ...newProduct,
            minStock: e.target.value,
          })
        }
      />

     <button onClick={addProduct}>
  {editId ? "Update Product" : "Add Product"}
</button>

      <hr />

      <input
        type="text"
        placeholder="Search Product"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <hr />

      <DashboardChart products={products} />

      <hr />

      <CategoryPieChart products={products} />

      <hr />

      {filteredProducts.map((product) => (
        <div
          key={product._id}
          style={{
            border: "1px solid gray",
            padding: "20px",
            margin: "20px",
            borderRadius: "10px",
            background:
              product.quantity <= product.minStock
                ? "#ffd6d6"
                : "#272626",
          }}
        >
          <h2>{product.name}</h2>

          <p>Category: {product.category}</p>

          <p>Price: ₹{product.price}</p>

          <p>Quantity: {product.quantity}</p>

          <p>Minimum Stock: {product.minStock}</p>

          {product.quantity <= product.minStock && (
            <h3 style={{ color: "red" }}>
              ⚠ Low Stock Alert
            </h3>
          )}

          <button
            onClick={() => increaseQuantity(product)}
          >
            +
          </button>

          <button
            onClick={() => decreaseQuantity(product)}
            style={{ marginLeft: "10px" }}
          >
            -
          </button>

          <button
            onClick={() => handleEdit(product)}
            style={{ marginLeft: "10px" }}
          >
            Edit
          </button>

          <button
            onClick={() => deleteProduct(product._id)}
            style={{ marginLeft: "10px" }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;