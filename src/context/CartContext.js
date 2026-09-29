import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [carrinho, setCarrinho] = useState([]);

  function adicionarAoCarrinho(produto, tamanho) {
    const novoItem = {
      ...produto,
      tamanho,
      quantidade: 1,
    };

    setCarrinho((carrinhoAtual) => [...carrinhoAtual, novoItem]);
  }

  function aumentarQuantidade(index) {
    setCarrinho((carrinhoAtual) =>
      carrinhoAtual.map((item, i) =>
        i === index
          ? { ...item, quantidade: item.quantidade + 1 }
          : item
      )
    );
  }

 function diminuirQuantidade(index) {
  setCarrinho((carrinhoAtual) =>
    carrinhoAtual.map((item, i) =>
      i === index && item.quantidade > 1
        ? { ...item, quantidade: item.quantidade - 1 }
        : item
    )
  );
}

function removerDoCarrinho(index) {
  setCarrinho((carrinhoAtual) =>
    carrinhoAtual.filter((item, i) => i !== index)
  );
}
function limparCarrinho() {
  setCarrinho([]);
}

  return (
    <CartContext.Provider
      value={{
        carrinho,
        adicionarAoCarrinho,
        aumentarQuantidade,
        diminuirQuantidade,
        removerDoCarrinho,
        limparCarrinho,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}