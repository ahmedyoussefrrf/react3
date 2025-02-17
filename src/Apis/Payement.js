import axios from "axios";
let token = localStorage.getItem('token')

export function payementOnline({cartId,shippingAddress})
{
    return axios.post(`https://ecommerce.routemisr.com/
    // api/v1/orders/
    // checkout-session/${cartId}?url=http://localhost:5174`,{shippingAddress},{headers:{token}})
}
