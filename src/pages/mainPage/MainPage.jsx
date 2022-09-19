import { Title } from "../../components/main/Title"
import { Trending } from "../../components/main/Trending"
import { CollectionList } from "../../components/main/CollectionList"
import '../../pages/mainPage/main.css';

export const MainPage = () => {
  return (
    <>
        <Title />
        <Trending />
        <CollectionList />
    </>
  )
}

export default MainPage