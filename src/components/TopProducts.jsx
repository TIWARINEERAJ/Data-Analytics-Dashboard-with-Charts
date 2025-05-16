import React from 'react';
import './TopProducts.css';

const products = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    category: 'Electronics',
    sales: 1245,
    revenue: '$24,900',
    growth: '+12.4%'
  },
  {
    id: 2,
    name: 'Smart Watch Series 5',
    category: 'Wearables',
    sales: 986,
    revenue: '$19,720',
    growth: '+8.7%'
  },
  {
    id: 3,
    name: 'Laptop Pro 16"',
    category: 'Computers',
    sales: 745,
    revenue: '$89,400',
    growth: '+5.2%'
  },
  {
    id: 4,
    name: 'Wireless Earbuds',
    category: 'Audio',
    sales: 634,
    revenue: '$12,680',
    growth: '-2.3%'
  }
];

const TopProducts = () => {
  return (
    <div className="top-products">
      <table className="products-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Sales</th>
            <th>Revenue</th>
            <th>Growth</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>
                <div className="product-info">
                  <div className="product-name">{product.name}</div>
                  <div className="product-category">{product.category}</div>
                </div>
              </td>
              <td>{product.sales}</td>
              <td>{product.revenue}</td>
              <td className={product.growth.startsWith('+') ? 'positive' : 'negative'}>
                {product.growth}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopProducts;
