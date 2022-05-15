/* eslint-disable react/prop-types */
import { useInfiniteHits } from 'react-instantsearch-hooks-web'
import { ProductCard } from '~/components/product-card/product-card.component'

const transformHits = (hits: Array<any>): Array => {
  return hits.map(hit => ({
    id: hit.post_id,
    title: hit.post_title,
    imgUrl: hit.images.shop_catalog.url,
    content: hit.content,
    price: hit.post_price,
    link: hit.permalink,
  }))
}

export const AlgoliaProductList: React.FC<{ hasReachedTheEnd: boolean }> = (props) => {
  const { hits, showMore, isLastPage } = useInfiniteHits({ transformItems: transformHits })

  useEffect(() => {
    if (!isLastPage && props.hasReachedTheEnd)
      showMore()
  }, [props.hasReachedTheEnd])

  return (
    <div className="grow">
      <ol className="flex flex-row flex-wrap gap-x-4 gap-y-8">
        {hits.map(hit => (
          <ProductCard key={hit.id} {...hit} />
        ))}
      </ol>
    </div>
  )
}
