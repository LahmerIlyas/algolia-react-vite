import classNames from 'classnames'

const styles = {
  s1: 'text-s1',
  s2: 'text-s2',
  s3: 'text-s3',
  s4: 'text-s4',
  s5: 'text-s5',
  s6: 'text-s6',
  btn: 'text-btn',
  lead: 'text-lead',
  body: 'text-body',
  caption: 'text-caption',
} as const

interface TypographyProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  variant: keyof typeof styles
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'a'
  className?: string
}

export const Typography: React.FC<TypographyProps> = ({ variant, className, children, ...other }) => {
  const c = classNames(styles[variant], {
    [className]: !!className,
  })

  return (
    <other.as className={c} {...other}>
      {children}
    </other.as>
  )
}

export default Typography
