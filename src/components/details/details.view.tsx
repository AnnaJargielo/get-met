import React, { useState, Fragment, ReactNode } from 'react';
import { Anchor, Box, Text, Button, Collapsible } from 'grommet';
import { FormDown, FormNext, Expand, Favorite } from 'grommet-icons';
import { ObjectItem } from '../../hooks';
import { style } from 'typestyle';
import styles from './details.styles';

const MenuButton = ({
  label,
  open,
  onClick,
  rightSlot,
}: {
  label: string;
  open: boolean;
  onClick: () => void;
  rightSlot?: ReactNode;
}) => {
  const Icon = open ? FormDown : FormNext;
  return (
    <Button hoverIndicator="background" onClick={onClick}>
      <Box direction="row" justify="between" border={{ color: 'accent-3', size: 'xsmall' }}>
        <Box direction="row" align="center" pad="xsmall">
          <Icon color="accent-3" />
          <Text size="medium" weight="bold">
            {label}
          </Text>
        </Box>
        {rightSlot}
      </Box>
    </Button>
  );
};

const Details = ({
  discovery,
  setIsModalOpen,
}: {
  discovery: ObjectItem;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [open, setOpen] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const onClickExpand = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const onClickFavorite = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.stopPropagation();
    setFavorite(!favorite);
  };

  return (
    <Box>
      <MenuButton
        open={open}
        label="Details"
        onClick={() => setOpen(!open)}
        rightSlot={
          <Box gridArea="icons" direction="row" pad="small">
            <Expand
              a11yTitle="Expand image"
              color="accent-3"
              onClick={onClickExpand}
              className={style(styles.icon)}
            />
            <Favorite
              a11yTitle="Add to favorites"
              color={favorite ? 'accent-1' : 'accent-3'}
              onClick={onClickFavorite}
              className={style(styles.icon)}
            />
          </Box>
        }
      />

      <Collapsible open={open}>
        <Box pad="10px 12px">
          <Text>
            <b>Medium: </b>
            {discovery.medium || '-'}
          </Text>
          <Text>
            <b>Dimensions: </b> {discovery.dimensions || '-'}
          </Text>
          <Text>
            <b>Credit Line: </b> {discovery.creditLine || '-'}
          </Text>
          <Text>
            <b>Bio: </b> {discovery.artistDisplayBio || '-'}
          </Text>
          <Text>
            <b>Tags:</b>
            {discovery.tags
              ? discovery.tags.map((tag, idx) => (
                  <Fragment key={`${tag.term}-${idx}`}>
                    <Anchor
                      href={tag.AAT_URL}
                      label={tag.term}
                      margin={{ left: 'xsmall' }}
                      target="_blank"
                    />
                    {idx !== discovery.tags.length - 1 && ','}
                  </Fragment>
                ))
              : ' -'}
          </Text>
          {discovery.objectURL && (
            <Anchor href={discovery.objectURL} target="_blank">
              Learn more...
            </Anchor>
          )}
        </Box>
      </Collapsible>
    </Box>
  );
};

export default Details;
