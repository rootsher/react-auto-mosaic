# [react-auto-mosaic](https://github.com/rootsher/react-auto-mosaic)

[![npm version](https://img.shields.io/npm/v/react-auto-mosaic.svg)](https://www.npmjs.com/package/react-auto-mosaic)
[![npm downloads](https://img.shields.io/npm/dm/react-auto-mosaic.svg)](https://www.npmjs.com/package/react-auto-mosaic)
[![GitHub issues](https://img.shields.io/github/issues/rootsher/react-auto-mosaic.svg)](https://github.com/rootsher/react-auto-mosaic/issues)
[![GitHub PRs](https://img.shields.io/github/issues-pr/rootsher/react-auto-mosaic.svg)](https://github.com/rootsher/react-auto-mosaic/pulls)
[![MIT license](https://img.shields.io/npm/l/react-auto-mosaic.svg)](https://opensource.org/licenses/MIT)

## installation

```shell script
npm install --save react-auto-mosaic
```

## demo

### before (problem with mismatched tiles)

<img src="https://raw.githubusercontent.com/rootsher/react-auto-mosaic/master/docs/assets/img/demo-before.gif">

### after (solved using react-auto-mosaic)

<img src="https://raw.githubusercontent.com/rootsher/react-auto-mosaic/master/docs/assets/img/demo-after.gif">

## example

1. Define the number of columns in the grid.
2. Define grid breakpoints (like in bootstrap).
3. Create a list of tiles, of any height.
4. Enjoy automatic tiles behavior :)

```ts
export const DemoMosaic = () => (
    <ReactAutoMosaic
        gridColumns={12}
        gridGutterWidth={20}
        gridBreakpoints={{
            380: 12,
            576: 6,
            992: 4,
            1280: 3,
            1600: 2,
            1920: 1,
        }}
    >
        <div>tile-1</div>
        <div>tile-2</div>
        <div>tile-3</div>
        <div>tile-4</div>
        <div>tile-5</div>
        <div>tile-6</div>
        <div>tile-7</div>
        <div>tile-8</div>
        <div>tile-9</div>
    </ReactAutoMosaic>
)};

```

## scripts

-   start dev

```shell script
$ npm start
```
