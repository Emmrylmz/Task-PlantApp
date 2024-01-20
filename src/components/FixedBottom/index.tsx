import { View, Text } from "react-native";
import React, { FC, ReactElement, ReactNode, useMemo } from "react";
import createStyles from "./styles";

interface IFixedBottomProps {
  children?: ReactNode | ReactNode[] | ReactElement | ReactElement[] ;
}

const FixedBottom: FC<IFixedBottomProps> = ({ children }) => {
  const styles = useMemo(() => createStyles(),[])
  return (
    <>
    <View style={styles.body}>
     {cloneChildrenWithKeys(children)}
    </View>
    </>
  );
};

function cloneChildrenWithKeys(children:IFixedBottomProps) {
    // Handle conditional rendering and potential empty children
    return children && (
      Array.isArray(children) && children.length > 0
        ? React.Children.map(children, (child, index) =>
            React.cloneElement(child, { key: `child-${index}` })
          )
        : React.cloneElement(children)
    );
  }

export default FixedBottom;
