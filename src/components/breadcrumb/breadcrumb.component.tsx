import Typography from '../typography/typography.component'

export const BreadCrumb: React.FC = () => {
  return (
    <div className="flex flex-row align-center gap-x-1 py-4">
      <Typography as="h6" variant="s6" className="font-normal">Homepage</Typography>
      <Typography as="h6" variant="s6" className="font-normal">/</Typography>
      <Typography as="h6" variant="s6" className="font-normal"> Fruit and vegetables</Typography>
    </div>
  )
}
