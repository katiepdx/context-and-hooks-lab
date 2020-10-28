import React from 'react';
import Header from './Header';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import AllVillagersPage from '../../pages/AllVillagersPage'
import VillagerDetailPage from '../../pages/VillagerDetailPage'
import styles from './App.css'

export default function App() {
  return (
    <>
      {/* toggle button in Header component*/}
      <Header />

      <Router>
        <nav className={styles.navLinks}>
          <li className={styles.link}><Link to="/"> All Villagers </Link></li>
          <li className={styles.link}><Link to="/details"> Villager Details </Link></li>
        </nav>
        <Switch>
          <Route exact path="/" component={AllVillagersPage} />
          <Route exact path="/details/" component={VillagerDetailPage} />
        </Switch>
      </Router >

    </>
  )
}
