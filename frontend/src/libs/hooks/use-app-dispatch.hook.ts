import { useDispatch } from 'react-redux';

import { type store } from '../../modules/store/store';

const useAppDispatch = useDispatch.withTypes<typeof store.instance.dispatch>();

export { useAppDispatch };
