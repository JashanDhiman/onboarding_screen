import React, { useContext } from "react";
import { OutlinedInput } from "@mui/material";
import { UserContext } from "../context/UserContext";

const InputLabel = ({ label, placeholder, name }) => {
  const { setuName } = useContext(UserContext);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <label htmlFor={name} style={{ textAlign: "left" }}>
        <b>{label}</b>
      </label>
      <OutlinedInput
        placeholder={placeholder}
        id={name}
        size="small"
        onChange={(e) => {
          name === "Displayname" && setuName(e.target.value);
        }}
      />
    </div>
  );
};
// var qty = document.getElementsByClassName("qty");
// var pPrice = document.getElementsByClassName("product-price");
// var pSubTotal = document.getElementsByClassName("product-subtotal");
// for (var i = 1; i < pPrice.length; i++) {
//     var total = (qty[i-1].value*1) * (pPrice[i].children[0].outerText.slice(1)*1);
//         console.log(total);
//     jQuery(pSubTotal[i].children[0].children[0]).empty();
//     jQuery(pSubTotal[i].children[0].children[0]).append(`<span class="woocommerce-Price-currencySymbol">₹</span>${total}`);
// };

export default InputLabel;
