import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ObjectsState } from '../../slices/objects';
import { RootState, useAppDispatch } from '../../store';
import ObjectsView from './objects.view';
import { fetchObjects } from '../../actions';

const ObjectsContainer = () => {
  const { loading, data, error } = useSelector<RootState, ObjectsState>((state) => state.objects);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchObjects());
  }, [dispatch]);

  if (loading === 'idle' || loading === 'pending') {
    return <div>Loading</div>;
  }

  if (loading === 'failed') {
    return <div>{error?.message}</div>;
  }

  return <ObjectsView />;
};

export default ObjectsContainer;
