import { Collection } from "../../shared/components/Collection";
import { getCollection } from '../../pages/mainPage/api/getCollection';
import '../../shared/styles/collection.css'

export const CollectionList = () => {
    const collections = [295, 263, 10, 86311];
    return (
    <section className='collection'>
        <h2>Most popular collections</h2>
        <div className="collection__list">
            {collections.map((collection) => {
                return <Collection id={collection} key={collection}/>
            })}
        </div>
    </section>
    )
}
