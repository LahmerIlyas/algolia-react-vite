import { AppBar } from '~/components/app-bar/app-bar.component'
import { SearchPageHeader } from '~/components-algolia/search-page-header/search-page-header'
import { AlgoliaProductList } from '~/components-algolia/algolia-product-list/algolia-product-list.component'
import { AlgoliaFilterHeadline } from '~/components-algolia/algolia-filter-headline/algolia-filter-headline.component'
import { useScrollToBottomListener } from '~/hooks/use-scroll-to-bottom-listener'

export default function Index() {
  const { ref, isAtBottom } = useScrollToBottomListener()
  return (
    <div ref={ref} className="px-8 h-screen overflow-scroll">
      <AppBar />
      <SearchPageHeader />
      <div className="flex flex-row">
        <div className="flex flex-col w-128 gap-y-4">
          <AlgoliaFilterHeadline
            attribute="taxonomies.product_cat"
            title="Categories"
          />
          <AlgoliaFilterHeadline
            attribute="taxonomies.product_brand"
            title="Brands"
          />
          <AlgoliaFilterHeadline
            attribute="taxonomies.pa_storrelse"
            title="Size"
          />
          <AlgoliaFilterHeadline
            attribute="taxonomies.product_tag"
            title="Tags"
          />
          <AlgoliaFilterHeadline
            attribute="taxonomies.product_type"
            title="Type"
          />
        </div>
        <AlgoliaProductList hasReachedTheEnd={isAtBottom}/>
      </div>
    </div>

  )
}
