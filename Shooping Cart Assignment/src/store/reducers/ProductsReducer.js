const initState = {
    products: [
        {id: 1, name: 'The Other Black Girl', image: '1.jpg', price: 500, discount: 20, discountPrice: 500  - 20 / 100 * 500, quantity: 1, desc: "By - ZAKIYA DALILA HARRIS"},
        {id: 2, name: 'Where the Crawdads Sing', image: '2.jpg', price: 300, discount: 50, discountPrice: 300  - 50 / 100 * 300, quantity: 1, desc: "By - DELIA OWENS"},
        {id: 3, name: 'Harry Potter and Philosophers Stone', image: '3.jpg', price: 1500, discount: 30, discountPrice: 1500  - 30 / 100 * 1500, quantity: 1, desc: "By - J.K. ROWLING"},
        {id: 4, name: 'The Guest List', image: '4.jpg', price: 500, discount: 40, discountPrice: 500  - 40 / 100 * 500, quantity: 1, desc: "By - LUCY FOLEY"},
        {id: 5, name: 'Our Country Friends', image: '5.jpg', price: 250, discount: 20, discountPrice: 250  - 20 / 100 * 250, quantity: 1, desc: "By - GARY SHTEYNGART"},
        {id: 6, name: 'Piranesi', image: '6.jpg', price: 600, discount: 60, discountPrice: 600  - 60 / 100 * 600, quantity: 1, desc: "By - SUSANNA CALRKE"},
        {id: 7, name: 'The Four winds', image: '7.jpg', price: 350, discount: 20, discountPrice: 350  - 20 / 100 * 350, quantity: 1, desc: "By - KRISTIN HANNAH"},
        {id: 8, name: 'Welcome to Management', image: '8.jpg', price: 800, discount: 70, discountPrice: 800  - 70 / 100 * 800, quantity: 1, desc: "By - RYAN HAWK"},
        {id: 9, name: 'Trust Exercise', image: '9.jpg', price: 950, discount: 40, discountPrice: 950  - 40 / 100 * 950, quantity: 1, desc: "By - SUSAN CHOI"},        
        {id: 10, name: 'Maybe You Should talk to Someone', image: '10.jpg', price: 1200, discount: 30, discountPrice: 1200  - 30 / 100 * 1200, quantity: 1, desc: "By - LORI GOTTLIEB"},        
        {id: 11, name: 'Book Lovers', image: '11.jpg', price: 1500, discount: 50, discountPrice: 1500  - 50 / 100 * 1500, quantity: 1, desc: "By - EMILY HENRY"}, 

    ],
    product: {}
}
const ProductsReducer = (state = initState, action) => {
    switch(action.type){
        case "PRODUCT": 
        return {...state, product: state.products.find(product => product.id === parseInt(action.id))}
        default: 
        return state;
    }
}
export default ProductsReducer;