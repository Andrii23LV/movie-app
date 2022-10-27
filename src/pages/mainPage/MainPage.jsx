import { Suspense, lazy, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import '../../pages/mainPage/main.css';
import '../../shared/styles/loader.css';

import { getGuestSessionId } from '../../api/getGuestSessionId';
import { guestId } from '../../redux/reducers/saveGuestId';

const CollectionList = lazy(() => import("../../components/main/CollectionList"));
const Trending = lazy(() => import("../../components/main/Trending"));
const Title = lazy(() => import("../../components/main/Title"));

export const MainPage = () => {

  const dispatch = useDispatch();

  const getGuestId = async () => {
      const response = await getGuestSessionId();
      const sessionGuestId = response.data.guest_session_id;
      sessionStorage.setItem('id', sessionGuestId);
      dispatch(guestId(sessionStorage.getItem('id')));
  }

  useEffect(() => {
    getGuestId()
  }, [])
  
  return (
    <>
        <Suspense fallback={<></>}>
          <Title />
        </Suspense>
        <Suspense fallback={<div className='loader'>Loading...</div>}>
          <Trending />
        </Suspense>
        <Suspense fallback={<></>}>
          <CollectionList />
        </Suspense>
    </>
  )
}

export default MainPage