document.addEventListener('DOMContentLoaded', function () {
    const cartItems = [];

    // Função para adicionar produtos ao carrinho
    function addToCart(productId, productName, productPrice) {
        const cartItem = { id: productId, name: productName, price: productPrice };
        cartItems.push(cartItem);

        // Informe ao usuário que o produto foi adicionado ao carrinho (opcional)
        alert(`Produto "${productName}" adicionado ao carrinho!`);

        // Atualize a exibição do carrinho
        updateCartView();
    }

    // Função para atualizar a exibição do carrinho
    function updateCartView() {
        const cartItemsList = document.getElementById('cartItems');
        const cartTotal = document.getElementById('cartTotal');

        // Limpe a lista de itens do carrinho
        cartItemsList.innerHTML = '';

        // Adicione cada item do carrinho à lista
        cartItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.classList.add('list-group-item');
            listItem.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
            cartItemsList.appendChild(listItem);
        });

        // Calcular e exibir o total da compra
        const total = cartItems.reduce((acc, item) => acc + item.price, 0);
        cartTotal.textContent = total.toFixed(2);
    }

    // Capturar os botões de adição ao carrinho
    const addToCartButtons = document.querySelectorAll('.addToCartBtn');

    // Adicionar evento de clique a cada botão
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const productId = this.getAttribute('data-product-id');
            const productName = this.getAttribute('data-product-name');
            const productPrice = parseFloat(this.getAttribute('data-product-price'));

            // Adicione as informações do produto ao carrinho
            addToCart(productId, productName, productPrice);
        });
    });
});








// let cartItems = [];

// // Função para adicionar um produto ao carrinho
// function addToCart(product) {
//     cartItems.push(product);
//     updateCart();
// }

// // Função para atualizar a exibição do carrinho na página HTML
// function updateCart() {
//     const cartList = document.getElementById('cartItems');
//     const cartTotal = document.getElementById('cartTotal');
    
//     // Limpa a lista atual no carrinho
//     cartList.innerHTML = '';

//     // Se o carrinho estiver vazio, exibe uma mensagem indicando isso
//     if (cartItems.length === 0) {
//         cartList.innerHTML = '<li class="list-group-item">Carrinho Vazio</li>';
//         cartTotal.textContent = '0.00';
//     } else {
//         // Adiciona cada item ao carrinho à lista
//         let total = 0;
//         cartItems.forEach(item => {
//             const listItem = document.createElement('li');
//             listItem.className = 'list-group-item';
//             listItem.textContent = `${item.name} - R$${item.price.toFixed(2)}`;
//             cartList.appendChild(listItem);

//             // Soma o preço ao total
//             total += item.price;
//         });

//         // Atualiza o total do carrinho
//         cartTotal.textContent = total.toFixed(2);
//     }
// }

// // Evento de clique nos botões "Adicionar ao Carrinho"
// const addToCartButtons = document.querySelectorAll('.addToCartBtn');
// addToCartButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         const productId = button.getAttribute('data-product-id');
//         const productName = button.getAttribute('data-product-name');
//         const productPrice = parseFloat(button.getAttribute('data-product-price'));

//         // Cria um objeto representando o produto
//         const product = {
//             id: productId,
//             name: productName,
//             price: productPrice
//         };

//         // Adiciona o produto ao carrinho
//         addToCart(product);
//     });
// });

// // Atualiza o carrinho ao carregar a página
// document.addEventListener('DOMContentLoaded', () => {
//     updateCart();
// });











  document.addEventListener('DOMContentLoaded', function () {
    var cart = []; // Array para armazenar os itens do carrinho

    // Adicione um ouvinte de evento a todos os botões "Adicionar ao Carrinho"
    var addToCartButtons = document.querySelectorAll('.addToCartBtn');
    addToCartButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        // Obtenha informações do produto do botão clicado
        var productId = button.getAttribute('data-product-id');
        var productName = button.getAttribute('data-product-name');
        var productPrice = parseFloat(button.getAttribute('data-product-price'));

        // Adicione o produto ao carrinho
        cart.push({ id: productId, name: productName, price: productPrice });

        // Exiba uma mensagem indicando que o produto foi adicionado ao carrinho (você pode substituir por uma abordagem visual mais sofisticada)
        alert('Produto adicionado ao carrinho: ' + productName);

        // Exiba o carrinho atual no console (para fins de depuração)
        console.log(cart);
      });
    });
  });