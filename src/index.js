import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

class App extends React.Component {
  handleClick() {
    console.log('a标签的单击事件触发了！')
  }
  render() {
    return (
      <a href="http://itcast.cn/" onClick={this.handleClick}>学渣在线学习传智播客黑马</a>
    )
  }
}

// 渲染组件
ReactDOM.render(<App />, document.getElementById('root'))
