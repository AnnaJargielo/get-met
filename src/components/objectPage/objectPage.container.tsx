import React from 'react';
import ObjectView from './objectPage.view';
import { useParams, Redirect } from 'react-router-dom';

const ObjectPageContainer = () => {
  const { objectId } = useParams();

  const isNumber = isNaN(objectId);

  if (objectId && isNumber) {
    return <Redirect to="/" />;
  }

  return <ObjectView id={parseInt(objectId)} />;
};

export default ObjectPageContainer;
