import React, { FC, Fragment, ReactElement, useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    column: {
        flex: ({ columnSize }: { columnSize: number }) => `0 0 ${columnSize}%`,
        maxWidth: ({ columnSize }: { columnSize: number }) => `${columnSize}%`,
    },
});

type ReactAutoMosaicProps = {
    children: ReactElement[];
    gridColumns: number;
    gridBreakpoints: { [key: string]: number };
};

function bucketAlgorithm(
    columns: number,
    list: ReactElement[]
): Array<ReactElement[]> {
    const buckets: ReactElement[][] = [];
    let bucketIndex: number = 0;

    list.forEach((element) => {
        if (!buckets[bucketIndex]) {
            buckets[bucketIndex] = [];
        }

        buckets[bucketIndex++].push(element);

        if (bucketIndex === columns) {
            bucketIndex = 0;
        }
    });

    return buckets;
}

export const ReactAutoMosaic: FC<ReactAutoMosaicProps> = ({
    children,
    gridColumns,
    gridBreakpoints,
}) => {
    const [columns, setColumns] = useState<number>(0);
    const classes = useStyles({ columnSize: 100 / columns });
    const buckets = bucketAlgorithm(columns, children);

    useEffect(() => {
        const resizeListener = () => {
            const breakpoints: string[] = Object.keys(gridBreakpoints);
            const { innerWidth: windowSize }: { innerWidth: number } = window;

            for (
                let breakpoint: number = 0;
                breakpoint < breakpoints.length;
                breakpoint++
            ) {
                if (Number(breakpoints[breakpoint]) > windowSize) {
                    const columns = gridBreakpoints[breakpoints[breakpoint]];

                    setColumns(gridColumns / columns);

                    return;
                }
            }
        };

        resizeListener();

        window.addEventListener('resize', resizeListener);

        return () => window.removeEventListener('resize', resizeListener);
    }, [gridColumns, gridBreakpoints]);

    return (
        <div className={classes.container}>
            {Array.from({ length: columns }).map((_column, index) => {
                return (
                    <div key={index} className={classes.column}>
                        {buckets[index].map((element: ReactElement, index) => {
                            return <Fragment key={index}>{element}</Fragment>;
                        })}
                    </div>
                );
            })}
        </div>
    );
};
