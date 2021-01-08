import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {firebaseApp} from './app/utils/firebase';
import {LogBox} from "react-native";
import Navigation from "./app/navigations/Navigation";

LogBox.ignoreAllLogs();
export default function App() {
  return (
    <Navigation />
  );
}