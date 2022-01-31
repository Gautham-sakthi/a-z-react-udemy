import React, { useState } from "react";
import PreviewCollection from "../../Components/preview-collection/PreviewCollection";
import SHOP_DATA from "./ShopData";
function ShopPage() {
  const [state] = useState(SHOP_DATA);
  return (
    <div className="shop-page">
      {state.map(({ id, ...othercollectionsProps }) => (
        <PreviewCollection key={id} {...othercollectionsProps} />
      ))}
    </div>
  );
}

export default ShopPage;
