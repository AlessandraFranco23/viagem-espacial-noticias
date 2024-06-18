import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import * as Linking from 'expo-linking';
import { useTheme } from '../components/ThemeContext';


export default function Home({ navigation }) {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const { isDarkMode } = useTheme();


  const getNoticias = async (pageNumber, isRefresh = false) => {
    if (loading) return;

    setLoading(true);
    try {
      const response = await fetch(`https://api.spaceflightnewsapi.net/v4/articles/?limit=10&offset=${pageNumber * 10}`);
      const data = await response.json();
      if (data.results.length > 0) {
        setNoticias((prevNoticias) => isRefresh ? data.results : [...prevNoticias, ...data.results]);
        if (isRefresh) setHasMore(true); // Reset hasMore on refresh
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      if (isRefresh) setRefreshing(false);
    }
  };

  useEffect(() => {
    getNoticias(page);
  }, [page]);

  const loadMoreNoticias = () => {
    if (!loading && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    setPage(0);
    getNoticias(0, true);
  };

  const renderFooter = () => {
    if (!loading) return null;
    return (
      <View style={{ padding: 10 }}>
        <ActivityIndicator size="large" />
      </View>
    );
  };

  const handlePress = (url) => {
    Linking.openURL(url);
  };

  const renderItem = ({ item }) => {
    if (item.title === "[Removed]") return null;
    return (
      <TouchableOpacity onPress={() => handlePress(item.url)}>
        <Card style={styles.card}>
          <Card.Content>
            <Image
              source={{ uri: item.image_url }}
              style={styles.image}
            />
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.summary}</Text>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <FlatList
        data={noticias}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={loadMoreNoticias}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  darkContainer: {
    backgroundColor: 'black',
  },
  card: {
    margin: 10,
  },
  image: {
    height: 200,
    width: '100%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
