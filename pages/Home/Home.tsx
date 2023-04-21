import * as React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import HomeStyles from './HomeStyles';
import useStyles from '../../custom_hooks/useStyles';
import { ThemeKeys } from '../../styles/themes';
import ThemeContext from '../../custom_context/ThemeContext';

export default function Home() {
  const {theme, setTheme} = React.useContext(ThemeContext)!
  const styles = useStyles(HomeStyles);

  function toggleTheme() {
    theme === ThemeKeys.Dark
      ? setTheme(ThemeKeys.Light)
      : setTheme(ThemeKeys.Dark);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleTheme}>
        <Text style={styles.button}> toggle theme </Text>
      </TouchableOpacity>
    </View>
  );
}
