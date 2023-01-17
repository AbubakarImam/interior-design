import image from "../assets/underconstruction.png"

const pages = () => {
    return (
        <div className='bg-primary2 flex flex-col justify-center items-center'>
            <h1 className="text-h1 text-primary3 text-serif">Construction in progress</h1>
            <img src={image} alt="" />
        </div>
    )
}

export default pages