# react-slim-progress-webpack

This is a sample of creating React Shippable Component with external CSS files by using `react-css-modules`.
In order to use this module, proper webpack configuration is need.
Instead of managing inline css, use `react-css-modules` to build an external css file

Useage:

```
npm install react-slim-progress-webpack
```

```es6
import Progress from 'react-slim-progress-webpack';

export default class App extends Component {
  render() {
    return (
      <Progress color="#ff0000" percent={30} />
    );
  }
}
```
