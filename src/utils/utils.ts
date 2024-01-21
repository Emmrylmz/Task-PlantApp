import React, { ReactElement, ReactNode } from "react";

export function cloneChildrenWithKeys(children: ReactNode | ReactNode[]) {
  return (
    children &&
    (Array.isArray(children) && children.length > 0
      ? React.Children.map(children, (child, index) =>
          React.cloneElement(child as ReactElementt, { key: `child-${index}` })
        )
      : React.cloneElement(children as ReactElement, { key: "child" }))
  );
}