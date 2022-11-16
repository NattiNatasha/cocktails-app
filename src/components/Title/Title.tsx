import './Title.scss'

interface Props {
  title: string
  addition: string
}

export const Title = (props: Props) => {
  return (
    <>
      <h1 className="heading">
        {props.title} <span>{props.addition}</span>
      </h1>
    </>
  )
}
