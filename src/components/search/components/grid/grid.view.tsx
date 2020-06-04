import React from 'react';
import { Grid, InfiniteScroll } from 'grommet';
import { GridElement } from './components';

const GridView = ({ items }: { items: Array<number> }) => {
  return (
    <Grid columns="small" rows="small" gap="large" margin="large">
      <InfiniteScroll items={items} step={24}>
        {(item, idx, ref) => <GridElement ref={ref} key={`${idx}-${item}`} objectId={item} />}
      </InfiniteScroll>
    </Grid>
  );
};

export default GridView;
