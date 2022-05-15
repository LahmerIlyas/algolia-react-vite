import Typography from '../typography/typography.component'

export const AppBar = () => {
  return (
    <div className="flex flex-row justify-between align-center py-4 border-b-2 border-gray-100">
      <div className="flex flex-row align-center gap-x-8">
        <Typography as="a" variant="body" className="text-green-500">Chat with us</Typography>
        <Typography as="a" variant="body">+420 336 775 664</Typography>
        <Typography as="a" variant="body">info@freshnesecom.com</Typography>
      </div>
      <div className="flex flex-row align-center gap-x-8">
        <Typography as="a" variant="body" className="text-green-500">Blog</Typography>
        <Typography as="a" variant="body" className="text-green-500">About US</Typography>
        <Typography as="a" variant="body" className="text-green-500">Careers</Typography>
      </div>
    </div>
  )
}
