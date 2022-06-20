'use strict';

class ProductDTO {
    /**
     * @param {string} name имя товара
     * @param {number} price цена товара
     */
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

/**
 * Сами продукты с названием товара и ценой.
 */
const products = [
    new ProductDTO(
        'Product 0',
        32.45,
    ),
    new ProductDTO(
        'Product 1',
        52,
    ),
    new ProductDTO(
        'Product 2',
        49.99,
    ),
    new ProductDTO(
        'Product 3',
        43.12,
    ),
    new ProductDTO(
        'Product 4',
        98,
    ),
    new ProductDTO(
        'Product 5',
        15,
    ),
    new ProductDTO(
        'Product 6',
        66,
    ),
    new ProductDTO(
        'Product 7',
        49.50,
    ),
    new ProductDTO(
        'Product 8',
        14,
    ),
];
