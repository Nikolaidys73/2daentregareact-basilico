import React from "react";

const CartWidget = () => {
    return (
        <button type="button" className="btn white position-relative">
            <img src={"/img/cart2.svg"} alt={"Carrito"} width={32} />
<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">+2</span>
</button>

    )
}

export default CartWidget;