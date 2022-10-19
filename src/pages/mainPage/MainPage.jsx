import {Suspense, lazy} from 'react'
import '../../pages/mainPage/main.css';
import '../../shared/styles/loader.css';

const CollectionList = lazy(() => import("../../components/main/CollectionList"));
const Trending = lazy(() => import("../../components/main/Trending"));
const Title = lazy(() => import("../../components/main/Title"));

export const MainPage = () => {
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