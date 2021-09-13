/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import { useAudio } from 'react-use';
import HomeScreen from './component/HomeScreen';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomeScreen} />
      </Switch>
    </Router>
  );
}
