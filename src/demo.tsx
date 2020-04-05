import React from 'react';
import { createUseStyles } from 'react-jss';

import { ReactAutoMosaic } from './react-auto-mosaic';

const useStyles = createUseStyles({
    box: {
        backgroundColor: '#F93',
        border: '1px solid #000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        margin: '0 0.5rem 1rem 0.5rem',
        fontSize: '1.4rem',
    },
});

export const DemoMosaic = () => {
    const classes = useStyles();

    return (
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
            <div className={classes.box} style={{ height: '100px' }}>
                box-1
            </div>
            <div className={classes.box} style={{ height: '200px' }}>
                box-2
            </div>
            <div className={classes.box} style={{ height: '160px' }}>
                box-3
            </div>
            <div className={classes.box} style={{ height: '150px' }}>
                box-4
            </div>
            <div className={classes.box} style={{ height: '180px' }}>
                box-5
            </div>
            <div className={classes.box} style={{ height: '140px' }}>
                box-6
            </div>
            <div className={classes.box} style={{ height: '220px' }}>
                box-7
            </div>
            <div className={classes.box} style={{ height: '140px' }}>
                box-8
            </div>
            <div className={classes.box} style={{ height: '80px' }}>
                box-9
            </div>
            <div className={classes.box} style={{ height: '90px' }}>
                box-10
            </div>
            <div className={classes.box} style={{ height: '120px' }}>
                box-11
            </div>
            <div className={classes.box} style={{ height: '200px' }}>
                box-12
            </div>
            <div className={classes.box} style={{ height: '80px' }}>
                box-13
            </div>
            <div className={classes.box} style={{ height: '60px' }}>
                box-14
            </div>
            <div className={classes.box} style={{ height: '100px' }}>
                box-15
            </div>
        </ReactAutoMosaic>
    );
};
