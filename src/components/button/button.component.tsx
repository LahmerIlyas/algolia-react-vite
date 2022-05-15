/* eslint-disable react/prop-types */
interface ButtonProps {
  variant: 'primary' | 'secondary'
}

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button className="px-4 py-2 rounded-2 border-2 font-medium bg-green-200">
      {props.children}
    </button>
  )
}
