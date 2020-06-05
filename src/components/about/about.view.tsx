import React from 'react';
import { Anchor, Box, ResponsiveContext, Text } from 'grommet';
import { style } from 'typestyle';
import { Expand } from 'grommet-icons';
import { FavoriteIcon } from '../icons';
import styles from './about.styles';
import JustifiedText from '../justifiedText';

const About = () => (
  <ResponsiveContext.Consumer>
    {(responsive) => (
      <Box margin={responsive === 'small' ? { horizontal: 'medium' } : 'none'}>
        <Text size="xlarge" weight="bold" alignSelf="center" margin="medium">
          Are you ready to get met with art?
        </Text>
        <JustifiedText>
          This app allows you to explore one of the world’s most spectacular art collections -{' '}
          <Anchor href="https://www.metmuseum.org/" target="_blank">
            the MET
          </Anchor>
          , located in New York City.
        </JustifiedText>
        <JustifiedText>
          The first page you are landing on, the homepage, is a place where you can find a randomly
          chosen piece of art, called a “Discovery”. You can gain some insight of it by clicking a
          “Details” button or view a gallery of full sized images by choosing{' '}
          <Expand color="accent-3" className={style(styles.iconStyle)} />. If you really like the
          piece and would like to keep a record of it, click a{' '}
          <FavoriteIcon className={style(styles.iconStyle)} /> button to add it to your list of
          favorites. All the items that you liked are collected and displayed on the “Favorites”
          page.
        </JustifiedText>
        <JustifiedText>
          “Search” page allows you to look through the MET collection by using a keyword. It can be
          either the artwork’s title, author’s name or something that describes the artpiece, like
          “still nature”. Similarly to the Discovery View, you can explore a gallery of images or
          click “Learn more…” to find some more detailed information.
        </JustifiedText>
        <JustifiedText bold>
          I hope you enjoy using the <i>let’s get MET</i> app. May it bring you closer to the
          wonderful world of art.
        </JustifiedText>
        <JustifiedText>
          The application is a demo of The Metropolitan Museum of Art Collection API:
          <Anchor href="https://metmuseum.github.io/" target="_blank">
            {' '}
            https://metmuseum.github.io/
          </Anchor>
          <br />
        </JustifiedText>
        <JustifiedText>
          It is written using React, TypeScript and a Grommet components library.
          <br />
        </JustifiedText>
        <JustifiedText bold>
          Check out the GitHub repository:{' '}
          <Anchor color="accent-1" href="https://github.com/AnnaJargielo/get-met" target="_blank">
            https://github.com/AnnaJargielo/get-met
          </Anchor>
        </JustifiedText>
      </Box>
    )}
  </ResponsiveContext.Consumer>
);

export default About;
