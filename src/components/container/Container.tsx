import Props from '../../types/Props'

interface ContainerProps extends Props {
    className?: string,
}

const Container = (props: ContainerProps) => {
  return (
    <>
        <div className={props.className ? `container ${props.className}` : 'container'}>
            {
                props.children
            }
        </div>
    </>
  )
}

export default Container