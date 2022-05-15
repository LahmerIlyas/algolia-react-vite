/* eslint-disable react/prop-types */
import Typography from '../typography/typography.component'

interface FilterHeadlineProps {
  items: Array<{
    id: string | number
    label: string
    isSelected: boolean
  }>
  onClicked: (id: string) => void
  title: string
}

export const FilterHeadline: React.FC<FilterHeadlineProps> = (props) => {
  return (
    <div>
      <Typography as="h2" variant="s2" className="mb-4">{props.title}</Typography>
      {props.items.map(item => (
        <div key={item.id} className="flex flex-row items-center">
          <input
            className="mr-4"
            type="checkbox"
            value={item.label}
            checked={item.isSelected}
            onChange={() => props.onClicked(item.id)}
          />
          <Typography
            className="truncate"
            as="h5"
            variant="s5"
          >{item.label}
          </Typography>

        </div>
      ))}
    </div>
  )
}
