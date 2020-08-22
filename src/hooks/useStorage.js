import { useEffect, useReducer } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';

const useStorage = file => {
  const [state, dispatch] = useReducer((initialState, nextState) => ({ ...initialState, ...nextState }), {
    progress: 0,
    error: null,
    url: null
  });
  const { progress, error, url } = state;

  useEffect(() => {
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection('images'); // create a new collection / get ref to existing collection

    storageRef.put(file).on(
      'state_changed',
      snap => {
        const uploadPercentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        dispatch({ progress: uploadPercentage });
      },
      err => {
        dispatch({ error: err });
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        collectionRef.add({ url, createdAt });
        dispatch({ url });
      }
    );
  }, [file]);

  return { progress, error, url };
};

export default useStorage;
