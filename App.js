import AppNavigator from './src/navigation/AppNavigator';
import AuthNavigator from './src/navigation/AuthNavigator';
import React, { useState } from "react";
import { ThemeProvider } from './src/components/ThemeContext';

export default function App() {
   return <ThemeProvider><AuthNavigator /></ThemeProvider>;
}

