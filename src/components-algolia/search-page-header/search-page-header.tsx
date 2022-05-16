import { useSearchBox } from 'react-instantsearch-hooks-web'
import Typography from '../../components/typography/typography.component'

export const SearchPageHeader: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const { clear, refine } = useSearchBox()

  const onSearch = useCallback(() => {
    if (searchQuery.length === 0) {
      clear()
      return
    }
    refine(searchQuery)
  }, [searchQuery])

  const onTextChange = useCallback((e) => {
    setSearchQuery(e.target.value)
  }, [])

  return (
    <div className="relative py-8 flex flex-row justify-between align-center">
      <img src="/logo.svg" />
      <div className="flex flex-row absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <input list="wizards-list" type="text"
          onChange={onTextChange}
          className="px-4 py-2 rounded-md border-gray-200 border-2" placeholder="Search Products, categories ..." />
        <button className="ml-4" onClick={onSearch}>search</button>
      </div>
      <Typography as="h2" variant="s2">Fresh</Typography>
    </div>
  )
}
