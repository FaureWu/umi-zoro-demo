import { Component } from 'react';
import styles from './index.css';
import { dispatcher } from '@opcjs/zoro';
import { connect } from 'react-redux';

@connect(state => ({
  text: state.demo.text,
}))
class Index extends Component {
  componentDidMount() {
    dispatcher.demo.getDemo().then(() => console.log('success'))
  }

  render() {
    return (
      <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            Getting Started {this.props.text}
          </a>
        </li>
      </ul>
    </div>
    )
  }
}

export default Index
