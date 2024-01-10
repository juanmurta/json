let invoice = {
	name: "Juan",
    age: 35,
    products: {
    	0: ["mouse 2xwm", 29.90],
        1: ["Teclado mecânico", 129.99],
        2: ["Monitor", 899.99],
        3: ["TV 100 polegadas", 10000.90]
    },
    taxes: 98.90
}


generateInvoice(invoice)

function generateInvoice(invoice){
    console.log(`O comprador é: ${invoice.name}`)
    console.log("A idade é: " + invoice.age)
    console.log("---------------")

    for(let index in invoice.products){
        let [productsName, productsPrice] = invoice.products[index]
        console.log(`- ${productsName}: R$ ${productsPrice}`)
    }

}
