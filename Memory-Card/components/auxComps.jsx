function Card({children,onClick}) {
    return (
        <button onClick={onClick} className="card">
            {children}
        </button>
    )
}

function Img({img,name}) {
    return (
    <figure>
        <img src={img} alt={name} />
    </figure>
    )
}

function Caption({name}) {
    return (
        <div className="card-content">
            <p>
                <span>{name}</span>
            </p>
        </div>
    )
}

export{Card,Img,Caption}