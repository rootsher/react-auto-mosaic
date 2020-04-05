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

<img src="https://raw.githubusercontent.com/rootsher/react-auto-mosaic/master/docs/assets/img/demo.gif">

## example

1. Define the number of columns in the grid.
2. Define grid breakpoints (like in bootstrap).
3. Create a list of boxes, of any height.
4. Enjoy automatic box behavior :)

```ts
export const DemoMosaic = () => (
    <ReactAutoMosaic
        gridColumns={12}
        gridBreakpoints={{
            380: 12,
            576: 6,
            992: 4,
            1280: 3,
            1600: 2,
            1920: 1,
        }}
    >
        <div>box-1</div>
        <div>box-2</div>
        <div>box-3</div>
        <div>box-4</div>
        <div>box-5</div>
        <div>box-6</div>
        <div>box-7</div>
        <div>box-8</div>
        <div>box-9</div>
    </ReactAutoMosaic>
)};

```

## scripts

-   start dev

```shell script
$ npm start
```

## TODO

1. make package installable on the NPM.
