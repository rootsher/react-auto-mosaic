import React from 'react';
import { createUseStyles } from 'react-jss';

import { ReactAutoMosaic } from 'react-auto-mosaic';

const useStyles = createUseStyles({
    tile: {
        backgroundColor: '#F93',
        border: '1px solid #000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: '1.4rem',
    },
});

export const DemoMosaic = () => {
    const classes = useStyles();

    return (
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
            <div className={classes.tile} style={{ height: '100px' }}>
                tile-1
            </div>
            <div className={classes.tile} style={{ height: '200px' }}>
                tile-2
            </div>
            <div className={classes.tile} style={{ height: '160px' }}>
                tile-3
            </div>
            <div className={classes.tile} style={{ height: '150px' }}>
                tile-4
            </div>
            <div className={classes.tile} style={{ height: '180px' }}>
                tile-5
            </div>
            <div className={classes.tile} style={{ height: '140px' }}>
                tile-6
            </div>
            <div className={classes.tile} style={{ height: '220px' }}>
                tile-7
            </div>
            <div className={classes.tile} style={{ height: '140px' }}>
                tile-8
            </div>
            <div className={classes.tile} style={{ height: '80px' }}>
                tile-9
            </div>
            <div className={classes.tile} style={{ height: '90px' }}>
                tile-10
            </div>
            <div className={classes.tile} style={{ height: '120px' }}>
                tile-11
            </div>
            <div className={classes.tile} style={{ height: '200px' }}>
                tile-12
            </div>
            <div className={classes.tile} style={{ height: '80px' }}>
                tile-13
            </div>
            <div className={classes.tile} style={{ height: '60px' }}>
                tile-14
            </div>
            <div className={classes.tile} style={{ height: '100px' }}>
                tile-15
            </div>
        </ReactAutoMosaic>
    );
};
