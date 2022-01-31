import React from "react";
import "./PreviewCollection.styles.scss";
import CollectionItem from "../collection-item/CollectionItem";
function PreviewCollection({ title, items }) {
  console.log(title);
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otheritemProps }) => (
            <CollectionItem key={id} {...otheritemProps} />
          ))}
      </div>
    </div>
  );
}

export default PreviewCollection;
