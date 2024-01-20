import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './style';

type PaginatorProps = {
  pages: number;
  currentPage: number;
};

const Paginator: React.FC<PaginatorProps> = ({ pages, currentPage }) => {
  // Create an array of page indicators and render them
  const pageIndicators = Array.from({ length: pages }, (_, index) => (
    <View
      key={index}
      style={[
        styles.dot,
        index === currentPage ? styles.activeDot : styles.inactiveDot,
      ]}
    />
  ));

  return <View style={styles.container}>{pageIndicators}</View>;
};

export default Paginator