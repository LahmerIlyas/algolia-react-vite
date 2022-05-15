import type { ReactNode } from 'react'
import { Component } from 'react'
import { Button } from '../button/button.component'
import Typography from '../typography/typography.component'

interface ProductCardProps {
  id: number
  title: string
  imgUrl: string
  content: string
  price: string
  link: string
}

export class ProductCard extends Component<ProductCardProps> {
  render(): ReactNode {
    return (
      <div className="flex flex-col border-2 rounded-4 border-gray-200 px-4 py-4 lg:basis-[30%] grow shrink lg:max-w-[33%]">
        <img
          src={this.props.imgUrl}
          className="rounded-4 border-none h-xs w-full object-cover object-top"
        />
        <Typography as="h4" variant="s4" className="truncate max-w-[100%]">{this.props.title}</Typography>
        <Typography as="h5" variant="caption" className="mt-1 line-clamp-3 mb-4">{this.props.content}</Typography>
        <div className="flex flex-row justify-between items-center mt-auto">
          <Typography as="h4" variant="s4" dangerouslySetInnerHTML={{ __html: this.props.price }} />
          <Button variant="primary">
            Buy Now
          </Button>
        </div>
      </div>
    )
  }
}
