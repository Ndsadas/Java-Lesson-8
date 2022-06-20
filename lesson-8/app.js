'use strict';

let basketClose = document.querySelector('.basket');
let basketOpen = document.querySelector('.extIconWrap');
let basketTotalEl = document.querySelector('.basketTotal');
let basketTotalValue = document.querySelector('.basketTotalValue');

/**
 * 
 * Функция срабатывает, когда добавляют элемент(ы) в корзину.
 * @param {number} productId 
 */
function addProductiInToBasket(productId) {
    basketContent();
    addProductToObject(productId);
    renderProductInBasket(productId);
    calculateAndRenderTotalBasketSum();
}

/**
 * Обработчик клика событий на кнопке.
 */
let buttons = document.querySelectorAll('button');
buttons.forEach(function (button) {
    button.addEventListener('click', addedProductHandler);
});

/**
 * Функция обрабатывает клик на кнопке "Add to cart".
 * @param {MouseEvent} event 
 */

function addedProductHandler(event) {
    let productId = event.currentTarget.id
    addProductiInToBasket(productId);
}

/**
 * Показать(скрыть) корзину.
 */
basketOpen.addEventListener('click', function () {
    basketClose.classList.toggle('close');
});

/**
 * Функция добавляет продукты в карзину.
 * @param {number} productId 
 */
let basket = {};
function addProductToObject(productId) {
    if (!(productId in basket)) {
        basket[productId] = 1;
    } else {
        basket[productId]++;
    }
}

/**
 * Функция для рисования продуктов в корзине.
 * @param {number} productId 
 */
function renderProductInBasket(productId) {
    let productExist = document.querySelector(`.productCount[data-productId="${productId}"]`);
    if (productExist) {
        increaseProductCount(productId);
        recalculateSumForProduct(productId);
    } else {
        renderNewProductInBasket(productId);
    }
}

/**
 * Функция рисует продукты в корзине.
 * @param {number} productId 
 */
function renderNewProductInBasket(productId) {
    let productRow = `
        <div class="basketRow">
            <div>${products[productId].name}</div>
            <div>
                <span class="productCount" data-productId="${productId}">1</span> шт.
            </div>
            <div>$${products[productId].price}</div>
            <div>
                $<span class="productTotalRow" data-productId="${productId}">${products[productId].price}</span>
            </div>
        </div>
    `;
    basketTotalEl.insertAdjacentHTML("beforebegin", productRow);
}

/**
 * Функция увеличивает счетчик количества рядом с иконкой.
 */
let basketElement = document.querySelector('.extIconWrap span');
function basketContent() {
    basketElement.textContent++;
}

/**
 * Функция увеличивает количество (шт) товаров в корзине.
 * @param {number} productId 
 */
function increaseProductCount(productId) {
    const productCountEl = document.querySelector(`.productCount[data-productId="${productId}"]`);
    productCountEl.textContent++;
}

/**
 * Функция считает стоимость товара
 * @param {number} productId 
 */
function recalculateSumForProduct(productId) {
    const productTotalRowEl = document.querySelector(`.productTotalRow[data-productId="${productId}"]`);
    let totalPriceForRow = (basket[productId] * products[productId].price).toFixed(2);
    productTotalRowEl.textContent = totalPriceForRow;
}

/**
 * Функция считает ОБЩУЮ стоимость товаров в корзине.
 */
function calculateAndRenderTotalBasketSum() {
    let totalSum = 0;
    for (let productId in basket) {
        totalSum += basket[productId] * products[productId].price;
    }
    basketTotalValue.textContent = totalSum.toFixed(2);
}