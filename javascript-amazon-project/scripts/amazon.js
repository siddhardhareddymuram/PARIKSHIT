let productHTML = '';

products.forEach((product) => {
  const ratingStars = Math.round(product.rating.stars * 10);

  productHTML += `
    <div class="product-container">
      <div class="product-image-container">
        <img class="product-image" src="${product.image}">
      </div>

      <div class="product-name limit-text-to-2-lines">
        ${product.name}
      </div>

      <div class="product-rating-container">
        <img class="product-rating-stars"
          src="images/ratings/rating-${ratingStars}.png">
        <div class="product-rating-count link-primary">
          ${product.rating.count}
        </div>
      </div>

      <div class="product-price">
        $${(product.priceCents / 100).toFixed(2)}
      </div>

      <button class="add-to-cart-button button-primary js-add-to-cart "
      data-product-name="${product.name}">
        Add to Cart
      </button>
    </div>
  `;
});

document.querySelector('.js-product-grid').innerHTML = productHTML;
document.querySelectorAll('.js-add-to-cart')
  .forEach(button =>
    button.addEventListener('click', () =>
      console.log('Added Product')
    )
  );

