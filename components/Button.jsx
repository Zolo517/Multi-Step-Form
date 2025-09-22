export const Button =(props)=>{
    const { currentIndex, setCurrentIndex } = props
    return(
        <button onClick={()=> setCurrentIndex(currentIndex+1)}>next</button>
    )
}