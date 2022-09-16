const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

// console.log(Object.values(order.order.delivery)[0]);

const customerInfo = (order) => {
  let name = Object.values(order.order.delivery)[0];
  let address = Object.values(order.address);
  let orderList = Object.values(order);
  console.log(`Ola ${name}, entrega para: ${orderList[0]}, telefone: ${orderList[1]}, R. ${address[0]}, Nº ${address[1]}, AP: ${address[2]}.`);
  return order
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.

}

orderModifier(order);