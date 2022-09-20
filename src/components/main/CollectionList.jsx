import { Collection } from "../../shared/components/Collection";
import { getCollection } from '../../pages/mainPage/api/getCollection';
import '../../shared/styles/collection.css'

export const CollectionList = () => {
    const collections = [295, 263, 10, 86311, 264, 119];
    return (
    <section className='collection'>
            <div className="collection__list">
                <h2>Most popular collections</h2>
                {collections.map((collection) => {
                    return <Collection id={collection} key={collection}/>
                })}
            </div>
    </section>
    )
}
