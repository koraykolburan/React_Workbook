const products = [
     { title: 'Cabbage', isFruit: false, id: 1 },
     { title: 'Broccoli', isFruit: false, id: 2 },
     { title: 'Orange', isFruit: true, id: 3 },
     { title: 'Peach', isFruit: true, id: 4 },
]

export default function ShoppingList() {
     const listItems = products.map(product =>
          <li
               key={product.id}
               style={{
                    color: product.isFruit ? 'magenta' : 'darkgreen'
               }}
          >
               {product.title}
          </li>
     );

     return (
          <ul>{listItems}</ul>
     );
}