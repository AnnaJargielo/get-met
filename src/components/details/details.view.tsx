import React, { useState } from 'react';
import { Box, Text, Button, Collapsible } from 'grommet';
import { FormDown, FormNext } from 'grommet-icons';
import { ObjectItem } from '../../hooks';

const MenuButton = ({
  label,
  open,
  onClick,
}: {
  label: string;
  open: boolean;
  onClick: () => void;
}) => {
  const Icon = open ? FormDown : FormNext;
  return (
    <Button hoverIndicator="background" onClick={onClick}>
      <Box direction="row" align="center" pad="xsmall">
        <Icon color="brand" />
        <Text size="small">{label}</Text>
      </Box>
    </Button>
  );
};

const Details = ({ discovery }: { discovery: ObjectItem }) => {
  const [open, setOpen] = useState(false);
  return (
    <Box>
      <MenuButton open={open} label="Details" onClick={() => setOpen(!open)} />
      <Collapsible open={open}>
        <Text>Medium: {discovery.medium}</Text>
        <Text>Dimensions: {discovery.dimensions}</Text>
        <Text>Credit Line: {discovery.creditLine}</Text>
        <Text>Bio: {discovery.artistDisplayBio}</Text>
        <Text>
          Tags:{' '}
          {(discovery.tags || []).map((tag) => (
            <Text>
              {tag.AAT_URL} {tag.term}
            </Text>
          ))}
        </Text>
      </Collapsible>
    </Box>
  );
};

export default Details;
