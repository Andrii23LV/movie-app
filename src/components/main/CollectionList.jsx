import { CollectionCard } from "../../shared/components/CollectionCard";
import '../../shared/styles/collection.css'

const CollectionList = () => {
    const collections = [295, 263, 10, 86311, 264, 119];
    return (
    <section className='collection'>
            <div className="collection__list">
                <h2>Most popular collections</h2>
                {collections.map((collection) => {
                    return <CollectionCard id={collection} key={collection}/>
                })}
            </div>
    </section>
    )
}

export default CollectionList;
