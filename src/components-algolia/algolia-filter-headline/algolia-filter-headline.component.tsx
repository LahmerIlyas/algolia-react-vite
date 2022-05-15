/* eslint-disable react/prop-types */
import { useRefinementList } from 'react-instantsearch-hooks-web'
import { FilterHeadline } from '~/components/filter-headline/filter-headline.component'

const mapAlgoliaFilterItems = (items: Array<any>): Array<{
  label: string
  id: string | number
  isSelected: boolean
}> => {
  return items.map(item => ({
    id: item.label,
    isSelected: item.isRefined,
    label: item.label,
  }))
}

interface AlgoliaFilterHeadlineProps {
  attribute: string
  title: string
}

export const AlgoliaFilterHeadline: React.FC<AlgoliaFilterHeadlineProps> = (props) => {
  const { items, refine } = useRefinementList({
    attribute: props.attribute,
  })
  const mappedItems = useMemo(() => mapAlgoliaFilterItems(items), [items])
  return (
    <FilterHeadline
      title={props.title}
      onClicked={refine}
      items={mappedItems}
    />
  )
}
