import React, { useState, useEffect } from 'react';
import './Products.css';

function Products() {
  const [products, setProducts] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [addProductName, setAddProductName] = useState('');
  const [addProductPrice, setAddProductPrice] = useState('');
  const [addProductCategory, setAddProductCategory] = useState('');
  const [addProductQuantity, setAddProductQuantity] = useState('');
  const [editProductName, setEditProductName] = useState('');
  const [editProductPrice, setEditProductPrice] = useState('');
  const [editProductCategory, setEditProductCategory] = useState('');
  const [editProductQuantity, setEditProductQuantity] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(savedProducts);
  }, []);

  const handleAddProduct = () => {
    const newProduct = {
      id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
      name: addProductName,
      price: addProductPrice,
      category: addProductCategory,
      quantity: addProductQuantity
    };

    setProducts([...products, newProduct]);
    setIsAddModalOpen(false);
    setAddProductName('');
    setAddProductPrice('');
    setAddProductCategory('');
    setAddProductQuantity('');
    localStorage.setItem('products', JSON.stringify([...products, newProduct]));
  };

  const handleEditProduct = () => {
    if (selectedProduct) {
      const updatedProduct = {
        ...selectedProduct,
        name: editProductName,
        price: editProductPrice,
        category: editProductCategory,
        quantity: editProductQuantity
      };

      const updatedProducts = products.map(product =>
        product.id === selectedProduct.id ? updatedProduct : product
      );
      setProducts(updatedProducts);
      setIsEditModalOpen(false);
      setSelectedProduct(null);
      localStorage.setItem('products', JSON.stringify(updatedProducts));
      localStorage.setItem('productsCount', updatedProducts.length);
    }
  };

  const openEditModal = (product) => {
    setSelectedProduct(product);
    setEditProductName(product.name);
    setEditProductPrice(product.price);
    setEditProductCategory(product.category);
    setEditProductQuantity(product.quantity);
    setIsEditModalOpen(true);
  };

  const handleDeleteProduct = (productToDelete) => {
    const updatedProducts = products.filter(product => product.id !== productToDelete.id);
    // Reassign IDs to products after deletion
    const updatedProductsIds = updatedProducts.map((product, index) => ({
      ...product,
      id: index + 1
    }));
    setProducts(updatedProductsIds);
    localStorage.setItem('products', JSON.stringify(updatedProductsIds));
  };

  return (
    <main className='main-container'>
      <div className="header">
        <h2>Products Management</h2>
      </div>

      <div className="products-container">
        <button className="add-product-btn" onClick={() => setIsAddModalOpen(true)}>Add Product</button>
        <table className="product-table">
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Stock Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>{product.quantity}</td>
                <td>
                  <button onClick={() => openEditModal(product)}>Edit</button>
                  <button onClick={() => handleDeleteProduct(product)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Product Modal */}
      {isAddModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsAddModalOpen(false)}>&times;</span>
            <h2>Add Product</h2>
            <form>
              <div className="form-group">
                <label htmlFor="addProductName">Product Name:</label>
                <input type="text" id="addProductName" value={addProductName} onChange={(e) => setAddProductName(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="addProductPrice">Price:</label>
                <input type="text" id="addProductPrice" value={addProductPrice} onChange={(e) => setAddProductPrice(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="addProductCategory">Category:</label>
                <input type="text" id="addProductCategory" value={addProductCategory} onChange={(e) => setAddProductCategory(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="addProductQuantity">Stock Quantity:</label>
                <input type="text" id="addProductQuantity" value={addProductQuantity} onChange={(e) => setAddProductQuantity(e.target.value)} />
              </div>
            </form>
            <button onClick={handleAddProduct}>Add Product</button>
          </div>
        </div>
      )}

      {/* Edit Product Modal */}
      {isEditModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsEditModalOpen(false)}>&times;</span>
            <h2>Edit Product</h2>
            <form>
              <div className="form-group">
                <label htmlFor="editProductName">Product Name:</label>
                <input type="text" id="editProductName" value={editProductName} onChange={(e) => setEditProductName(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="editProductPrice">Price:</label>
                <input type="text" id="editProductPrice" value={editProductPrice} onChange={(e) => setEditProductPrice(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="editProductCategory">Category:</label>
                <input type="text" id="editProductCategory" value={editProductCategory} onChange={(e) => setEditProductCategory(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="editProductQuantity">Stock Quantity:</label>
                <input type="text" id="editProductQuantity" value={editProductQuantity} onChange={(e) => setEditProductQuantity(e.target.value)} />
              </div>
            </form>
            <button onClick={handleEditProduct}>Save Changes</button>
          </div>
        </div>
      )}
    </main>
  );
}

export default Products;
